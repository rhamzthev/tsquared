<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
	<title>Thevenin² | Engineering & Design</title>
	<meta name="description" content="Thevenin Squared: A twin duo combining software engineering and graphic design for complete digital transformation." />
</svelte:head>

<header>
	<div class="brand-name">
		<h2>THEVENIN²</h2>
	</div>
	
	<nav>
		<ul>
			<li><a href="#services">Services</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>&copy; 2025 Thevenin².</p>
</footer>
