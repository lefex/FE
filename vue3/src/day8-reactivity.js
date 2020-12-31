
console.log(Vue);

// 生成一个响应式的对象
const state = Vue.reactive({
    age: 20
});
// console.log(state);

// 对与嵌套的属性不会变为可响应的
const shallowState = Vue.reactive({
    age: 20,
    cat: {
        name: 'miaomiao'
    }
});
// console.log(shallowState);

// 把可响应的对象转换成原先的对象
// console.log(Vue.toRaw(state));

const copyState = Vue.readonly(state);

state.age = 26;
// 只读的，不能修改
// copyState.age = 27;

// 把一个普通的值进行一次包装
const count = Vue.ref(0);
// console.log(count.value);

count.value += 1;
// console.log(count.value);


Vue.watchEffect((effect, options) => {
    console.log('watchEffect', state.age);
});