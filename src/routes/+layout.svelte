<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	let msg = '';
	async function refresh() {
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
