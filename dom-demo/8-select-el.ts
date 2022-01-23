/**
 * @author 素燕（我有个公众号：素燕）
 * @description 键盘事件
 */

 (function() {
    let rootEl = document.querySelector('.sy-dom-app') as HTMLElement;
    if (!rootEl) {
        return;
    }

    const BACKGROUNDS = [
        '',
        // 第一行
        '#000000',
        '#333333',
        '#666666',
        '#999999',
        '#cccccc',
        '#e0e0e0',
        '#ebebeb',
        '#f5f5f5',
        '#ffffff',
        // 第二行
        '#fe1f1f',
        '#fe7f0e',
        '#ffdf13',
        '#41c735',
        '#13c2c2',
        '#0084ff',
        '#2d53db',
        '#7d25cf',
        '#ff3a99',
        // 第三行
        '#ffd2d2',
        '#ffe5cf',
        '#fff9d0',
        '#d9f4d7',
        '#d0f3f3',
        '#cce6ff',
        '#d5ddf8',
        '#e5d3f5',
        '#ffd8e8',
        // 第四行
        '#ff9797',
        '#feb26e',
        '#ffec71',
        '#8ddd86',
        '#91e3e3',
        '#88c6ff',
        '#9dafee',
        '#c299e9',
        '#ffa3cf',
        // 第五行
        '#fe1f1f',
        '#fe902e',
        '#ffe333',
        '#5acf50',
        '#33caca',
        '#2294ff',
        '#496ae0',
        '#8e42d5',
        '#ff54a7',
        // 第六行
        '#de1b1b',
        '#de6f0c',
        '#dfc311',
        '#39ae2e',
        '#11aaaa',
        '#0063bf',
        '#223ea4',
        '#5f1c9b',
        '#9f2460',
        // 第七行
        '#7f1010',
        '#7f4007',
        '#80700a',
        '#21641b',
        '#0a6161',
        '#004280',
        '#172a6e',
        '#3f1368',
        '#801d4d'
    ];

    const createBackgroupColorEl = () => {
        let selectContainerEl = document.createElement('div') as HTMLDivElement;
        selectContainerEl.classList.add('sy-select-wrap');
        rootEl.appendChild(selectContainerEl);

        let labelEl = document.createElement('label') as HTMLLabelElement;
        labelEl.innerText = '选择了：';
        selectContainerEl.appendChild(labelEl);

        let selectEl = document.createElement('select') as HTMLSelectElement;
        selectEl.name = 'nums';
        selectEl.id = 'num_select';

        BACKGROUNDS.forEach(item => {
            let optionEl = document.createElement('option') as HTMLOptionElement;
            if (!item) {
                optionEl.value = '';
                optionEl.innerText = `无填充`;
            }
            else {
                optionEl.value = item;
                optionEl.innerHTML = `<span style="background-color: ${item};">${item}</span>`;
            }
            selectEl.appendChild(optionEl);
        })
        selectContainerEl.appendChild(selectEl);
    }

    const createSelectEl = () => {
        let selectContainerEl = document.createElement('div') as HTMLDivElement;
        selectContainerEl.classList.add('sy-select-wrap');
        rootEl.appendChild(selectContainerEl);

        let labelEl = document.createElement('label') as HTMLLabelElement;
        labelEl.innerText = '选择了：';
        selectContainerEl.appendChild(labelEl);

        let selectEl = document.createElement('select') as HTMLSelectElement;
        selectEl.name = 'nums';
        selectEl.id = 'num_select';

        const options = [
            '', '1', '2', '3', '4', '5'
        ];
        options.forEach(item => {
            let optionEl = document.createElement('option') as HTMLOptionElement;
            if (!item) {
                optionEl.value = '';
                optionEl.innerText = `无`;
            }
            else {
                optionEl.value = item;
                optionEl.innerText = `第${item}个数字`;
            }
            selectEl.appendChild(optionEl);
        })
        selectContainerEl.appendChild(selectEl);
    }

    createBackgroupColorEl();

}());