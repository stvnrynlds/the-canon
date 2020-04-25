<script>
	export let name;

	import books from "./data";
	import { onMount } from "svelte";

	const gospels = ['MATT', 'MARK', 'LUKE', 'JOHN'];
	
</script>

<main>
<h1>The Canons</h1>
	<h2>Old Testament</h2>
	{#each gospels as gospel}
		<li>{books[gospel].name}</li>
	{/each}
	<button>Show Only Old Testament</button>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
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