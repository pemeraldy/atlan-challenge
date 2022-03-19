<script setup></script>

<template>
  <div class="flex justify-center bg-blue-800 p-5 w-screen min-h-screen">
    <main class="bg-white w-full overflow-hidden min-h-full rounded-2xl">
      <nav class="flex justify-between border-b border-gray-300 p-4">
        <a href="#" class="inline-block w-20 h-6">
          <svg
            viewBox="0 0 233.21 72.63"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <pattern
              id="a"
              height="90.53"
              patternTransform="translate(-1538.09 2155.25)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 90.53 90.53"
              width="90.53"
            >
              <path d="m0 0h90.53v90.53h-90.53z" fill="none" />
              <path d="m0 0h90.53v90.53h-90.53z" fill="#2026d2" />
            </pattern>
            <pattern
              id="b"
              height="90.53"
              patternTransform="translate(-1538.09 2155.25)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 90.53 90.53"
              width="90.53"
            >
              <path d="m0 0h90.53v90.53h-90.53z" fill="none" />
              <path d="m0 0h90.53v90.53h-90.53z" fill="#62e1fc" />
            </pattern>
            <pattern
              id="c"
              height="90.53"
              patternTransform="translate(-89.58 2115.25)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 90.53 90.53"
              width="90.53"
            >
              <path d="m0 0h90.53v90.53h-90.53z" fill="none" />
              <path d="m0 0h90.53v90.53h-90.53z" fill="#62e1fc" />
            </pattern>
            <g fill="url(#a)">
              <path
                d="m52.52 22.45v48.82h-14.64v-4.59c-3.22 3.71-8 5.95-14.55 5.95-12.79 0-23.33-11.22-23.33-25.77s10.54-25.77 23.33-25.77c6.54 0 11.33 2.24 14.55 5.95v-4.59zm-14.64 24.41c0-7.32-4.88-11.86-11.62-11.86s-11.62 4.54-11.62 11.86 4.89 11.91 11.62 11.91 11.62-4.59 11.62-11.91z"
              />
              <path
                d="m81.8 36.51v17.28c0 4.2 3.62 4.59 10.06 4.2v13.28c-19.13 2-24.7-3.81-24.7-17.48v-17.28h-7.81v-14.06h7.81v-9.27l14.64-4.39v13.66h10.06v14.06z"
              />
              <path d="m100.15 0h14.65v71.27h-14.65z" />
              <path
                d="m175.62 22.45v48.82h-14.62v-4.59c-3.22 3.71-8 5.95-14.54 5.95-12.79 0-23.34-11.22-23.34-25.77s10.55-25.77 23.34-25.77c6.54 0 11.32 2.24 14.54 5.95v-4.59zm-14.62 24.41c0-7.32-4.91-11.86-11.64-11.86s-11.62 4.59-11.62 11.91 4.88 11.91 11.62 11.91 11.64-4.64 11.64-11.96z"
              />
              <path
                d="m233.21 41.3v30h-14.64v-27.86c0-6-3.81-8.88-8.5-8.88-5.37 0-9.08 3.12-9.08 10.06v26.65h-14.64v-48.82h14.65v4.55c2.64-3.61 7.52-5.95 14-5.95 9.81.04 18.21 7.07 18.21 20.25z"
              />
            </g>
            <circle cx="26.26" cy="46.86" fill="url(#b)" r="6" />
            <circle cx="149.36" cy="46.86" fill="url(#c)" r="6" />
          </svg>
        </a>
      </nav>
      <div class="flex bg-gray-50 h-full">
        <!-- sidebar -->
        <div class="sm:w-[250px] border-r border-gray-300">
          <div class="flex flex-col items-center">
            <ul class="w-full pl-4">
              <h2
                class="px-2 py-2 border-b border-gray-100 uppercase text-gray-400 text-xs font-semibold w-full"
              >
                Tables
              </h2>
              <li v-for="i in 3" :key="i" class=" cursor-pointer pl-4  py-2 flex items-center">
                <span class="inline-block w-4 h-4">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      style="fill: #ddd"
                      d="M488.727,46.545H23.273C10.42,46.545,0,56.965,0,69.818v93.091V256v93.091v93.091
	c0,12.853,10.42,23.273,23.273,23.273h155.152h155.152h155.152c12.853,0,23.273-10.42,23.273-23.273v-93.091V256v-93.091V69.818
	C512,56.965,501.58,46.545,488.727,46.545z M155.152,418.909H46.545v-46.545h108.606V418.909z M155.152,325.818H46.545v-46.545
	h108.606V325.818z M155.152,232.727H46.545v-46.545h108.606V232.727z M310.303,418.909H201.697v-46.545h108.606V418.909z
	 M310.303,325.818H201.697v-46.545h108.606V325.818z M310.303,232.727H201.697v-46.545h108.606V232.727z M465.455,418.909H356.848
	v-46.545h108.606V418.909z M465.455,325.818H356.848v-46.545h108.606V325.818z M465.455,232.727H356.848v-46.545h108.606V232.727z"
                    />
                    <path
                      style="fill: #ddd"
                      d="M488.727,46.545H23.273C10.42,46.545,0,56.965,0,69.818v93.091c0,12.853,10.42,23.273,23.273,23.273
	h23.273h108.606h46.545h108.606h46.545h108.606h23.273c12.853,0,23.273-10.42,23.273-23.273V69.818
	C512,56.965,501.58,46.545,488.727,46.545z"
                    />
                    <path
                      style="fill: #ddd"
                      d="M23.273,46.545C10.42,46.545,0,56.965,0,69.818v93.091c0,12.853,10.42,23.273,23.273,23.273h23.273
	h108.606h46.545H256V46.545H23.273z"
                    />
                    <path
                      style="fill: #ddd"
                      d="M201.697,418.909v-46.545H256v-46.545h-54.303v-46.545H256v-46.545h-54.303v-46.545h-46.545v46.545
	H46.545v-46.545H23.273C10.42,186.182,0,175.762,0,162.909V256v93.091v93.091c0,12.853,10.42,23.273,23.273,23.273h155.152H256
	v-46.545H201.697z M155.152,418.909H46.545v-46.545h108.606V418.909z M155.152,325.818H46.545v-46.545h108.606V325.818z"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </span>
                <span class="ml-2 text-xs text-gray-700 font-medium">Customers</span>
              </li>
            </ul>
            <!-- Saved queries -->
            <ul class="w-full pl-4 mt-4">
              <h2
                class="px-2 py-2 border-b border-gray-100 uppercase text-gray-400 text-xs font-semibold w-full"
              >
                Saved Queries
              </h2>
              <li v-for="i in 3" :key="i" class="cursor-pointer pl-4 py-2 flex items-center">
                <span class=" py-[2px] px-[3px] rounded text-[8px] font-semibold bg-orange-500 text-white"
                  >SQL</span
                >
                <span class="ml-2 text-xs text-gray-700 font-medium"
                  >All sold products</span
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- rest content -->
        <div class="flex-1 bg-white">
          <h1>Rest content</h1>
        </div>
      </div>
    </main>
  </div>
</template>
