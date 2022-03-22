<template>
  <ul class="w-full pl-4 mt-4">
    <slot name="header">
      <h2
        class="px-2 py-2 border-b border-gray-100 uppercase text-gray-400 text-xs font-semibold w-full"
      >
        {{ props.menuHeading }}
      </h2>
    </slot>

    <slot name="navItems">
      <li
        v-for="(item, index) in props.listItems"
        :key="index"
        :class="[activeMenuItem === index ? 'border-l-4  border-blue-700' : '']"
        class="cursor-pointer pl-4 py-2 flex items-center"
        @click="handleClick({ item, index })"
      >
        <slot name="icon">
          <span
            class="py-[2px] px-[3px] rounded text-[8px] font-semibold bg-orange-500 text-white"
            >SQL</span
          >
        </slot>
        <span class="ml-2 text-xs w-3/4 text-gray-700 font-medium truncate">{{
          item
        }}</span>
      </li>
    </slot>
  </ul>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const props = defineProps({
  listItems: {
    type: Array,
    default: () => [],
  },
  menuHeading: String,
});
const emit = defineEmits(["setItem"]);
// const menuTitle = computed(() => props.listItems);
const activeMenuItem = ref(null);
const handleClick = (e) => {
  emit("setItem", e);
  activeMenuItem.value = e.index
};
onMounted(() => {
  
});
</script>
