# Vue3学习

技术栈 vue3 + vite + TS

使用单文件组件需要安装（vue2使用的是 vue-template-compiler）：

```shell
npm install -D @vue/compiler-sfc
```

## 使用 vite 创建项目

```shell
# npm 6.x
$ npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```

## 项目配套工具

- Vue Devtools

## 参考资料

- [SFC](https://v3.cn.vuejs.org/guide/single-file-component.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8-sfc)