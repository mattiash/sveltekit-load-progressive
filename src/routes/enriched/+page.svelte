<script lang="ts">
	import { sleep } from '$lib/util.js';

	export let data;

	let items = new Array<{ name: string; value: number }>();

	$: enrich(data);

	function enrich(_data: any) {
		items = data.entries.map((s) => ({ name: s, value: 0 }));
		for (const item of items) {
			const v = Math.round(Math.random() * 5000);
			sleep(v).then(() => {
				item.value = v;
				items = items;
			});
		}
	}
</script>

<h2>Enriched Response</h2>
{#each items as item}
	<div>{item.name}: {item.value}</div>
{/each}
