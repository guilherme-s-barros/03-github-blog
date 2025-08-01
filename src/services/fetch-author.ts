import { env } from '../config/env'
import { api } from '../lib/api'

import type { Author } from '../interfaces/author'
import type { FetchOptions } from '../interfaces/http'

export async function fetchAuthorService(options: FetchOptions = {}) {
	const { signal } = options

	const response = await api.get<Author>(`/users/${env.VITE_GITHUB_USERNAME}`, {
		signal: signal,
	})

	return response.data
}
