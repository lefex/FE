<template>
    <div class="main">
        <NavHeader/>
        <div>{{ content }}</div>
        <MsgContent/>
        <SyFooter :slogan="slogan"/>
    </div>
</template>

<script lang="ts">
import NavHeader from './components/navHeader.vue';
import MsgContent from './components/msgContent.vue';
import SyFooter from './components/syFooter.vue';
import {getContent} from './util';

export default {
    data() {
        return {
            content: getContent(),
            slogan: '帮助10W人入门并进阶前端',
        };
    },
    components: {
        NavHeader,
        MsgContent,
        SyFooter,
    },
};
</script>