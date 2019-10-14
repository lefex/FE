let titles = [
    '我要坚持完成前端小课第一阶段的内容！',
    '我的目标是学好前端！',
    '大家共同努力！',
    '前端小课开课啦！',
    '今天是学习的第四天，继续加油！'
];
let addText = function () {
    let index = Math.floor(Math.random() * titles.length + 0);
    let div = document.createElement("div");
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(div);
}