import { useCallback, useEffect, useState } from 'react'
import {
	FaAngleLeft,
	FaArrowUpRightFromSquare,
	FaCalendarDay,
	FaComment,
	FaGithub,
} from 'react-icons/fa6'
import Markdown, { type Components } from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { env } from '../../config/env'
import { fetchPostService } from '../../services/fetch-post'
import { format, timeRelativeToNow } from '../../utils/date'
import { Actions, PostBody, PostHeader, PostInfo } from './styles'

import type { FetchOptions } from '../../interfaces/http'
import type { Post as PostType } from '../../interfaces/post'

export function Post() {
	const params = useParams()
	const [post, setPost] = useState<PostType>({} as PostType)

	const fetchPost = useCallback(
		async (options: FetchOptions = {}) => {
			const postNumber = params.postNumber
			const post = await fetchPostService(Number(postNumber), options)

			setPost(post)
		},
		[params.postNumber],
	)

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetchPost({ signal })

		return () => {
			controller.abort()
		}
	}, [fetchPost])

	const components: Components = {
		code(props) {
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
		},
		a(props) {
			const { href, children } = props

			return (
				<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
					{children}
				</a>
			)
		},
	}

	return (
		<main>
			<article>
				<PostHeader>
					<Actions>
						<Link to="/">
							<FaAngleLeft size={12} />
							Voltar
						</Link>

						<a href={post.html_url} target="_blank" rel="noopener noreferrer">
							Ver no GitHub
							<FaArrowUpRightFromSquare size={12} />
						</a>
					</Actions>

					<h1>{post.title}</h1>

					<PostInfo>
						<div>
							<FaGithub size={16} />
							<span>{env.VITE_GITHUB_USERNAME}</span>
						</div>

						<div>
							<FaCalendarDay size={16} />
							<time dateTime={post.created_at} title={format(post.created_at)}>
								{timeRelativeToNow(post.created_at)}
							</time>
						</div>

						{post.comments > 0 && (
							<div>
								<FaComment size={16} />
								<span>{post.comments} comentários</span>
							</div>
						)}
					</PostInfo>
				</PostHeader>

				<PostBody>
					<Markdown components={components} disallowedElements={['hr']}>
						{post.body}
					</Markdown>
				</PostBody>
			</article>
		</main>
	)
}
