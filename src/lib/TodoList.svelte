<script lang="ts">
  import { onMount } from 'svelte';
  import type { TodoDoc, NewTodo } from '$lib/types';
  import { getTodos, addTodo, toggleTodo, deleteTodo, watchChanges } from '$lib/db';

  let todos: TodoDoc[] = [];
  let newTodo = '';
  export let filter: 'all' | 'active' | 'completed' = 'all';

  async function loadTodos() {
    try { todos = await getTodos(); }
    catch (err) { console.error('Failed to load todos', err); }
  }

  async function handleAdd() {
    if (!newTodo.trim()) return;
    const todo: NewTodo = { text: newTodo.trim(), completed: false };
    await addTodo(todo);
    newTodo = '';
    await loadTodos();
  }

  async function handleToggle(todo: TodoDoc) {
    await toggleTodo(todo);
    await loadTodos();
  }

  async function handleDelete(todo: TodoDoc) {
    await deleteTodo(todo);
    await loadTodos();
  }

  onMount(() => {
    loadTodos();
    watchChanges(loadTodos);
  });

  $: filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
</script>

<form on:submit|preventDefault={handleAdd} class="flex gap-2 mb-4">
  <input bind:value={newTodo} placeholder="Add a new task..." class="flex-1 border p-2 rounded" />
  <button class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
</form>

{#if filteredTodos.length === 0}
  <p class="text-gray-500">No todos yet!</p>
{:else}
  <ul class="space-y-2">
    {#each filteredTodos as todo}
      <li class="flex justify-between items-center p-2 border rounded">
        <label class="flex items-center gap-2">
          <input type="checkbox" checked={todo.completed} on:change={() => handleToggle(todo)} />
          <span class={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
        </label>
        <button on:click={() => handleDelete(todo)} class="text-red-500">✕</button>
      </li>
    {/each}
  </ul>
{/if}
