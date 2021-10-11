<script>
	import Navbar from '../lib/navbar.svelte';
	import Hero from '../lib/hero.svelte';
	import Events from '../lib/index/events.svelte';
	import { Container } from 'sveltestrap';
</script>

<svelte:head>
	<title>VFV</title>
</svelte:head>

<Navbar />
<Container>
	<Hero />
	<Events />
</Container>
