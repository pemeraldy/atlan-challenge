<template>
  <div ref="codeEditor" class="sm:h-[200px] w-full relative">
    <!-- :options="editorOptions" -->
    <VCodeMirror class="w-full h-full" :mode="mode" :value="props.query" />
    <div class="absolute px-3 flex -bottom-12">
      <button class="text-white font-medium rounded hover:bg-blue-800 transition-all duration-300 bg-blue-600 p-2">Run Query</button>
      <button class="text-white font-medium rounded ml-3 bg-green-400 p-2">
        Save Query
      </button>
    </div>
  </div>
</template>

<script setup>
import { VCodeMirror } from "vue3-code-mirror";
import "../../node_modules/codemirror/theme/abbott.css";

import { ref, onMounted } from "vue";
const props = defineProps({
  query:{
    type: String,
    default: ''
  }
})

const codeEditor = ref(null);
const queryContent = ref("let a = 20;");
const mode = ref({ name: "javascript", json: true });
// const editorOptions = ref({
//   theme: "white",
// });
onMounted(() => {
  
});
</script>
