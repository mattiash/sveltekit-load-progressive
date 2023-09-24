import { sleep } from '$lib/util';

export function load() {
	return {
		entries: sleep(1000).then(() => ['a', 'b', 'c' + Math.random()])
	};
}
