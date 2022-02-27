=> 并不是 ES6 中的箭头函数，其实是类型定义；

定义的是函数：

```ts
interface Handler {
    // 定义函数
    (name: string): void;
}
```