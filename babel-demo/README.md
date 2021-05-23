# 安装

@babel/cli：通过命令的方式运行 babel

```shell
npm install --save-dev @babel/core @babel/cli
```

```json
{
    "scripts": {
      "build": "babel src -d lib"
    }
}
```

如果没有 babel 的配置文件，源文件将会原封不动输出。

安装 preset-env

```shell
npm install @babel/preset-env --save-dev
```

检查 TS 类型

```shell
npm install --save-dev @babel/preset-typescript
```

```shell
npm install --save-dev @babel/plugin-transform-runtime
```

### 配置文件

- babel.config.js
- .babelrc
- package.json

```js
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

### 一些术语

preset： pre-determined set of plugins，一些插件的集合
plugin：插件，负责把代码转化为另一种形式
polyfill: 一些新特性的第三方的实现

@babel/polyfill 包含了 ES2015+ 的所有实现，但是项目中不一定都会用到这么多特性，如果全部引入反而增加了包大小，所以需要俺需引入；
由core-js2和regenerator-runtime组成的一个集成包

@babel/core
@babel/cli：通过命令行使用 babel
@babel/plugin*：基于插件，每个代码的转化其实都是通过插件完成，只有对代码进行插件配置才会生成新的的代码
@babel/preset-env：处理 es6+ 规范的集合，可以按不同的环境生成不同的代码
@babel/polyfill：编译只会进行语法转化，而 polyfill 的作用是添加新的语法特性
@babel/runtime
@babel/plugin-transform-runtime：可以把共用的代码提取出来

引入core-js和regenerator-runtime/runtime这两个包完全取代 @babel/polyfil

## es2015 特性

- 箭头函数
- class
- 字符串模板 ``
- 解构（Destructuring）,var {op, lhs, rhs} = getASTNode()
- ..., 参数默认值
- let、const
- for..of
- Generators
- Modules(import， export)
- Map + Set + WeakMap + WeakSet
- Proxies
- Symbols
- Promises
- Array.from、Array.of、fill、findIndex、entries、keys、values
- Object.assign
- string.includes、repeat