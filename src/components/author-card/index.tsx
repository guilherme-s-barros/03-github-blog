import {
	FaArrowUpRightFromSquare,
	FaBuilding,
	FaGithub,
	FaUserGroup,
} from 'react-icons/fa6'

import { env } from '../../config/env'
import { useAuthor } from '../../hooks/use-author'
import { Author, AuthorCardContainer, AuthorInfo } from './styles'

export function AuthorCard() {
	const author = useAuthor('author')

	return (
		<AuthorCardContainer>
			<img src={author.avatarUrl} alt="GitHub avatar" />

			<div>
				<Author>
					<strong>{author.name}</strong>

					<a href={author.githubUrl} target="_blank" rel="noopener noreferrer">
						GitHub
						<FaArrowUpRightFromSquare size={12} />
					</a>
				</Author>

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
