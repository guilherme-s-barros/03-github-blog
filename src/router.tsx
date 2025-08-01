import { type ReactNode, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import { DefaultLayout } from './layouts/default'
import { Post } from './pages/post'
import { Posts } from './pages/posts'

interface WrapperProps {
	children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
	const location = useLocation()

	// biome-ignore lint/correctness/useExhaustiveDependencies: This effect runs on every route change to reset scroll position. Location.pathname is a necessary dependency to trigger that.
	useLayoutEffect(() => {
		window.scrollTo({ left: 0, top: 0, behavior: 'instant' })
	}, [location.pathname])

	return children
}

export function Router() {
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" Component={DefaultLayout}>
						<Route index Component={Posts} />
						<Route path="/posts/:postNumber" Component={Post} />
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	)
}
