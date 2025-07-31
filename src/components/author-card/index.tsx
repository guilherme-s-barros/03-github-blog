import {
	FaArrowUpRightFromSquare,
	FaBuilding,
	FaGithub,
	FaUserGroup,
} from 'react-icons/fa6'

import { Author, AuthorCardContainer, AuthorInfo } from './styles'

export function AuthorCard() {
	return (
		<AuthorCardContainer>
			<img
				src="https://github.com/guilherme-s-barros.png"
				alt="GitHub avatar"
			/>

			<div>
				<Author>
					<strong>Guilherme Barros</strong>

					<a
						href="https://github.com/guilherme-s-barros"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
						<FaArrowUpRightFromSquare size={12} />
					</a>
				</Author>

				<p>
					Desenvolvedor fullstack focado em React, Node.js e TypeScript.
					Apaixonado por tecnologia, boas práticas, código limpo e aprendizado
					contínuo.
				</p>

				<AuthorInfo>
					<div>
						<FaGithub size={16} />
						<span>guilherme-s-barros</span>
					</div>

					<div>
						<FaBuilding size={16} />
						<span>Rocketseat</span>
					</div>

					<div>
						<FaUserGroup size={16} />
						<span>32 seguidores</span>
					</div>
				</AuthorInfo>
			</div>
		</AuthorCardContainer>
	)
}
