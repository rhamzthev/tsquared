<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
	
	<!-- Primary Meta Tags -->
	<title>Thevenin² | Professional Web Design & Development Services</title>
	<meta name="title" content="Thevenin² | Professional Web Design & Development Services" />
	<meta name="description" content="Get a complete digital presence that attracts customers and drives growth. Twin duo delivering fast, SEO-optimized websites and memorable brand identities." />
	<meta name="keywords" content="web design, web development, branding, logo design, custom websites, SEO optimization, graphic design, software engineering, digital solutions" />
	<meta name="author" content="Rhamsez Thevenin, Pharaoh Thevenin" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tsqua.red/" />
	<meta property="og:title" content="Thevenin² | Professional Web Design & Development Services" />
	<meta property="og:description" content="Get a complete digital presence that attracts customers and drives growth. Twin duo delivering fast, SEO-optimized websites and memorable brand identities." />
	<meta property="og:image" content="https://tsqua.red/android-chrome-512x512.png" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://tsqua.red/" />
	<meta property="twitter:title" content="Thevenin² | Professional Web Design & Development Services" />
	<meta property="twitter:description" content="Get a complete digital presence that attracts customers and drives growth. Twin duo delivering fast, SEO-optimized websites and memorable brand identities." />
	<meta property="twitter:image" content="https://tsqua.red/android-chrome-512x512.png" />
	
	<!-- Additional SEO -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<link rel="canonical" href="https://tsqua.red/" />
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
