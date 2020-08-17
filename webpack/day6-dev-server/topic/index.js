; (function () {
    let pEle = document.createElement('p');
    pEle.innerText = 'topic: 我是动态创建的';
    console.log(pEle);
    let parEle = document.getElementById('suyan-gongzhonghao');
    console.log(parEle);
    parEle.appendChild(pEle);
})();