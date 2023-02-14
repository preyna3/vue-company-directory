<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
const { login, logout, isAuthenticated } = useAuth()

const username = ref('')
const password = ref('')

const logUserIn = () => {
  if (login(username.value, password.value)) {
    console.log('logged in')
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="UserName" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2">Login</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
  }
}
</style>
