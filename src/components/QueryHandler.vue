<template>
  <div class="sm:h-[200px] w-full border-b border-gray-800 relative">
    <!-- <textarea class="w-full h-full" id="editor" v-model="queryContent"></textarea> -->
    <!-- <div id="editor"></div> -->
    <VCodeMirror class=" w-full h-full" :value="queryContent" />
  </div>
</template>

<script setup>
import { VCodeMirror } from "vue3-code-mirror";

import { ref, onMounted } from "vue";
const queryContent = ref("let a = 20;");
onMounted(() => {});
</script>
