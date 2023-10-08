import { useState } from 'react';

export function useLogVisible() {
	const [log, setLog] = useState('logging...');

	function logVisible(newLog: string | object) {
		newLog =
			typeof newLog === 'string'
				? newLog
				: JSON.stringify(newLog, null, 1);

		setLog(newLog);
	}
	return { log, logVisible };
}
