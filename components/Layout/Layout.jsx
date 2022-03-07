import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="layout-container">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
