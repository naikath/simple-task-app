import { useRef, useState } from 'react';

export function useErrorTooltip() {
	const errorTooltip = document.querySelector('.error-tooltip');
	const errorTimeoutId = useRef<number | null>(null);
	const [errMsg, setErrMsg] = useState('');

	function showErrorTooltip(msg: string) {
		errorTooltip?.classList.add('visible');

		setErrMsg(msg);

		if (errorTimeoutId.current !== null)
			clearTimeout(errorTimeoutId.current);

		errorTimeoutId.current = setTimeout(() => {
			// after timeout
			errorTooltip?.classList.remove('visible');
			errorTimeoutId.current = null;
		}, 1500);
	}
	return { showErrorTooltip, errMsg };
}
