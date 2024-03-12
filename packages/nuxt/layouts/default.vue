<template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <v-icon aria-hidden="false"> {{ home.icon }} </v-icon>
      </template>
      <template v-slot:title>
        <v-app-bar-title>{{ title }}</v-app-bar-title>
      </template>
    </v-app-bar>
    <v-main color="primary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const title = "App";
const home = {
  icon: "mdi-home",
  link: "",
};
</script>
