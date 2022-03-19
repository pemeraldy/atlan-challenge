<template>
  <div class="sm:h-[200px] w-full border-b border-gray-800">
    <textarea class="w-full h-full" id="editor" v-model="queryContent"></textarea>
  </div>
</template>

<script setup>
import * as CodeMirror from "codemirror";
// import 'codemirror/lib/codemirror.css'
import { ref, onMounted } from "vue";
const queryContent = ref("let a = 20");
onMounted(() => {
  CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
  });
  console.log(CodeMirror);
});
</script>
