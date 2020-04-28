<script>
	export let name;

	import books from "./data";
	import { onMount } from "svelte";

	const gospels = ['GENE', '1SAM', 'LUKE', 'JOHN', 'ACTS', 'ROMA'];

	
</script>

<main>
<h1>The Canons</h1>
	<h2>Gospels</h2>

	{#each gospels as gospel}
		<li>{books[gospel].name}</li>
	{/each}

	<h2>Apocrypha</h2>
	{#each gospels as gospel}
		<li>{books[gospel].name}
		{#if books[gospel].aliases.length}<span>({#each books[gospel].aliases as alias, i}{alias}{/each})</span>
		{/if}
		</li>

	{/each}


</main>

<style>

	span {
		color: gray;
		display: inline-block;
	}
	main {
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #EE4A3F;
		font-family: "Work Sans";
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>