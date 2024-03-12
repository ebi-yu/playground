<template>
  <h1>{{ title }}</h1>
  <ClientOnly fallback-tag="h1" fallback="Loading...">
    <div>
      <h1>{{ clientOnly }}</h1>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const title = ref<string>("Index page");
const clientOnly = ref<string>("Only Client page");

onMounted(() => {
  title.value = "Index page(CSR)";
});
</script>
