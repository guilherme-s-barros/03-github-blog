import './config/dayjs'
import { ThemeProvider } from 'styled-components'

import { PostsProvider } from './contexts/posts/provider'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<PostsProvider>
				<Router />
			</PostsProvider>
		</ThemeProvider>
	)
}
