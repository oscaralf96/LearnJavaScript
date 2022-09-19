<!-- <script>
  export default {
    data() {
      return {
        username: ""
      }
    },
    methods: {
      iniciar() {
        // this.$router.replace('/chats');
        //this.$router.go(-1); // negativos hacia atras en el historial
        // this.$router.push({
        //   path: '/chats',
        //   query: {
        //     variable1: 1,
        //   },
        //   replace: true,
        // });
        this.$router.push({ name: 'about'})
      },
    }
  }
</script> -->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref();
const router = useRouter();

function iniciar() {
  router.push({ name: 'about'});
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario </h3>
    <input placeholder="username" v-model="username" />
    <button @click="iniciar">Iniciar sesion</button>
  </main>
</template>
