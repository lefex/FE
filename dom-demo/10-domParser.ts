var htmlTpl = tpl.innerHTML;
// 字符串转换成文档类型
var domParser = new DOMParser();
var doc = domParser.parseFromString(htmlTpl, 'text/html');

// 使用原生的TreeWalker进行遍历
var treeWalker = document.createTreeWalker(doc);
var arrNodeRemove = [];
// 遍历注释节点和换行文本节点
while(treeWalker.nextNode()) {
    var node = treeWalker.currentNode;
    if (node.nodeType == Node.COMMENT_NODE || (node.nodeType == Node.TEXT_NODE && node.nodeValue.trim() == '')) {
        arrNodeRemove.push(node);
    }
}
// 节点移除
arrNodeRemove.forEach(function (node) {
    node.parentNode.removeChild(node);
});
// 字符串还原
console.log(doc.body.innerHTML);
// 输出结果是：
// <p>这是文本。</p><ol><li>列表</li><li>列表</li><li>列表</li></ol>

            // content = $(`<p>${content}</p>`).html();
            // content = content
            //     .replace(/&lt;/g, '<')
            //     .replace(/&gt;/g, '>')
            //     .replace(/"/g, '&quot;'); // xss漏洞
            // let textNode = document.createTextNode(`${content}`);
            // let div = document.createElement('div');
            // div.append(textNode);

            // content = div.innerText;

            // let str = '&lt;span&gt;by zhangxinxu&lt;/span&gt;';
            // let doc = new DOMParser().parseFromString(content, 'text/html');
            // content = doc.documentElement.textContent;

            // let textarea = document.createElement('textarea');
            // textarea.innerHTML = content;
            // content = textarea.childNodes[0].nodeValue;