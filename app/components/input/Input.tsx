'use client';

import { cn } from '@/utils/cn';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props) {
	return (
		<input
			{...rest}
			className={cn(
				'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-hidden focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors',
				className
			)}
		/>
	);
}
