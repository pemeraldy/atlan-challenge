<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import IconCells from "./components/icons/IconCells.vue";
import QueryHandler from "./components/QueryHandler.vue";
import MenuComponent from "./components/MenuComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import IconCheck from "./components/icons/IconCheck.vue";

// Data
import { customers } from "../data/customers";
import { categories } from "../data/categories";
import { products } from "../data/products";
import AtlanLogo from "./components/icons/AtlanLogo.vue";
import BurgerMenu from "./components/icons/BurgerMenu.vue";
import TableIcon from "./components/icons/TableIcon.vue";
import CodeIcon from "./components/icons/CodeIcon.vue";
import PlayIcon from "./components/icons/PlayIcon.vue";
const alltables = [customers, categories, products];
const tablesInMenu = ref(["Categories", "Customers", "Products"]);
let selectedTable = ref(null);
const sideMenuVisible = ref(true);
const isMobile = computed(() => {
  return window.innerWidth < 700;
});
const loadedTable = computed(() => {
  if (!selectedTable.value) return [];
  return selectedTable.value;
});
// Sample Saved queries
const savedQueries = reactive([
  {
    name: "query active categories",
    queryContent: `select 
	categoryID, categoryName, description
from tables.categories
where 
	status = 'active'`,
  },
  {
    name: "Reordered products",
    queryContent: `select 
	productID, productName, quantityPerUnit, unitPrice, reorderLevel
from tables.products
where 
	reorderLevel > 10`,
  },
]);

let currentQueryInEditor = ref("");

const savedQueryMenuTitles = computed(() => {
  return savedQueries.map((item) => item.name);
});

// Functions
const handleTables = (e) => {
  isRunningQuery.value = true;
  setTimeout(() => {
    setSelectedTable(e.index);
    isRunningQuery.value = false;
  }, 300);
};
const setSelectedTable = (index) => {
  selectedTable.value = alltables[index];
};
const loadQuery = (e) => {
  currentQueryInEditor.value = savedQueries[e.index].queryContent;
};

const isRunningQuery = ref(false);
const runQuery = () => {
  isRunningQuery.value = true;
  setTimeout(() => {
    isRunningQuery.value = false;
    if (!selectedTable.value) {
      selectedTable.value = alltables[0];
      if (isMobile.value < 700) {
        toggleTable();
      }
    }
  }, 200);
};

const showEditor = ref(true);
const showTable = ref(true);

const toggleTable = () => {
  showEditor.value = false;
  showTable.value = true;
  if (sideMenuVisible.value) sideMenuVisible.value = false;
};
const toggleEditor = () => {
  showEditor.value = true;
  showTable.value = false;
  if (sideMenuVisible.value) sideMenuVisible.value = false;
};

// lifecycle hooks
onMounted(() => {
  // if saved queries are available, load the first
  if (savedQueryMenuTitles.value.length > 0) {
    currentQueryInEditor.value = savedQueries[0].queryContent;
  }
  if (window.innerWidth < 700) {
    sideMenuVisible.value = false;
    toggleEditor();
  }
});
</script>

<template>
  <div
    class="flex justify-center bg-gray-50 sm:bg-[#1913ae] sm:p-5 overflow-hidden w-screen min-h-screen"
  >
    <main
      class="bg-white w-full overflow-hidden min-h-full max-h-full sm:rounded-2xl"
    >
      <nav class="flex justify-between border-b border-gray-300 p-4">
        <a href="#" class="inline-block w-20 h-6">
          <AtlanLogo />
        </a>
        <button
          @click="sideMenuVisible = !sideMenuVisible"
          class="text-[#1913ae] sm:hidden"
        >
          <BurgerMenu />
        </button>
      </nav>
      <div class="flex bg-gray-50 h-full">
        <!-- sidebar -->
        <div
          v-if="sideMenuVisible"
          class="sm:block sm:w-[250px] sm:max-w-[250px] border-r border-gray-300"
        >
          <div class="flex flex-col items-center">
            <MenuComponent
              menu-heading="Tables"
              :list-items="tablesInMenu"
              @handle-actions="handleTables"
            >
              <template #icon>
                <IconCells />
              </template>
            </MenuComponent>

            <!-- Saved queries -->
            <MenuComponent
              menu-heading="Saved Queries"
              :list-items="savedQueryMenuTitles"
              @handle-actions="loadQuery"
            >
              <template #icon>
                <span
                  class="py-[2px] px-[3px] rounded text-[8px] font-semibold bg-orange-500 text-white"
                  >SQL</span
                >
              </template>
            </MenuComponent>
          </div>
        </div>

        <!-- rest content -->
        <div class="flex-1 bg-white">
          <QueryHandler
            v-if="showEditor"
            @runQuery="runQuery"
            :query="currentQueryInEditor"
          />
          <div v-if="showTable" class="border-b sm:mt-16 border-gray-200">
            <div class="flex items-center">
              <span class="text-green-400 ml-3">
                <IconCheck />
              </span>
              <span
                class="px-2 py-2 border-b border-gray-100 uppercase text-gray-400 text-xs font-semibold"
                >Query Results</span
              >
            </div>
          </div>
          <!-- sm:max-h-screen overflow-x-hidden  overflow-y-auto -->
          <div v-if="showTable" class="overflow-hidden">
            <TableComponent
              :loadingQuery="isRunningQuery"
              :tableData="loadedTable"
            />
          </div>
        </div>
      </div>
    </main>
    <div
      v-if="isMobile"
      class="flex fixed bottom-0 py-2 px-5 w-full flex justify-between bg-transparent"
    >
      <div class="w-full bg-gray-50 rounded-sm flex justify-between">
      <button
        @click="toggleTable"
        :class="[showTable ? 'text-[#1913a3]' : 'text-gray-400']"
        class="flex flex-col items-center justify-center px-2 py-1 font-medium"
      >
        <span>
          <TableIcon />
        </span>
        <span class="text-xs">Tables</span>
      </button>
      <button
        @click="toggleEditor"
        :class="[showEditor ? 'text-[#1913a3]' : 'text-gray-400']"
        class="flex flex-col items-center justify-center px-2 py-1 font-medium"
      >
        <span>
          <CodeIcon />
        </span>
        <span class="text-xs">Query</span>
      </button>
      <button
        @click="runQuery"
        class="flex flex-col justify-center items-center text-green-600 px-2 py-1 font-medium"
      >
        <span>
          <PlayIcon />
        </span>
        <span class="text-xs"> Run Query </span>
      </button>
      </div>
    </div>
  </div>
</template>
