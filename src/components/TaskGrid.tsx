import './TaskGrid.css';

interface Props {
	tasks: TaskList;
	deleteTasks: (taskIndex: number) => void;
}

export function TaskGrid({ tasks, deleteTasks, logVisible }: Props & Logs) {
	return (
		<section className='task-grid tw-max-h-full tw-w-full tw-overflow-auto lg:tw-w-1/2 	'>
			{tasks.map((task) => {
				return (
					<div
						key={task.id}
						className='tw-flex tw-max-h-48 tw-flex-col tw-border-2 tw-border-black tw-p-2 dark:tw-border-white'
					>
						<div className='tw-p-2'>{task.title}</div>
						<hr className='tw-border-dotted tw-border-white' />
						<div className='tw-overflow-auto tw-p-2'>
							{task.desc.split('\n').map((sentence, i) => (
								<div key={i}>
									{sentence}
									<br />
								</div>
							))}
						</div>
						<button
							className='tw-mt-auto tw-bg-red-700 tw-bg-opacity-75 hover:tw-bg-opacity-100'
							onClick={() => {
								logVisible?.(`deleting id: ${task.id}`);
								deleteTasks(task.id);
							}}
						>
							delete
						</button>
					</div>
				);
			})}
		</section>
	);
}
