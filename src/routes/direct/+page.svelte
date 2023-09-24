<script lang="ts">
	import { sleep } from '$lib/util.js';

	export let data;
</script>

<h2>Direct Response</h2>
{#each data.entries as entry}
	<div>{entry}</div>
{/each}
