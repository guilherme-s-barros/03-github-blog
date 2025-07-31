import {
	FaAngleLeft,
	FaArrowUpRightFromSquare,
	FaCalendarDay,
	FaComment,
	FaGithub,
} from 'react-icons/fa6'
import Markdown, { type Components } from 'react-markdown'
import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { env } from '../../config/env'
import { Actions, PostBody, PostHeader, PostInfo } from './styles'

const markdown =
	"No universo do desenvolvimento front-end, é fácil cair na armadilha de “só fazer funcionar”. Porém, com o crescimento do projeto e da equipe, manter um código desorganizado se torna um pesadelo. Neste post, reuni 10 boas práticas que ajudam a criar aplicações modernas, escaláveis e de fácil manutenção.\n\n## 1. **Organize seu código por responsabilidade, não por tipo de arquivo**\n\nAo invés de separar todos os arquivos de componentes, estilos e serviços em pastas separadas, agrupe-os por funcionalidade.\n\n```bash\n# Em vez de:\ncomponents/\nservices/\nstyles/\n\n# Prefira:\nfeatures/\n  └── login/\n      ├── LoginForm.tsx\n      ├── login.service.ts\n      └── login.module.css\n```\n\nEsse padrão melhora a escalabilidade e facilita a localização de arquivos relacionados a uma mesma funcionalidade.\n\n## 2. Evite CSS global — use escopo sempre que possível\n\nUtilize CSS Modules, Styled Components ou Tailwind CSS para evitar conflitos de estilo e tornar a manutenção mais segura. Estilos globais devem ser mínimos e usados com cautela.\n\n```css\n// styles.module.css\n.button {\n  background-color: #0070f3;\n}\n```\n\n```tsx\n// MyComponent.tsx\nimport styles from './styles.module.css';\n\n<button className={styles.button}>Clique aqui</button>\n```\n\n## 3. Evite o uso excessivo de estados globais\n\nNem tudo precisa estar no `Redux`, `Zustand` ou `Context API`. Muitos estados são locais ao componente e devem permanecer assim. Subir o estado sem necessidade leva à complexidade desnecessária.\n\nCritério simples: *esse dado precisa ser acessado por múltiplos componentes ao mesmo tempo?* Se não, mantenha local.\n\n## 4. Nomeie variáveis e componentes de forma clara\n\nEvite nomes genéricos como `data`, `info`, `item`, `handleClick`. Prefira nomes expressivos, como `userData`, `productInfo`, `handleFormSubmit`.\n\nNo fim, código é lido mais vezes do que escrito.\n\n## 5. Divida componentes grandes\n\nSe um componente tem mais de 200 linhas ou está fazendo mais de uma coisa, **provavelmente ele está grande demais**. Componentes menores são mais fáceis de testar, entender e reaproveitar.\n\nUse o padrão de **componente container + componentes de apresentação**, quando útil.\n\n## 6. Tipagem forte sempre que possível\n\nSe estiver usando TypeScript, aproveite seu poder. Tipagens ajudam a detectar erros mais cedo, documentam o código implicitamente e melhoram o autocompletion.\n\nEvite o uso de `any`. Use `unknown` ou crie tipos específicos:\n\n```ts\ntype User = {\n  id: string;\n  name: string;\n  email: string;\n};\n```\n\n## 7. Documente com comentários úteis\n\nNão é necessário comentar cada linha. Mas quando algo é não óbvio ou envolve lógica complexa, **explique com clareza o porquê.**\n\n```ts\n// Evita múltiplos envios consecutivos do formulário\nif (isSubmitting) return;\n```\n\n## 8. Automatize padrões com lint, prettier e commit hooks\n\nConfigure ferramentas como:\n\n- `ESLint` para manter padrão de código\n- `Prettier` para formatação automática\n- `Husky` + `lint-staged` para garantir que commits sigam o padrão\n\nEssas ferramentas garantem qualidade constante e reduzem a chance de erro humano.\n\n## 9. Testes: comece com o essencial\n\nNão precisa escrever 100% de testes logo de cara, mas **escreva testes para as partes críticas da sua aplicação**. Para front-end, comece com:\n\n- Testes unitários com `Vitest` ou `Jest`\n- Testes de componente com `Testing Library`\n- Testes de fluxo com `Cypress` (e2e)\n\n## 10. Cuide da acessibilidade desde o início\n\nAcessibilidade (a11y) não deve ser um bônus. Use sempre:\n\n- Tags semânticas (`<button>`, `<nav>`, `<main>`)\n- `aria-labels` quando necessário\n- Boas práticas de contraste e navegação por teclado\n\nIsso não só melhora a experiência de todos os usuários, como também evita problemas legais e amplia o alcance do seu produto.\n\n💡 Conclusão\n\nAs boas práticas no front-end não são apenas detalhes técnicos — elas influenciam diretamente na **manutenibilidade, performance e colaboração de equipes.**\n\nComece com pequenos passos: uma pasta melhor organizada, uma regra a mais no ESLint, ou um componente com menos responsabilidade. O importante é **evoluir continuamente.**"

export function Post() {
	const components: Components = {
		code(props) {
			const { children, className } = props
			const match = /language-(\w+)/.exec(className || '')

			return match ? (
				<SyntaxHighlighter PreTag="div" language={match[1]} style={nord}>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			)
		},
	}

	return (
		<main>
			<article>
				<PostHeader>
					<Actions>
						<Link to="/">
							<FaAngleLeft size={12} />
							Voltar
						</Link>

						<a
							href={`https://github.com/${env.VITE_GITHUB_USERNAME}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Ver no GitHub
							<FaArrowUpRightFromSquare size={12} />
						</a>
					</Actions>

					<h1>JavaScript data types and data structures</h1>

					<PostInfo>
						<div>
							<FaGithub size={16} />
							<span>{env.VITE_GITHUB_USERNAME}</span>
						</div>

						<div>
							<FaCalendarDay size={16} />
							<time>Há 1 dia</time>
						</div>

						<div>
							<FaComment size={16} />
							<span>5 comentários</span>
						</div>
					</PostInfo>
				</PostHeader>

				<PostBody>
					<Markdown components={components} disallowedElements={['hr']}>
						{markdown}
					</Markdown>
				</PostBody>
			</article>
		</main>
	)
}
