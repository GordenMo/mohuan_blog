<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '@/store/main'

import { NButton } from 'naive-ui'

const mainStore = useMainStore()

console.log(import.meta.env.VITE_APP_WEB_URL)

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button>naive-ui123</n-button>
  <n-config-provider :locale="zhCN" :theme="theme">
    <!-- 容器 -->
  </n-config-provider>

  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
a {
  color: $test-color;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
