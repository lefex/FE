<template>
    <div class="sy-root">
        <div class="sy-content">
            <ContentCard/>
        </div>
        <SYFooter/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SYNavBar from '../../components/SYNavBar.vue';
import SYFooter from '../../components/SYFooter.vue';
import ContentCard from './components/ContentCard.vue';

export default defineComponent({
    components: {
        SYNavBar,
        SYFooter,
        ContentCard
    }
});

</script>

<style>
.sy-root {
    margin-top: 0;
}

.sy-content {
    min-height: 400px;
}
</style>