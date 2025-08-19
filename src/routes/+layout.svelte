<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<nav class="flex gap-4 p-4 bg-gray-100 border-b">
  <a href="{base}/" class:active={$page.url.pathname === base+'/'}>All</a>
  <a href="{base}/active" class:active={$page.url.pathname === base+'/active'}>Active</a>
  <a href="{base}/completed" class:active={$page.url.pathname === base+'/completed'}>Completed</a>
  <a href="{base}/stats" class:active={$page.url.pathname === base+'/stats'}>Stats</a>
  <a href="{base}/about" class:active={$page.url.pathname === base+'/about'}>About</a>
  <a href="{base}/demo/paraglide/" class:active={$page.url.pathname === base+'/demo/paraglide'}>Paraglide Demo</a>
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
