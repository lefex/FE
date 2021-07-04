<template>
    <div class="main">
        <NavHeader/>
        <MsgContent/>
        <MainFooter/>
    </div>
</template>

<script>
import NavHeader from './components/navHeader.vue';
import MsgContent from './components/msgContent.vue';
import MainFooter from './components/mainFooter.vue';

export default {
    components: {
        NavHeader,
        MsgContent,
        MainFooter,
    },
};
</script>
