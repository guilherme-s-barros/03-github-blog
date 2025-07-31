import { useContextSelector } from 'use-context-selector'

import {
	AuthorContext,
	type AuthorContextData,
} from '../contexts/author/context'

export function useAuthor<Selector extends keyof AuthorContextData>(
	selector: Selector,
): AuthorContextData[Selector] {
	return useContextSelector(AuthorContext, (context) => context[selector])
}
