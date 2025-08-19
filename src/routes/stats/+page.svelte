
<script lang="ts">
  import { onMount } from 'svelte';
  import type { TodoDoc } from '$lib/types';
  import { getTodos, watchChanges } from '$lib/db.js';

  let todos: TodoDoc[] = [];

  async function loadTodos() {
    todos = await getTodos();
  }

  onMount(() => {
    loadTodos();
    watchChanges(loadTodos); // uses the single global listener
  });

  $: completed = todos.filter(t => t.completed).length;
  $: active = todos.length - completed;
</script>

<main class="p-6 max-w-lg mx-auto">
  <h1 class="text-2xl font-bold mb-4">📊 Stats</h1>
  <p>Total tasks: {todos.length}</p>
  <p>Completed: {completed}</p>
  <p>Active: {active}</p>
</main>
