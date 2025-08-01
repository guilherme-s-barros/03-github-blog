import { env } from '../config/env'
import { api } from '../lib/api'

import type { FetchOptions } from '../interfaces/http'
import type { Post } from '../interfaces/post'

export async function fetchPostService(
	postNumber: number,
	options: FetchOptions = {},
) {
	const { signal } = options

	const response = await api.get<Post>(
		`repos/${env.VITE_GITHUB_USERNAME}/${env.VITE_GITHUB_REPO}/issues/${postNumber}`,
		{
			signal: signal,
		},
	)

	return response.data
}
