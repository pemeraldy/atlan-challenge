<template>
  <div  class="sm:h-[200px] w-full border-b border-gray-800">
    <!-- <textarea class="w-full h-full" id="editor" v-model="queryContent"></textarea> -->
    <div id="editor"></div>
  </div>
</template>

<script setup>


import { ref, onMounted } from "vue";
const queryContent = ref("let a = 20");
onMounted(() => {
  
});
</script>
