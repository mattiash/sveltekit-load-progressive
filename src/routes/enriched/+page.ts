function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export function load() {
	return {
		entries: sleep(1000).then(() => ['a', 'b', 'c' + Math.random()])
	};
}
