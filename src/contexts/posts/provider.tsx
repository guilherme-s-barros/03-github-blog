import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { fetchAuthorService } from '../../services/fetch-author'
import { fetchPostsService } from '../../services/fetch-posts'
import {
	type Author,
	type FetchAuthorParams,
	type FetchPostsParams,
	type Post,
	PostsContext,
} from './context'

interface PostsProviderProps {
	children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
	const [posts, setPosts] = useState<Post[]>([])
	const [author, setAuthor] = useState<Author>({} as Author)
	const [totalPosts, setTotalPosts] = useState(0)

	const fetchPosts = useCallback(async (params: FetchPostsParams = {}) => {
		const data = await fetchPostsService(params)

		setPosts(data.items)
		setTotalPosts(data.total_count)
	}, [])

	const fetchAuthor = useCallback(async (params: FetchAuthorParams) => {
		const author = await fetchAuthorService(params)

		setAuthor({
			name: author.name,
			avatarUrl: author.avatar_url,
			githubUrl: author.html_url,
			bio: author.bio,
			company: author.company,
			followers: author.followers,
		})
	}, [])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetchPosts({ signal })

		return () => {
			controller.abort()
		}
	}, [fetchPosts])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetchAuthor({ signal })

		return () => {
			controller.abort()
		}
	}, [fetchAuthor])

	return (
		<PostsContext.Provider
			value={{ posts, totalPosts, author, fetchPosts, fetchAuthor }}
		>
			{children}
		</PostsContext.Provider>
	)
}
