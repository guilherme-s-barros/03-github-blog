import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'

export function DefaultLayout() {
	return (
		<>
			<Header />

			<div>
				<Outlet />
			</div>
		</>
	)
}
