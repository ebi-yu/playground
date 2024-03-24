<template>
  <div>
    <h1>Client Side Rendering Example</h1>
    <div>
      <p>Id: {{ data?.id }}</p>
      <p>Title: {{ data?.title }}</p>
      <p>UserId: {{ data?.userId }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = (await useAsyncData("run_useAsyncData", () => {
  return $fetch("https://jsonplaceholder.typicode.com/todos/1");
})) as { data: Ref<Record<string, string>> };
</script>
