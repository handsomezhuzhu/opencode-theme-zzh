import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

const colorKeys = [
  "primary",
  "secondary",
  "accent",
  "error",
  "warning",
  "success",
  "info",
  "text",
  "textMuted",
  "background",
  "backgroundPanel",
  "backgroundElement",
  "border",
  "borderActive",
  "borderSubtle",
  "diffAdded",
  "diffRemoved",
  "diffContext",
  "diffHunkHeader",
  "diffHighlightAdded",
  "diffHighlightRemoved",
  "diffAddedBg",
  "diffRemovedBg",
  "diffContextBg",
  "diffLineNumber",
  "diffAddedLineNumberBg",
  "diffRemovedLineNumberBg",
  "markdownText",
  "markdownHeading",
  "markdownLink",
  "markdownLinkText",
  "markdownCode",
  "markdownBlockQuote",
  "markdownEmph",
  "markdownStrong",
  "markdownHorizontalRule",
  "markdownListItem",
  "markdownListEnumeration",
  "markdownImage",
  "markdownImageText",
  "markdownCodeBlock",
  "syntaxComment",
  "syntaxKeyword",
  "syntaxFunction",
  "syntaxVariable",
  "syntaxString",
  "syntaxNumber",
  "syntaxType",
  "syntaxOperator",
  "syntaxPunctuation"
]

const root = process.cwd()
const pkg = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"))
const themePaths = pkg["oc-themes"]

if (!Array.isArray(themePaths) || themePaths.length === 0) {
  throw new Error('package.json must contain a non-empty "oc-themes" array')
}

for (const themePath of themePaths) {
  const document = JSON.parse(await readFile(resolve(root, themePath), "utf8"))
  const defs = document.defs ?? {}
  const theme = document.theme

  const unknownTopLevel = Object.keys(document).filter((key) => !["$schema", "defs", "theme"].includes(key))
  if (unknownTopLevel.length) {
    throw new Error(`${themePath}: unknown top-level fields: ${unknownTopLevel.join(", ")}`)
  }

  if (document.$schema !== "https://opencode.ai/theme.json") {
    throw new Error(`${themePath}: missing OpenCode theme schema`)
  }
  if (!defs || typeof defs !== "object" || Array.isArray(defs)) {
    throw new Error(`${themePath}: defs must be an object`)
  }
  if (!theme || typeof theme !== "object" || Array.isArray(theme)) {
    throw new Error(`${themePath}: missing theme object`)
  }

  for (const [name, value] of Object.entries(defs)) {
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) throw new Error(`${themePath}: invalid definition name: ${name}`)
    const valid =
      value === "none" ||
      (typeof value === "string" && /^#[0-9a-fA-F]{6}$/.test(value)) ||
      (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 255)
    if (!valid) throw new Error(`${themePath}: invalid definition: ${name}`)
  }

  const missing = colorKeys.filter((key) => !(key in theme))
  const unknown = Object.keys(theme).filter((key) => !colorKeys.includes(key))
  if (missing.length) throw new Error(`${themePath}: missing colors: ${missing.join(", ")}`)
  if (unknown.length) throw new Error(`${themePath}: unknown colors: ${unknown.join(", ")}`)

  const resolveColor = (value, mode, trail) => {
    if (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 255) return
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      if (!("dark" in value) || !("light" in value)) {
        throw new Error(`${themePath}: ${trail.at(-1)} must define dark and light colors`)
      }
      const unknownVariants = Object.keys(value).filter((key) => key !== "dark" && key !== "light")
      if (unknownVariants.length) {
        throw new Error(`${themePath}: unknown variants at ${trail.join(" -> ")}: ${unknownVariants.join(", ")}`)
      }
      return resolveColor(value[mode], mode, trail)
    }
    if (typeof value !== "string") throw new Error(`${themePath}: invalid color at ${trail.join(" -> ")}`)
    if (value === "none" || /^#[0-9a-fA-F]{6}$/.test(value)) return
    if (trail.includes(value)) throw new Error(`${themePath}: circular color reference: ${[...trail, value].join(" -> ")}`)

    const referenced = value in defs ? defs[value] : theme[value]
    if (referenced === undefined) throw new Error(`${themePath}: unknown color reference: ${value}`)
    resolveColor(referenced, mode, [...trail, value])
  }

  for (const key of colorKeys) {
    resolveColor(theme[key], "dark", [key])
    resolveColor(theme[key], "light", [key])
  }

  console.log(`Validated ${themePath}`)
}
