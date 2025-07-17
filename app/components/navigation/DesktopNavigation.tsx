'use client';

import { NavItems } from './models/navItems.model';

interface Props {
	navItems: NavItems[];
}

export function DesktopNavigation({ navItems }: Props) {
	return (
		<div className="hidden md:flex space-x-8">
			{navItems.map((item) => (
				<a
					key={item.href}
					href={item.href}
					className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
				>
					{item.label}
				</a>
			))}
		</div>
	);
}
