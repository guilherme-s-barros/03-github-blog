import { env } from '../config/env'
import { api } from '../lib/api'

import type { FetchAuthorParams } from '../contexts/posts/context'

interface FetchAuthorAPIResponse {
	name: string
	avatar_url: string
	html_url: string
	bio: string
	company: string
	followers: number
}

export async function fetchAuthorService(params: FetchAuthorParams = {}) {
	const { signal } = params

	const response = await api.get<FetchAuthorAPIResponse>(
		`/users/${env.VITE_GITHUB_USERNAME}`,
		{
			signal: signal,
		},
	)

	return response.data
}
