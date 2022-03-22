# Atlan-Frontend Engineer Task
The development of the frontend features of a data analyzing responsive web app.
The developed data analyst  UI proposes that 
1. Saved tables created by a data analyst can be seen on the side menu for easy accessibility.
2. Tables can be selected to display data in a tabular form
3. Queries can be typed in an elegant code editor
4. Queries typed can be run to generate data in a tabular form


## Q1. Calculate the page load time of your app. Write the page load time in README. Also, write, how did you calculate the page load time of the app.

## Page Load Time  - 2.57s
|  Without ag-grid 	|with ag-grid   	|   	|   	|
|:-:	|:-:	|:-:	|:-:	|
|   5.55s  	|  2.57s 	|   	|
|   	|   	|   	|   	|

## 1. Calculating page load time
This was calculated using two methods:
-  Using the network tab on the google chrome dev tool
-  Using an online [tool ](https://pagespeed.web.dev/report?url=https%3A%2F%2Ffrosty-jang-2c102f.netlify.app%2F)

## Performance Issue 
Initially having to render a large amount of data on the table was indeed a costly task for the browser to paint that amount of dom elements, rendering a row of about 2000000 will definitely cause a browser running on a strong CPU to lag if not crashing the browser tab.

## Solution
The solution to this is to implement a virtual scrolling mechanism for that portion of the DOM to ensure that only the data that can be seen on the screen per time are rendered, well I had started writing a Custom component to do that, but trying optimize and testing to be sure that this plugin/component will do the job accurately was going to take a lot of time so I decided to look for existing tools already built to solve this issue.

They are actually several tools to solve this issue, my first resolve was to use [vue3-virtual-scroller](https://www.npmjs.com/package/vue3-virtual-scroller), but I ran into some technical issues would have given it a deep dive to find the solution but the time I spent at work would not give me that luxury of time.
This led to me opting for a more robust package [vue-ag-grid](https://www.ag-grid.com/vue-data-grid/getting-started/)


Page speed without optimization
![without optimization](https://github.com/pemeraldy/atlan-challenge/blob/master/src/assets/imgs/perfomance/slowload.PNG)

LightHouse result without optimization
![lighthouse without optimization](https://github.com/pemeraldy/atlan-challenge/blob/master/src/assets/imgs/perfomance/slow-state-2.PNG)

Page speed with optimization
![with optimazation](https://github.com/pemeraldy/atlan-challenge/blob/master/src/assets/imgs/perfomance/test-grid-approach.PNG)
LightHouse result with optimization
![optimized](https://github.com/pemeraldy/atlan-challenge/blob/master/src/assets/imgs/perfomance/test-grid-approach2.PNG)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
