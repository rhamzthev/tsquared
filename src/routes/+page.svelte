<script lang="ts">
	import { enhance } from '$app/forms';
	
	let { data, form } = $props();
	let isSubmitting = $state(false);
</script>

<section id="hero">
	<h1>Elevate your brand. Twofold.</h1>
	<p class="hero-sub">
		We are a <strong>twin duo</strong> combining professional <strong>software engineering</strong> with 
		<strong>graphic design</strong> expertise. We create digital solutions that are both functional and visually compelling.
	</p>
	<div class="cta-group">
		<a href="#contact" class="btn-primary">Contact us</a>
		<a href="#services" class="btn-secondary">Our services</a>
	</div>
</section>

<section id="services">
	<h3>Our Services</h3>
	
	<div class="services-grid">
		<div class="service-card design">
			<h4>01. Design</h4>
			<p>We create the visual identity that represents your business. This includes logo design, cohesive typography, and intuitive user interfaces that engage your audience.</p>
		</div>

		<div class="service-card dev">
			<h4>02. Development</h4>
			<p>We build fast, reliable websites optimized for search engines and user experience. Our custom solutions ensure your site loads quickly and performs flawlessly.</p>
		</div>

		<div class="service-card full-stack">
			<h4>03. The Full Stack</h4>
			<p><strong>Complete end-to-end service.</strong> We manage both design and development from initial concept to final launch, delivering a unified solution for your business.</p>
		</div>
	</div>
</section>

<section id="about">
	<h3>About Us</h3>
	
	<div class="team-grid">
		<div class="member">
			<img src="/rhamsez.jpg" alt="Rhamsez Thevenin" />
			<h4>Rhamsez Thevenin</h4>
			<h5>The Developer</h5>
			<p>Specializing in secure, scalable web applications with clean, maintainable code.</p>
		</div>
		
		<div class="member">
			<img src="/pharaoh.jpg" alt="Pharaoh Thevenin" />
			<h4>Pharaoh Thevenin</h4>
			<h5>The Designer</h5>
			<p>Specializing in user-centered design, strategic layouts, and compelling visual communication.</p>
		</div>
	</div>
</section>

<section id="contact">
	<h3>Contact Us</h3>
	
	<!-- <div class="offer-badge">
		<p><strong>Portfolio Building Offer:</strong> The first 3 clients this month get our Premium Package at a 40% discount.</p>
	</div> -->

	<form method="post" use:enhance={() => {
		isSubmitting = true;
		return async ({ update }) => {
			await update();
			isSubmitting = false;
		};
	}}>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required>
		
		<label for="email">Email</label>
		<input type="email" id="email" name="email" required>
		
		<label for="service">I need help with...</label>
		<select id="service" name="service">
			<option value="Design">Design</option>
			<option value="Development">Development</option>
			<option value="The Full Stack">The Full Stack</option>
		</select>
		
		<label for="message">Message</label>
		<textarea id="message" name="message" rows="5" required></textarea>
		
		<button type="submit" disabled={isSubmitting}>
			{isSubmitting ? 'Sending...' : "Let's Talk"}
		</button>
	</form>
	
	{#if form?.success}
		<div class="form-status status-success">
			Mail sent successfully! We'll get back to you soon.
		</div>
	{/if}
	
	{#if form?.error}
		<div class="form-status status-error">
			{form.error}
		</div>
	{/if}
</section>
