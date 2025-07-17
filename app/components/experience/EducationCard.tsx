import { Education } from './models/education.model';

interface Props {
	education: Education;
}

export async function EducationCard({
	education: { title, period, current, institution },
}: Props) {
	return (
		<div className="flex items-start space-x-4">
			<div
				className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
					current ? 'bg-pink-600' : 'bg-slate-600'
				}`}
			>
				<span className="text-white text-sm">
					{current ? '📚' : '✓'}
				</span>
			</div>

			<div className="flex-1 bg-slate-700/30 rounded-lg p-6 hover:bg-slate-700/50 transition-colors">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
					<h4 className="text-lg font-semibold text-white">
						{title}
					</h4>
					{current && (
						<span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30">
							En curso
						</span>
					)}
				</div>

				<div className="text-pink-400 font-medium mb-1">
					{institution}
				</div>
				<div className="text-gray-400 text-sm">{period}</div>
			</div>
		</div>
	);
}
