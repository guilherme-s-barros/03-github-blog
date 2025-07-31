import { createContext } from 'use-context-selector'

export interface Post {
	id: number
	title: string
	body: string
	created_at: string
}

export interface Author {
	name: string
	avatarUrl: string
	githubUrl: string
	bio: string
	company: string
	followers: number
}

export interface FetchPostsParams {
	query?: string
	signal?: AbortSignal
}

export interface FetchAuthorParams {
	signal?: AbortSignal
}

export interface PostsContextData {
	posts: Post[]
	author: Author
	totalPosts: number
	fetchPosts(params?: FetchPostsParams): Promise<void>
	fetchAuthor(params?: FetchAuthorParams): Promise<void>
}

export const PostsContext = createContext({} as PostsContextData)
