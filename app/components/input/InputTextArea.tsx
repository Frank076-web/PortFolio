'use client';

import { cn } from '@/utils/cn';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function InputTextArea({ className, ...rest }: Props) {
	return (
		<textarea
			{...rest}
			className={cn(
				'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none',
				className
			)}
		/>
	);
}
