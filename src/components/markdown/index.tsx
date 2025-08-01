import type { Components } from 'react-markdown'

import { MDCodeBlock } from './md-code-block'
import { MDLink } from './md-link'

export const mdComponents: Components = {
	code: MDCodeBlock,
	a: MDLink,
}
