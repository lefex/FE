# 在 vite 中使用 Vue 与 TS

需要先安装 [vite-plugin-vue2](https://www.npmjs.com/package/vite-plugin-vue2)
npm install vue-template-compiler -D 

# Vue 中使用 TS

- [vue使用 ts 官方文档](https://cn.vuejs.org/v2/guide/typescript.html)

以类的方式实现 vue 组件，可以就像写一个类一样，而不是像使用字典对象
- [vue-class-component](https://class-component.vuejs.org/)

下面是 vue-class-component 的扩展，增加了更多装饰器
- [vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator)
npm i -S vue-property-decorator

ESLint 会报这个错误
Type annotations can only be used in TypeScript files.

Cannot find module './app.vue' or its corresponding type declarations.


# 官方说明

Vite 支持开箱即用地引入 .ts 文件。

Vite 仅执行 .ts 文件的翻译工作，并 不 执行任何类型检查。并假设类型检查已经被你的 IDE 或构建过程接管了。（你可以在构建脚本中运行 tsc --noEmit 或者安装 vue-tsc 然后运行 vue-tsc --noEmit 来对你的 *.vue 文件做类型检查）。

Vite 使用 esbuild 将 TypeScript 翻译到 JavaScript，约是 tsc 速度的 20~30 倍，同时 HMR 更新反映到浏览器的时间小于 50ms。

注意因为 esbuild 只执行转译工作而不含类型信息，所以它无需支持 TypeScript 的特定功能例如常量枚举和隐式 “type-only” 导入。你必须在你的 tsconfig.json 中的 compilerOptions 里设置 "isolatedModules": true，这样 TS 才会警告你哪些功能无法与独立编译模式一同工作。