import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<NavBar />
			</header>
			{children}
		</>
	);
};

export default Layout;
