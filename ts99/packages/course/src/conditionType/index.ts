class SBaseNode {
  x: number;
  y: number;

  parser(data: Record<any, any>) {
    this.x = data.x;
    this.y = data.y;
  }
}

class STextNode extends SBaseNode {
  text: string;
  fontSize: number;
  color: string;
  parser(data: Record<any, any>) {
    super.parser(data);
    this.fontSize = data.fontSize;
    this.color = data.color;
  }
}

class SImgNode extends SBaseNode {
  w: number;
  h: number;
  src: string;
  parser(data: Record<any, any>) {
    super.parser(data);
    this.w = data.w;
    this.h = data.h;
    this.src = data.src;
  }
}

const dataContent = [{
  t: 'text',
  x: 10,
  y: 10,
  fontSize: 20,
  c: '哈哈'
}, {
  t: 'img',
  c: 'https://ww1.sinaimg.cn/mw690/008easkzly1h9rr5gp5jhj323u35s7wi.jpg',
  w: 120,
  h: 120
}];

type SNode = STextNode | SImgNode;

function parseContent(datas) {
  const rets: SNode[] = [];
  datas.forEach(element => {
    let node: SNode;
    if (element.t === 'text') {
      node = new STextNode();
    }
    else if (element.t === 'img') {
      node = new SImgNode();
    }
    node.parser(element);
    rets.push(node);
  });
  return rets;
}

const nodes = parseContent(dataContent);