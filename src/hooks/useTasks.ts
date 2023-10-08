import { useState } from 'react';

export function useTasks() {
	const [tasks, setTasks] = useState(getFromStorage());

	function getTaskId(taskList: TaskList) {
		const arrayOfIds = taskList
			.map((task) => task.id)
			.toSorted((a, b) => a - b);
		// make an array of the ids, sort it
		// then look for the first index that doesnt matches the id
		const foundId = arrayOfIds.findIndex((id, index) => id !== index);
		// if found something use it, if not, use the length
		const availableId = foundId !== -1 ? foundId : arrayOfIds.length;
		// console.log(arrayOfIds, availableId);
		return availableId;
	}

	function addTask(newTask: Task) {
		const newTaskList = [...tasks];

		newTask.id = getTaskId(newTaskList);
		newTaskList.push(newTask);

		updateTasks(newTaskList);
	}

	function updateTasks(taskList: TaskList) {
		setTasks(taskList);
		saveToStorage(taskList);
	}

	function saveToStorage(taskList: TaskList) {
		window.localStorage.setItem('tasklist', JSON.stringify(taskList));
	}

	function getFromStorage(): TaskList {
		return JSON.parse(window.localStorage.getItem('tasklist') ?? '[]');
	}

	function clearTasks() {
		if (tasks.length === 0) alert('Nothing to delete');
		else if (window.confirm('Are you sure you want to erase all tasks?')) {
			updateTasks([]);
		}
	}

	function deleteTasks(taskId: number) {
		const taskIndex = tasks.findIndex((task) => task.id === taskId);
		if (taskIndex === -1) return;

		const newTaskList = tasks.toSpliced(taskIndex, 1);
		updateTasks(newTaskList);
	}

	return { tasks, addTask, deleteTasks, clearTasks };
}
