<script>
  import TodoList from '$lib/TodoList.svelte';
</script>

<main class="p-6 max-w-lg mx-auto">
  <h1 class="text-2xl font-bold mb-4">🟢 Active Todos</h1>
  <TodoList filter="active" />
</main>
