import { useCallback, useEffect, useState } from 'react'
import {
	FaArrowUpRightFromSquare,
	FaBuilding,
	FaGithub,
	FaUserGroup,
} from 'react-icons/fa6'

import { env } from '../../config/env'
import { fetchAuthorService } from '../../services/fetch-author'
import { AuthorCardContainer, AuthorInfo, AuthorName } from './styles'

import type { Author } from '../../interfaces/author'
import type { FetchOptions } from '../../interfaces/http'

export function AuthorCard() {
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
		<AuthorCardContainer>
			<img src={author.avatarUrl} alt="GitHub avatar" />

			<div>
				<AuthorName>
					<strong>{author.name}</strong>

					<a href={author.githubUrl} target="_blank" rel="noopener noreferrer">
						GitHub
						<FaArrowUpRightFromSquare size={12} />
					</a>
				</AuthorName>

				<p>{author.bio}</p>

				<AuthorInfo>
					<div>
						<FaGithub size={16} />
						<span>{env.VITE_GITHUB_USERNAME}</span>
					</div>

					{author.company && (
						<div>
							<FaBuilding size={16} />
							<span>{author.company}</span>
						</div>
					)}

					{author.followers > 0 && (
						<div>
							<FaUserGroup size={16} />
							<span>{author.followers} seguidores</span>
						</div>
					)}
				</AuthorInfo>
			</div>
		</AuthorCardContainer>
	)
}
