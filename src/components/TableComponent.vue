<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => ["Product Name", "Category", "Price", "Edit"],
  },
});
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table
              class="min-w-full divide-y divide-gray-200 table-fixed"
            >
              <thead class="bg-gray-100 ">
                <tr>
                  <th
                    v-for="(title, index) in props.headers"
                    :key="`${header}_${index}`"
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                  >
                    {{ title }}
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200 "
              >
                <tr class="hover:bg-gray-100">
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap "
                  >
                    Apple Imac 27"
                  </td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap "
                  >
                    Desktop PC
                  </td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap "
                  >
                    $1999
                  </td>
                  <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
