<template>
    <div>
        <div v-if="name === 'suyan'">{{ title }}</div>
        <div v-else>{{ title }}</div>
        <Banner :author-name="name"/>
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

<style lang="stylus">
.box
    font-size 12px
.name
    color: #99999
</style>