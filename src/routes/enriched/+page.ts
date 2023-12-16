function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export async function load() {
	return {
		entries: await sleep(1000).then(() => ['a', 'b', 'c' + Math.random()])
	};
}
