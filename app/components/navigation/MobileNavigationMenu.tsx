'use client';

import { useState } from 'react';
import { NavItems } from './models/navItems.model';

interface Props {
	navItems: NavItems[];
	isOpen: boolean;
	handleClose: () => void;
}

export function MobileNavigationMenu({ navItems, isOpen, handleClose }: Props) {
	return (
		<>
			{isOpen && (
				<div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 py-4">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="block px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
							onClick={handleClose}
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</>
	);
}
