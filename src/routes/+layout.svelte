<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { navigating } from '$app/stores';

	let msg = '';

	navigating.subscribe((o) => {
		console.log(o);
		msg = o === null ? '' : 'Loading';
	});
	async function refresh() {
		msg = 'Reloading';
		await invalidateAll();
		msg = 'Reload done';
		setTimeout(() => (msg = ''), 3000);
	}
</script>

<div>
	<button on:click={() => refresh()}>invalidateAll</button>
	{msg}
</div>

<hr />

<slot />
