<template>
    <div>
        <div v-if="name === 'suyan'">{{ title }}</div>
        <div v-else>{{ title }}</div>
        <Banner/>
    </div>
</template>

<script lang="ts">
import Banner from './Banner.vue';

export default {
    components: {
        Banner,
    },
    data() {
        return {
            name: 'suyan',
        };
    },
};
</script>

<style>

</style>