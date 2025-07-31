import { createContext } from 'use-context-selector'

import type { Author } from '../../interfaces/author'
import type { FetchOptions } from '../../interfaces/http'

export interface AuthorContextData {
	author: Author
	fetchAuthor(params?: FetchOptions): Promise<void>
}

export const AuthorContext = createContext({} as AuthorContextData)
