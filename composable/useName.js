import { ref } from "vue";

const age = ref(21);
const addAge = () => {
  age.value + 2;
  console.log("AFTER::", age);
};

export default { age, addAge };
