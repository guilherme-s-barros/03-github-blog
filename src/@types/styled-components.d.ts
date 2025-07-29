import type { CSSProp } from 'styled-components'

import type { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
	// biome-ignore lint/correctness/noUnusedVariables: T should not be renamed
	interface DOMAttributes<T> {
		css?: CSSProp
	}
}
