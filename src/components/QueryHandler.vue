<template>
  <div ref="codeEditor" class="sm:h-[200px] w-full border-b border-gray-800 relative">
    <VCodeMirror class="w-full h-full" :mode="mode" :value="queryContent" />
    <!-- :options="editorOptions" -->
    <button class="text-white rounded absolute bg-blue-600 p-2 bottom-0">RunQuery</button>
  </div>
</template>

<script setup>
import { VCodeMirror } from "vue3-code-mirror";
import "../../node_modules/codemirror/theme/abbott.css";

import { ref, onMounted } from "vue";
const codeEditor = ref(null);
const queryContent = ref("let a = 20;");
const mode = ref({ name: "javascript", json: true });
const editorOptions = ref({
  theme: "white",
});
onMounted(() => {
  console.log(codeEditor.value);
});
</script>
