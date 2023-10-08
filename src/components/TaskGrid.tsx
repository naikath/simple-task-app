import './TaskGrid.css';

interface Props {
	tasks: TaskList;
	deleteTasks: (taskIndex: number) => void;
}

export function TaskGrid({ tasks, deleteTasks, logVisible }: Props & Logs) {
	return (
		<section className='task-grid tw-max-h-[50rem] tw-w-full [&>div]:tw-border-2 [&>div]:tw-border-black [&>div]:dark:tw-border-white'>
			{tasks.map((task) => {
				return (
					<div key={task.id} className='tw-flex tw-flex-col tw-p-2'>
						<span>{task.title}</span>
						<span>{task.desc}</span>
						<button
							className='tw-bg-red-700'
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
