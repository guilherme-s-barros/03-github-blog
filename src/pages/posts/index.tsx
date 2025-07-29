import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { AuthorCard } from '../../components/author-card'
import { SearchForm } from '../../components/search-form'
import { PostCount, PostList, PostsContainer } from './styles'

const markdown =
	"Testes automatizados são essenciais para garantir a qualidade e confiabilidade do seu código. Neste artigo, você aprenderá desde os fundamentos até práticas avançadas utilizando Jest, com exemplos visuais para facilitar o entendimento.\n\n![Exemplo de testes](https://images.unsplash.com/photo-1576444356170-66073046b1bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)\n*Foto de [Unsplash](https://images.unsplash.com/photo-1576444356170-66073046b1bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)*\n\n---\n\n## O que são testes automatizados?\n\nTestes automatizados validam o comportamento de funções, componentes e fluxos da aplicação de maneira programática, evitando bugs e facilitando refatorações. Eles podem ser de diversos tipos: testes unitários, de integração e end-to-end.\n\n### Benefícios dos testes automatizados\n- Previnem regressões\n- Facilitam refatorações\n- Aumentam a confiança no deploy\n- Melhoram a documentação do código\n\n## O que é Jest?\n\nJest é um framework de testes mantido pelo Facebook, focado em simplicidade e produtividade para projetos JavaScript e React. Ele fornece ferramentas para criar, rodar e monitorar seus testes de forma fácil.\n\n## Instalando o Jest\n\n```bash\nnpm install --save-dev jest\n```\n\nAdicione o seguinte script ao seu `package.json`:\n\n```json\n\"scripts\": {\n  \"test\": \"jest\"\n}\n```\n\n## Criando seu primeiro teste\n\nVamos supor que você tem uma função simples de soma:\n\n```js\nfunction soma(a, b) {\n  return a + b;\n}\nmodule.exports = soma;\n```\n\nCrie um arquivo `soma.test.js`:\n\n```js\nconst soma = require('./soma');\ntest('soma 1 + 2 para ser 3', () => {\n  expect(soma(1, 2)).toBe(3);\n});\n```\n\nRode os testes com:\n```bash\nnpm test\n```\n\n## Boas práticas para testes\n- Escreva testes para funções puras e componentes isolados\n- Use mocks para funções externas\n- Escreva casos de borda\n- Mantenha nomes de testes descritivos\n\n## Testes em React com Jest e Testing Library\n\nPara testar componentes React, use junto com o [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/):\n\n```bash\nnpm install --save-dev @testing-library/react\n```\n\nExemplo de teste de componente:\n```js\nimport { render, screen } from '@testing-library/react';\nimport Botao from './Botao';\n\ntest('renderiza o texto corretamente', () => {\n  render(<Botao texto=\"Clique aqui\" />);\n  expect(screen.getByText('Clique aqui')).toBeInTheDocument();\n});\n```\n\n## Dicas Avançadas\n- Integre os testes ao CI/CD para execução automática\n- Use coverage reports para medir cobertura do código\n- Escreva testes parametrizados para múltiplos cenários\n\n## Conclusão\n\nA automatização de testes acelera o desenvolvimento e aumenta a confiança no código. Comece escrevendo testes hoje mesmo e veja a diferença em seus projetos!\n"

const excerpt = markdown.split('\n\n').at(0)

export function Posts() {
	return (
		<PostsContainer>
			<AuthorCard />

			<main>
				<PostCount>
					<h1>Publicações</h1>
					<span>3 publicações</span>
				</PostCount>

				<SearchForm />

				<PostList>
					<Link to="/posts/1">
						<article>
							<header>
								<h2>
									Testes Automatizados com Jest: Guia Visual e Prático para
									Iniciantes
								</h2>

								<time dateTime="2025-07-28T00:00:00" title="28/07/2025">
									Há 1 dia
								</time>
							</header>

							<Markdown allowedElements={['p']}>{excerpt}</Markdown>
						</article>
					</Link>

					<Link to="/posts/1">
						<article>
							<header>
								<h2>
									Testes Automatizados com Jest: Guia Visual e Prático para
									Iniciantes
								</h2>

								<time dateTime="2025-07-28T00:00:00" title="28/07/2025">
									Há 1 dia
								</time>
							</header>

							<Markdown allowedElements={['p']}>{excerpt}</Markdown>
						</article>
					</Link>

					<Link to="/posts/1">
						<article>
							<header>
								<h2>
									Testes Automatizados com Jest: Guia Visual e Prático para
									Iniciantes
								</h2>

								<time dateTime="2025-07-28T00:00:00" title="28/07/2025">
									Há 1 dia
								</time>
							</header>

							<Markdown allowedElements={['p']}>{excerpt}</Markdown>
						</article>
					</Link>
				</PostList>
			</main>
		</PostsContainer>
	)
}
