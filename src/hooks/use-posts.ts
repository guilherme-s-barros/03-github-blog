import { useContextSelector } from 'use-context-selector'

import { PostsContext, type PostsContextData } from '../contexts/posts/context'

export function usePosts<Selector extends keyof PostsContextData>(
	selector: Selector,
): PostsContextData[Selector] {
	return useContextSelector(PostsContext, (context) => context[selector])
}
