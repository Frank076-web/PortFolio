import { cn } from '@/utils/cn';
import { Experience } from './models/experience.model';

interface Props {
	experience: Experience;
}

export async function ExperienceCard({
	experience: {
		title,
		period,
		current,
		company,
		location,
		description,
		technologies,
	},
}: Props) {
	return (
		<div className="flex items-start space-x-4">
			<div
				className={cn(
					`w-12 h-12 rounded-full flex items-center justify-center transition-colors`,
					{
						'bg-purple-600': current,
						'bg-slate-600': !current,
					}
				)}
			>
				<span className="text-white text-sm">
					{current ? '🚀' : '✓'}
				</span>
			</div>

			<div className="flex-1 bg-slate-700/30 rounded-lg p-6 hover:bg-slate-700/50 transition-colors">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
					<h4 className="text-xl font-semibold text-white">
						{title}
					</h4>
					{current && (
						<span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm border border-green-600/30">
							Actual
						</span>
					)}
				</div>

				<div className="text-purple-400 font-medium mb-1">
					{company}
				</div>
				<div className="text-gray-400 text-sm mb-4">
					{period} • {location}
				</div>

				<ul className="space-y-2 mb-4">
					{description.map((item, idx) => (
						<li
							key={idx}
							className="text-gray-300 text-sm flex items-start"
						>
							<span className="text-purple-400 mr-2 mt-1">•</span>
							{item}
						</li>
					))}
				</ul>

				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<span
							key={tech}
							className="px-2 py-1 bg-slate-600/50 text-gray-300 rounded text-xs hover:bg-slate-600 transition-colors"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
