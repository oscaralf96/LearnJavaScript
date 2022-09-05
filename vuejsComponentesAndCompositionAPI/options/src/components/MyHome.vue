<template>
  <div>{{ counter }} : {{ obj.counter2 }}</div>
  <div></div>
  <div>{{ fullName }}</div>
  <div>{{ info }}</div>
  <div>{{ otro }}</div>
  <div>{{ username }}</div>
  <button ref="btn">Click!</button>
</template>

<script setup>
import {
  defineProps,
  defineExpose,
  reactive,
  ref,
  watch,
  computed,
  toRefs,
  inject,
} from "vue";

const props = defineProps({
  ageNumber: String,
  soccerTeam: String,
});

const counter = ref(0);
const obj = reactive({ counter2: 0 });

setInterval(() => counter.value++, 1000);
setInterval(() => obj.counter2++, 2000);

watch(
  () => obj.counter2,
  (valor, anterior) => {
    console.log(valor, anterior);
  }
);

const firstName = "Oscar",
  lastName = "Gonzalez";

const { ageNumber, soccerTeam } = toRefs(props);
const fullName = computed(() => {
  return `${firstName} ${lastName}`;
});

const info = computed(() => {
  return `${ageNumber.value} - ${soccerTeam.value}`;
});

/* console.log(context);
const otro = context.attrs.otro;
console.log(otro); */

const username = inject("username");

/*  context.expose({
  fullName,
}); */
defineExpose({
  fullName,
});

const btn = ref(null);

watch(btn, (valor) => {
  console.log("cambio", valor);
});
</script>
