import Link from 'next/link';

const Header = () => {
	return (
		<header className="header">
			<span className="header__link">
				<Link href="/">PortFolio</Link>
			</span>

			<span className="header__link header__link--acerca">
				<Link href="/acerca">Sobre Mí</Link>
			</span>
		</header>
	);
};

export default Header;
