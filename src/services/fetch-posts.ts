import { env } from '../config/env'
import { api } from '../lib/api'

import type { FetchPostsParams, Post } from '../contexts/posts/context'

interface FetchPostsAPIResponse {
	items: Post[]
	total_count: number
}

export async function fetchPostsService(params: FetchPostsParams = {}) {
	const { query, signal } = params

	const response = await api.get<FetchPostsAPIResponse>('/search/issues', {
		signal: signal,
		params: {
			q: `${query ?? ''} repo:${env.VITE_GITHUB_USERNAME}/03-github-blog`,
		},
	})

	return response.data
}
