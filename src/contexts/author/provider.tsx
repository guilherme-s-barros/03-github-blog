import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { fetchAuthorService } from '../../services/fetch-author'
import { AuthorContext } from './context'

import type { Author } from '../../interfaces/author'
import type { FetchOptions } from '../../interfaces/http'

interface AuthorProviderProps {
	children: ReactNode
}

export function AuthorProvider({ children }: AuthorProviderProps) {
	const [author, setAuthor] = useState<Author>({} as Author)

	const fetchAuthor = useCallback(async (params: FetchOptions = {}) => {
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

		fetchAuthor({ signal })

		return () => {
			controller.abort()
		}
	}, [fetchAuthor])

	return (
		<AuthorContext.Provider value={{ author, fetchAuthor }}>
			{children}
		</AuthorContext.Provider>
	)
}
