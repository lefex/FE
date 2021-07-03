// 解决导入 .vue 文件找不到的问题
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

// 给 Vue 实例新增属性
declare module 'vue/types/vue' {
    interface Vue {
        $toast: string;
    }
}