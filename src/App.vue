<template lang="pug">
header
  TheWelcome
  HelloWorld
</template>

<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<style scoped lang="scss">
@import './assets/theme/demo01/styles/color.scss';

body {
    color: $body-color;
    background: $body-bg;
}
</style>
