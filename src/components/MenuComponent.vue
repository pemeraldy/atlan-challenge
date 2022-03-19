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
        class="cursor-pointer pl-4 py-2 flex items-center"
      >
        <slot name="icon">
          <span
            class="py-[2px] px-[3px] rounded text-[8px] font-semibold bg-orange-500 text-white"
            >SQL</span
          >
        </slot>
        <span class="ml-2 text-xs text-gray-700 font-medium">{{ item }}</span>
      </li>
    </slot>
  </ul>
</template>

<script setup>
const props = defineProps({
  listItems: {
    type: Array,
    default: () => [],
  },
  menuHeading: String,
});
</script>
