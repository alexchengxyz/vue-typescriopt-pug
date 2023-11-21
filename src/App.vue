<template lang="pug">
header
    img.img-fluid(
        :srcset="`${imageUrl('banner2', '480')} 480w, ${imageUrl('banner1', '1920')} 1920w`"
        sizes="(max-width: 480px), (max-width: 1920px)"
        alt="banner"
    )
</template>

<script setup lang="ts">
// import { ref, computed, onMounted } from 'vue';
import { inject } from 'vue';
import type { GlobalInfo } from '../types';

const globalInfo = inject<GlobalInfo>('globalInfo');

const imageUrl = (name: string, size: string, extName: string = 'jpg') => {
    let url = `./images/${globalInfo?.promotionId}/${name}-${globalInfo?.lang}`;

    if (size) {
        url = `${url}-${size}`;
    }

    if (extName) {
        url = `${url}.${extName}`;
    }

    return url;
};

// State

// Computed

// onMounted(() => {

// });

</script>

<style scoped lang="scss"></style>
