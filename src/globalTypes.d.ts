type Task = {
	title: string;
	desc: string;
	id: number;
};

type TaskList = Task[];

type Logs = {
	log?: string;
	logVisible?: (newLog: string | object) => void;
};
