import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './TaskChart.css';
import { useErrorTooltip } from '../hooks/useErrorTooltip';

type Props = {
	addTask: (task: Task) => void;
};

export function TaskChart({ addTask, logVisible }: Props & Logs) {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const { showErrorTooltip, errMsg } = useErrorTooltip();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);

		const newTask = {
			title: form.get('title'),
			desc: form.get('desc'),
		};
		logVisible?.(newTask);

		if (newTask.title === '' || newTask.desc === '') {
			let msg = '';
			if (newTask.title === '' && newTask.desc === '')
				msg = "Title and Description can't be empty";
			else if (title === '') msg = "Title can't be empty";
			else if (desc === '') msg = "Description can't be empty";
			showErrorTooltip(msg);
			return;
		}
		addTask(newTask as Task);
		setTitle('');
		setDesc('');
	};

	function keySubmit(e: React.KeyboardEvent<HTMLElement>) {
		if (e.key === 'Enter' && e.ctrlKey) {
			(e.target as HTMLElement).closest('form')?.requestSubmit();
		}
	}

	return (
		<section className='tw-flex tw-justify-center'>
			<div className='task-chart tw-relative tw-w-3/4 tw-rounded-lg tw-border-2 tw-border-black tw-p-4 dark:tw-border-white'>
				<form
					onSubmit={handleSubmit}
					className='tw-flex tw-flex-col tw-justify-center tw-gap-4'
				>
					<button
						className='tw-absolute tw-right-0 tw-top-0 -tw-translate-y-1/2 tw-translate-x-1/2'
						type='submit'
					>
						<FontAwesomeIcon icon={['fas', 'circle-plus']} />
					</button>

					<input
						type='text'
						name='title'
						className='tw-p-2'
						placeholder='Important task for today'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						onKeyDown={keySubmit}
					/>

					<textarea
						id=''
						className='tw-p-2'
						name='desc'
						cols={10}
						rows={4}
						placeholder='Relevant description'
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
						onKeyDown={keySubmit}
					/>
					<div className='error-tooltip tw-absolute tw-left-0 tw-right-0 tw-top-full tw-mt-2 tw-rounded-lg tw-bg-red-600 tw-text-center'>
						{errMsg}
					</div>
				</form>
			</div>
		</section>
	);
}
