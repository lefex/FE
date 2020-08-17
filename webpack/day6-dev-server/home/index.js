; (function () {
    let pEle = document.createElement('p');
    pEle.innerText = 'home：我是动态创建的';
    console.log(pEle);
    let parEle = document.getElementById('suyan-gongzhonghao');
    // let person;
    // person.age;
    console.log(parEle);
    parEle.appendChild(pEle);
})();