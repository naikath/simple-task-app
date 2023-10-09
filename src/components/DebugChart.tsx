import './DebugChart.css';

export function DebugChart({ log }: Logs) {
	function toggleHide() {
		const debugChart = document.querySelector('.debug-chart');
		// querySelector has to be used after the element exists
		debugChart?.classList.toggle('hidden');
	}

	return (
		<div
			className='debug-chart hidden tw-absolute tw-left-0 tw-top-0 tw-z-40 tw-m-4 tw-max-h-[50%] tw-w-1/2 tw-min-w-[5ch] tw-overflow-auto lg:tw-w-1/4'
			onClick={toggleHide}
		>
			<div className='tw-max-h-[100%] tw-rounded-xl tw-bg-slate-600 tw-bg-opacity-75 tw-p-4 tw-text-white'>
				{log
					?.replaceAll('\\n', '\n')
					.split('\n')
					.map((sentence, i) => (
						<div key={i}>
							<span>{sentence}</span>
							<br />
						</div>
					))}
			</div>
		</div>
	);
}
