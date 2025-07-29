import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
	return (
		<>
			<header>Header</header>

			<div>
				<Outlet />
			</div>
		</>
	)
}
