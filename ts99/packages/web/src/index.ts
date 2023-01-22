import {createApp} from 'vue';


const appEl = document.createElement('div') as HTMLElement;
appEl.id = 'app';
document.body.appendChild(appEl);

$('#app').add('.root-wrap');

'sy'.toString();

const app = createApp({

});
app.mount(appEl);

// 给window上添加你想要的内容
declare global {
  interface Window {
    pageData: Record<string, any>
  }
}

if (window.pageData.isLoging) {
  console.log('logined');
}
else {
  console.log('need login');
}

const getData = function() {
  return new Promise();
}