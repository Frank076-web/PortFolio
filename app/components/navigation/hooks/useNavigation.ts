import { useState } from 'react';

export function useNavigation() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return { isOpen, handleClose, handleToggle };
}
