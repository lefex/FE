const drawImage = () => {
    const canvas = new fabric.Canvas('draw-app');

    fabric.Image.fromURL('./img/zly.jpeg', aImage => {
        // 添加过滤器
        aImage.filters.push(new fabric.Image.filters.Sepia());
        // aImage.filters.push(new fabric.Image.filters.BaseFilter());
        aImage.applyFilters();
        canvas.add(aImage);
    }, {
        top: 10,
        left: 10,
        opacity: 1
    });
}
drawImage();