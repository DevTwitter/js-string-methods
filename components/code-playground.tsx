"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Copy, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import type { StringMethod } from "@/lib/string-methods"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"

interface CodePlaygroundProps {
  method: StringMethod
}

export default function CodePlayground({ method }: CodePlaygroundProps) {
  const { t } = useI18n()
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Update code when method changes
  useEffect(() => {
    setCode(method.example)
    setOutput("")
    setError(null)
  }, [method])

  const runCode = () => {
    try {
      setError(null)
      const logs: string[] = []
      const originalConsoleLog = console.log
      console.log = (...args) => {
        logs.push(args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg))).join(" "))
      }

      try {
        eval(code)
        setOutput(logs.join("\n"))
      } finally {
        console.log = originalConsoleLog
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-js-600">{t.playground.interactivePlayground}</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            onClick={copyCode}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? t.common.copied : t.common.copy}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1 bg-js-600 text-black hover:bg-js-700 dark:hover:bg-js-500"
            onClick={runCode}
          >
            <Play className="h-4 w-4" />
            {t.common.run}
          </Button>
        </div>
      </div>

      {/* <div className="rounded-md border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden"> */}

        <pre className="p-4 rounded-md border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden" contentEditable={true} dangerouslySetInnerHTML={{__html:hljs.highlight(code, { language: 'javascript' }).value}} onChange={(e) => setCode(hljs.highlight(code, { language: 'javascript' }).value)}/>
          
      {/* <br />
      <br />
      <br /> */}
        {/* <textarea
          value={code}
          onChange={(e) => setCode(hljs.highlight(e.target.value, { language: 'javascript' }).value)}
          className="w-full min-h-[150px] p-4 font-mono text-sm bg-transparent border-none focus:outline-none resize-none"
          spellCheck="false"
        /> */}
      {/* </div> */}

      <div>
        <h3 className="mb-2 font-semibold text-js-600">{t.common.output}</h3>
        <div
          className={`rounded-md p-4 font-mono text-sm ${error
              ? "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
              : "bg-js-100 text-js-900 dark:bg-js-600/10 dark:text-js-400"
            }`}
        >
          <pre className="whitespace-pre-wrap">
            {error ? `${t.common.error}: ${error}` : output || t.common.runCodeToSeeOutput}
          </pre>
        </div>
      </div>
    </div>
  )
}
