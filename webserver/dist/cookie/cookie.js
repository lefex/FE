/**
 * @file cookie.js
 * @author 公众号素燕
 */

// 获取所有的 cookie
console.log(document.cookie);

// 设置 cookie
let cookieText = '';

let token = encodeURIComponent('token');
let cookie1 = `${token}=qianduanxiaoke; domain=localhost; path=/; sameSite=Lax;`
cookieText += cookie1;

document.cookie = cookieText;

// 获取所有的 cookie
console.log('all cookie: --------');
console.log(document.cookie);

window.addEventListener('storage', event => {
    alert('change');
    console.log(event);
});

// 增加一条数据
sessionStorage.setItem('name', '公众号素燕');
sessionStorage.setItem('logo', '前端小课， 帮助 10W 人入门并进阶前端');

// 获取一条数据，key 为 name
console.log(sessionStorage.getItem('name'));
// 获取第一条数据的 key
console.log(sessionStorage.key(0));
// 删除一条数据，key 为 logo
sessionStorage.removeItem('logo')

// 增加一条数据
localStorage.setItem('name', '公众号素燕');
localStorage.setItem('logo', '前端小课， 帮助 10W 人入门并进阶前端');

// 获取一条数据，key 为 name
console.log(localStorage.getItem('name'));
// 获取第一条数据的 key
console.log(localStorage.key(0));
// 删除一条数据，key 为 logo
localStorage.removeItem('logo');

setTimeout(() => {
    localStorage.setItem('name', '公众号素燕');
}, 1000);