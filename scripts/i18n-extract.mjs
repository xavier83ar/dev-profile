/**
 * Extract translatable strings into the gettext template.
 *
 *   npm run i18n:extract
 *
 * The xgettext step of the GNU workflow. It writes `src/locales/messages.pot`
 * from every call to `__`, `_n`, `_p` and `N_` in `src/`, plus the page titles
 * and descriptions in the HTML entry points.
 *
 * xgettext cannot read `.vue` files, which is why this is a script: each
 * single-file component is split with Vue's own compiler, its `<script>` blocks
 * parsed as TypeScript, and every template expression — interpolations and
 * directive values — parsed as its own snippet, with line numbers kept so the
 * `#:` references in the catalog point at the real source line.
 */

import { GettextExtractor, JsExtractors, HtmlExtractors } from "gettext-extractor";
import { parse } from "vue/compiler-sfc";
import { readFile, readdir } from "node:fs/promises";
import { relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const POT = "src/locales/messages.pot";

/** @vue/compiler-core NodeTypes. */
const ELEMENT = 1;
const INTERPOLATION = 5;
const DIRECTIVE = 7;

const extractor = new GettextExtractor();

const js = extractor.createJsParser([
  JsExtractors.callExpression(["__", "N_"], { arguments: { text: 0 } }),
  JsExtractors.callExpression("_n", { arguments: { text: 0, textPlural: 1 } }),
  JsExtractors.callExpression("_p", { arguments: { context: 0, text: 1 } }),
]);

const html = extractor.createHtmlParser([
  HtmlExtractors.elementContent("title"),
  HtmlExtractors.elementAttribute('meta[name="description"]', "content"),
]);

const sources = (await readdir(`${root}src`, { recursive: true }))
  .map((file) => `src/${file}`)
  .sort();

for (const file of sources.filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts"))) {
  js.parseString(await readFile(`${root}${file}`, "utf-8"), file);
}

for (const file of sources.filter((f) => f.endsWith(".vue"))) {
  const { descriptor } = parse(await readFile(`${root}${file}`, "utf-8"), { filename: file });

  for (const block of [descriptor.script, descriptor.scriptSetup]) {
    if (block) js.parseString(block.content, file, { lineNumberStart: block.loc.start.line });
  }

  const expressions = [];
  const walk = (node) => {
    if (node.type === INTERPOLATION) expressions.push(node.content);
    if (node.type === ELEMENT) {
      for (const prop of node.props) {
        if (prop.type === DIRECTIVE && prop.exp) expressions.push(prop.exp);
      }
    }
    node.children?.forEach(walk);
  };
  if (descriptor.template?.ast) walk(descriptor.template.ast);

  for (const exp of expressions) {
    js.parseString(exp.content, file, { lineNumberStart: exp.loc.start.line });
  }
}

for (const file of ["index.html", "projects/index.html"]) {
  html.parseString(await readFile(`${root}${file}`, "utf-8"), file);
}

extractor.savePotFile(`${root}${POT}`, {
  "Project-Id-Version": "dev-profile",
  "Content-Type": "text/plain; charset=UTF-8",
});
const { numberOfMessages, numberOfMessageUsages } = extractor.getStats();
console.log(
  `✓ ${relative(process.cwd(), `${root}${POT}`)}: ` +
    `${numberOfMessages} messages, ${numberOfMessageUsages} usages`,
);
