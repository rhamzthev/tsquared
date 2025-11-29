<script lang="ts">
  import { page } from '$app/stores';
  
  $: status = $page.status;
  $: message = $page.error?.message || 'Something went wrong';
</script>

<div class="error-page">
  <div class="error-content">
    <h1 class="error-code">{status}</h1>
    <h2 class="error-title">
      {#if status === 404}
        Page Not Found
      {:else if status === 500}
        Server Error
      {:else}
        Oops!
      {/if}
    </h2>
    <p class="error-message">
      {#if status === 404}
        The page you're looking for doesn't exist. It might have been moved or deleted.
      {:else if status === 500}
        Something went wrong on our end. We're working to fix it.
      {:else}
        {message}
      {/if}
    </p>
    <div class="error-actions">
      <a href="/" class="btn-primary">Go Home</a>
    </div>
  </div>
</div>

<style>
  .error-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 5%;
  }

  .error-content {
    max-width: 600px;
  }

  .error-code {
    font-size: 8rem;
    font-weight: 700;
    /* color: var(--accent-color); */
    margin-bottom: 1rem;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .error-title {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  .error-message {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
    line-height: 1.6;
  }

  .error-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 1rem 2.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    display: inline-block;
  }

  .btn-primary {
    background-color: var(--accent-color);
    color: #000;
  }

  .btn-primary:hover {
    background-color: var(--accent-hover);
  }

  .btn-secondary {
    background-color: transparent;
    border-color: var(--accent-color);
    color: var(--accent-color);
  }

  .btn-secondary:hover {
    background-color: var(--accent-color);
    color: #000;
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 5rem;
    }

    .error-title {
      font-size: 2rem;
    }

    .error-message {
      font-size: 1rem;
    }

    .error-actions {
      flex-direction: column;
      width: 100%;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      text-align: center;
    }
  }
</style>

