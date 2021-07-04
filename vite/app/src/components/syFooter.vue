<template>
    <div>{{ name }} - {{ slogan }}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class SyFooter extends Vue {
    @Prop(String) slogan!: string;
    age = 20;
    name: string = '素燕';
}

</script>