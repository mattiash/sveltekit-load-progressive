<script lang="ts">
	export let data;
</script>

<h2>Direct Response</h2>
{#each data.entries as entry}
	<div>{entry}</div>
{/each}

<h2>Streamed response</h2>
{#await data.mystreamed.entries}
	Loading
{:then streamedEntries}
	{#each streamedEntries as entry}
		<div>{entry}</div>
	{/each}
{/await}
