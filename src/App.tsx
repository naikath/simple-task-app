import './App.css';
import './Icons';
import { TaskChart } from './components/TaskChart';
import { TaskGrid } from './components/TaskGrid';
import { DebugChart } from './components/DebugChart';
import { useLogVisible } from './hooks/useLogVisible';
import { useTasks } from './hooks/useTasks';

function App() {
	const { tasks, addTask, deleteTasks, clearTasks } = useTasks();
	const { log, logVisible } = useLogVisible();

	return (
		<>
			<DebugChart {...{ log, logVisible }} />
			<header className='tw-p-6 tw-text-center'>
				<h1 className='tw-text-4xl'>Tasks</h1>
				<div className='tw-m-4 tw-flex tw-items-center tw-justify-center tw-gap-4'>
					<div> Total: {tasks.length} </div>
					<button
						className='tw-rounded-sm tw-border-2 tw-border-white tw-bg-slate-600 tw-p-2 hover:tw-bg-slate-700'
						onClick={clearTasks}
					>
						Erase all
					</button>
				</div>
			</header>
			<main className='tw-relative tw-flex tw-flex-grow tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-evenly'>
				<TaskChart addTask={addTask} {...{ log, logVisible }} />
				<TaskGrid
					tasks={tasks}
					deleteTasks={deleteTasks}
					{...{ log, logVisible }}
				/>
			</main>
		</>
	);
}

export default App;
