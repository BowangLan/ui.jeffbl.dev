import { createHighlighter } from "shiki"

type Lang = "tsx" | "ts" | "bash"

const highlighterPromise = createHighlighter({
  themes: ["github-light-default", "github-dark-default"],
  langs: ["tsx", "ts", "bash"],
})

export async function highlight(code: string, lang: Lang = "tsx"): Promise<string> {
  const highlighter = await highlighterPromise
  return highlighter.codeToHtml(code.trimEnd(), {
    lang,
    themes: {
      light: "github-light-default",
      dark: "github-dark-default",
    },
    defaultColor: "light",
  })
}
