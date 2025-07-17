'use client';

interface Props {
	handleToggle: () => void;
	isOpen: boolean;
}

export function MobileNavigationButton({ handleToggle, isOpen }: Props) {
	return (
		<button
			className="md:hidden text-white p-2"
			onClick={handleToggle}
			aria-label="Toggle menu"
		>
			{isOpen ? (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			) : (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			)}
		</button>
	);
}
