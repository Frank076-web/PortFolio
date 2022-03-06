import Header from './Header';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="layout-container">{children}</div>
		</>
	);
};

export default Layout;
