import { sleep } from '$lib/util';

export async function load() {
	return {
		entries: await sleep(1000).then(() => ['a', 'b', 'c' + Math.random()]),
		mystreamed: {
			entries: sleep(2000).then(() => ['d', 'e', 'f' + Math.random()])
		}
	};
}
