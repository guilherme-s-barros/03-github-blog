import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { AuthorCard } from '../../components/author-card'
import { SearchForm } from '../../components/search-form'
import { fetchPostsService } from '../../services/fetch-posts'
import { PostCount, PostList, PostsContainer } from './styles'

import type { FetchOptions } from '../../interfaces/http'
import type { Post } from '../../interfaces/post'

export function Posts() {
	const [posts, setPosts] = useState<Post[]>([])
	const [totalPosts, setTotalPosts] = useState(0)

	const fetchPosts = useCallback(async (params: FetchOptions = {}) => {
		const data = await fetchPostsService(params)

		setPosts(data.items)
		setTotalPosts(data.total_count)
	}, [])

	const excerptBody = useCallback((body: string) => {
		return body.split('\n\n').at(0)
	}, [])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetchPosts({ signal })

		return () => {
			controller.abort()
		}
	}, [fetchPosts])

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('pt-br', {
			dateStyle: 'short',
			timeStyle: 'short',
		}).format(date)
	}

	return (
		<PostsContainer>
			<AuthorCard />

			<main>
				<PostCount>
					<h1>Publicações</h1>
					<span>{totalPosts} publicações</span>
				</PostCount>

				<SearchForm onSearch={fetchPosts} />

				<PostList>
					{posts.map((post) => {
						return (
							<Link to={`/posts/${post.id}`} key={post.id}>
								<article>
									<header>
										<h2>{post.title}</h2>

										<time
											dateTime={post.created_at}
											title={formatDate(new Date(post.created_at))}
										>
											{dayjs(post.created_at).fromNow()}
										</time>
									</header>

									<Markdown allowedElements={['p']}>
										{excerptBody(post.body)}
									</Markdown>
								</article>
							</Link>
						)
					})}
				</PostList>
			</main>
		</PostsContainer>
	)
}
