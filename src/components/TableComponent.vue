<script setup>
import { onMounted, computed } from "vue";
const props = defineProps({
  tableHeaders: {
    type: Array,
    default: () => ["Product Name", "Category", "Price", "Action"],
  },
  tableData: {
    type: Array,
    default: () => [],
  },
});
const compheaderData = computed(() => props.tableHeaders);
console.log(compheaderData.value);
onMounted(() => {
  console.log(props.tableHeaders);
});
</script>

<template>
  <div>
    <RecycleScroller
      class="scroller"
      :items="compheaderData"
      :item-size="32"
      key-field="id"
      v-slot="{ item }"
    >

      <div class="flex">
        <div>{{ item }}</div>
      </div>
    </RecycleScroller>
    
  </div>
</template>
