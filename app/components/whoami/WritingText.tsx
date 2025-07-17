'use client';

import { useEffect, useState } from 'react';

export function WritingText() {
	const [text, setText] = useState('');
	const fullText = 'Desarrollador de Software Full Stack';

	useEffect(() => {
		let index = 0;
		const timer = setInterval(() => {
			setText(fullText.slice(0, index));
			index++;
			if (index > fullText.length) {
				clearInterval(timer);
			}
		}, 100);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
			{text}
			<span className="animate-pulse">|</span>
		</div>
	);
}
