<template>
  <div ref="codeEditor" class="h-screen sm:h-[200px] w-full relative">
    <!-- :options="editorOptions" -->
    <VCodeMirror ref="codeMirror" class="w-full h-full" :mode="mode" :value="props.query" />
    <div class=" hidden sm:flex bottom-2 w-full flex justify-center items-center sm:justify-start sm:absolute sm:px-3 flex sm:-bottom-12">
      <button class="text-white font-medium rounded transition-all duration-300 hover:bg-blue-800  bg-blue-600 p-2" @click="$emit('runQuery')" >Run Query</button>
      <button class="text-white font-medium rounded ml-3 transition-all duration-300 hover:bg-green-500 bg-green-400 p-2">
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
const codeMirror = ref(null);
const queryContent = ref("let a = 20;");
const mode = ref({ name: "javascript", json: true });
// const editorOptions = ref({
//   theme: "white",
// });
onMounted(() => {
  
});
</script>
