import Image from 'next/image';
import { Technology } from './models/technology.model';

interface Props {
	technology: Technology;
}

export async function TechnologyCard({ technology: { name, iconSrc, alt } }: Props) {
	return (
		<div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300">
			<Image
				src={iconSrc}
				alt={alt}
				width={40}
				height={40}
				className='text-3xl mb-3 group-hover:scale-110 transition-transform duration-300'
			/>
			<span className="text-gray-300 font-medium group-hover:text-white transition-colors">
				{name}
			</span>
			<div
				className={
					'mt-2 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
				}
			/>
		</div>
	);
}
