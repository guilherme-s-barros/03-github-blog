import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

import type { HTMLAttributes } from 'react'

export function MDCodeBlock(props: HTMLAttributes<HTMLDivElement>) {
	const { children, className } = props
	const match = /language-(\w+)/.exec(className || '')

	return match ? (
		<SyntaxHighlighter PreTag="div" language={match[1]} style={nord}>
			{String(children).replace(/\n$/, '')}
		</SyntaxHighlighter>
	) : (
		<code className={className} {...props}>
			{children}
		</code>
	)
}
