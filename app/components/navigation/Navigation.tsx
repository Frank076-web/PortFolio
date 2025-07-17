'use client';

import { cn } from '@/utils/cn';
import { navItems } from './static/navItems';
import { useNavigation } from './hooks/useNavigation';
import { DesktopNavigation } from './DesktopNavigation';
import { useState, useEffect } from 'react';
import { MobileNavigationMenu } from './MobileNavigationMenu';
import { MobileNavigationButton } from './MobileNavigationButton';

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const { isOpen, handleClose, handleToggle } = useNavigation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				`fixed top-0 w-full z-50 transition-all duration-300`,
				{
					'bg-slate-900/95 backdrop-blur-xs shadow-lg': scrolled,
					'bg-transparent': !scrolled,
				}
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="text-2xl font-bold text-white">
						<span className="text-purple-400">{'<'}</span>
						Franco
						<span className="text-purple-400">{'/>'}</span>
					</div>

					{/* Desktop Navigation */}
					<DesktopNavigation navItems={navItems} />

					{/* Mobile Navigation Button */}
					<MobileNavigationButton {...{ handleToggle, isOpen }} />
				</div>

				{/* Mobile Navigation Menu */}
				<MobileNavigationMenu {...{ isOpen, handleClose, navItems }} />
			</div>
		</nav>
	);
}
