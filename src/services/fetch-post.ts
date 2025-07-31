import { env } from '../config/env'
import { api } from '../lib/api'

import type { FetchOptions } from '../interfaces/http'

interface FetchPostAPIResponse {
	title: string
	html_url: string
	created_at: string
	comments: number
	body: string
}

export async function fetchPostService(
	postNumber: number,
	params: FetchOptions = {},
) {
	const { signal } = params

	const response = await api.get<FetchPostAPIResponse>(
		`repos/${env.VITE_GITHUB_USERNAME}/${env.VITE_GITHUB_REPO}/issues/${postNumber}`,
		{
			signal: signal,
		},
	)

	return response.data
}
