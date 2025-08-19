<script>
  import { page } from '$app/stores';
</script>

<nav class="flex gap-4 p-4 bg-gray-100 border-b">
  <a href="/" class:active={$page.url.pathname === '/'}>All</a>
  <a href="/active" class:active={$page.url.pathname === '/active'}>Active</a>
  <a href="/completed" class:active={$page.url.pathname === '/completed'}>Completed</a>
  <a href="/stats" class:active={$page.url.pathname === '/stats'}>Stats</a>
  <a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
  <a href="/demo/paraglide/" class:active={$page.url.pathname === '/demo/paraglide'}>Paraglide Demo</a>
</nav>

<slot />

<style>
  a {
    text-decoration: none;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  a.active {
    background: #2563eb;
    color: white;
  }
</style>
