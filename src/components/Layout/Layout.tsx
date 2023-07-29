import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import Header from '../Header/Header';

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<main className="content">
				<Outlet />
			</main>
		</Fragment>
	);
}

export default Layout;
