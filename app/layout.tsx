import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './../styles/globals.css'
import './../styles/highlight.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github-dark.css';
import { I18nProvider } from '@/lib/i18n/context';

// Register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

// Configure highlight.js
hljs.configure({
  ignoreUnescapedHTML: true
});

export const metadata: Metadata = {
  title: 'JS String Methods',
  description: 'JS String Methods By DevTwitter',
  keywords: ['js', 'string', 'methods', 'devtwitter'],
  authors: { name: 'Milad Niroee', url: 'https://github.com/miladniroee' },
  creator: 'DevTwitter',
  publisher: 'DevTwitter',
  openGraph: {
    title: 'JS String Methods',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased" style={{ minHeight: '100vh' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
