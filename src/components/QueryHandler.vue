<template>
  <div class="sm:h-[200px] bg-red-200">
    <textarea class="w-full h-full" v-model="queryContent"></textarea>
  </div>
</template>

<script setup>
import { ref } from "vue";
const queryContent = ref("");
</script>
