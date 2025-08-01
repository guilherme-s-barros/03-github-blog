import { env } from '../config/env'
import { api } from '../lib/api'

import type { FetchOptions } from '../interfaces/http'
import type { Post } from '../interfaces/post'

interface FetchPostsAPIResponse {
	items: Post[]
	total_count: number
}

export async function fetchPostsService(options: FetchOptions = {}) {
	const { query, signal } = options

	const response = await api.get<FetchPostsAPIResponse>('/search/issues', {
		signal: signal,
		params: {
			q: `${query ?? ''} repo:${env.VITE_GITHUB_USERNAME}/${env.VITE_GITHUB_REPO}`,
		},
	})

	return response.data
}
