import './config/dayjs'
import { ThemeProvider } from 'styled-components'

import { AuthorProvider } from './contexts/author/provider'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<AuthorProvider>
				<Router />
			</AuthorProvider>
		</ThemeProvider>
	)
}
