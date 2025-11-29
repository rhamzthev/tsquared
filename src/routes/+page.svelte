<script lang="ts">
  import { enhance } from "$app/forms";

  let { data, form } = $props();
  let isSubmitting = $state(false);

  const services = {
    "My Brand":
      "Your business will have a memorable visual identity that captures attention and builds trust. Customers will instantly recognize your brand and understand what makes you different.",
    "My Website":
      "Your site will load in seconds, rank higher in search results, and turn visitors into customers. You'll get more leads without the technical headaches.",
    "The Complete Package":
      "<strong>Everything you need, seamlessly integrated.</strong> Launch faster with a cohesive brand and website that work together perfectly. No coordination headaches, no mismatched pieces.",
  };
</script>

<section id="hero">
  <h1>Elevate your brand. Twofold.</h1>
  <p class="hero-sub">
    Get a <strong>complete digital presence</strong> that attracts customers and
    drives growth. Your business deserves solutions that are both
    <strong>powerful</strong>
    and <strong>beautiful</strong>.
  </p>
  <div class="cta-group">
    <a href="#contact" class="btn-primary">Contact us</a>
    <a href="#services" class="btn-secondary">Our services</a>
  </div>
</section>

<section id="services">
  <h3>What You'll Get</h3>

  <div class="services-grid">
    {#each Object.entries(services) as [serviceName, description], i}
      <div
        class="service-card"
        class:design={i === 0}
        class:dev={i === 1}
        class:full-stack={i === 2}
      >
        <h4>0{i + 1}. {serviceName.replace("My", "Your")}</h4>
        <p>{@html description}</p>
      </div>
    {/each}
  </div>
</section>

<section id="about">
  <h3>Why Choose Us</h3>

  <div class="team-grid">
    <div class="member">
      <img src="/rhamsez.jpg" alt="Rhamsez Thevenin" />
      <h4>Rhamsez Thevenin</h4>
      <h5>The Developer</h5>
      <p>
        "I'll build a website that work smoothly, load fast, and grow with your
        business, without the tech headaches."
      </p>
    </div>

    <div class="member">
      <img src="/pharaoh.jpg" alt="Pharaoh Thevenin" />
      <h4>Pharaoh Thevenin</h4>
      <h5>The Designer</h5>
      <p>
        "I'll create a brand that connect with your customers and naturally
        guide them to take action."
      </p>
    </div>
  </div>
</section>

<section id="contact">
  <h3>Contact Us</h3>
  <form
    method="post"
    use:enhance={() => {
      isSubmitting = true;
      return async ({ update }) => {
        await update();
        isSubmitting = false;
      };
    }}
  >
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />

    <label for="service">I need help with...</label>
    <select id="service" name="service">
      {#each Object.keys(services) as serviceName}
        <option value={serviceName}>{serviceName}</option>
      {/each}
    </select>

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Sending..." : "Let's Talk"}
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
