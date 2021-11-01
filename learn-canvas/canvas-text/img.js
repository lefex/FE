function contextForCanvasSelectorId(selector) {
    let canvas = document.getElementById(selector);
    if (!canvas) {
        throw Error(`The selector ${selector} invalid`);
    }
    let context = canvas.getContext('2d');
    if (!context) {
        throw Error(`You must use canvas id selector, eg: xxx <canvas id="xxx"></canvas>`)
    }

    const suyanImage = new Image();
    suyanImage.addEventListener('load', () => {
        console.log('load img finish', suyanImage.width);
        let width = suyanImage.width;
        let height = suyanImage.height;
        context.drawImage(suyanImage, -172, 0, width, height);

        let context2 =  document.getElementById('canvas-img2').getContext('2d');
        context2.drawImage(suyanImage, 0, 0, width, height, -310, -80, width, height);

        let context3 =  document.getElementById('canvas-img3').getContext('2d');
        context3.drawImage(suyanImage, 0, 0, width, height, -450, -170, width, height);

        let context4 =  document.getElementById('canvas-img4').getContext('2d');
        context4.drawImage(suyanImage, 0, 0, width, height, -610, -240, width, height);
    }, false);
    suyanImage.addEventListener('error', () => {
        console.log('load img error', error);
    }, false);
    suyanImage.src = './render.jpg';
}
contextForCanvasSelectorId('canvas-img1');
