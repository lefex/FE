import {getPosDes} from './utils/element-pos';

let midContainer = document.getElementById('content-container') as HTMLDivElement;

midContainer.addEventListener('scroll', () => {
    console.log('midContainer scrollTop = ', midContainer.scrollTop);
});

console.log(' midContainer = ', midContainer);

const addPos = (elementSel: string, resultSel: string) => {
    let line1El = document.querySelector(elementSel) as HTMLDivElement;
    line1El.addEventListener('click', () => {
        let rect = line1El.getBoundingClientRect();
        midContainer.scrollTo({
            left: 0,
            top: rect.top
        });
    });
    let clintRect = line1El.getBoundingClientRect();
    let rect1El = document.querySelector(resultSel) as HTMLDivElement;
    rect1El.innerText = `${getPosDes(rect1El).join('   ')}\n${JSON.stringify(clintRect)}`;
}

const updatePos = (elementSel: string) => {
    let line1El = document.querySelector(elementSel) as HTMLDivElement;
    let clintRect = line1El.getBoundingClientRect();
    return `${elementSel}: ${JSON.stringify(clintRect)}`;
}

addPos('.line1', '.rect1');
addPos('.line2', '.rect2');
addPos('.line3', '.rect3');

const updateLinesPos = () => {
    let poses = [];
    poses.push(updatePos('.line1'));
    poses.push(updatePos('.line2'));
    poses.push(updatePos('.line3'));

    let rect1El = document.querySelector('.outer-content') as HTMLBodyElement;
    rect1El.innerText = `${poses.join('\n')}`;
};
updateLinesPos();

midContainer.addEventListener('scroll', () => {
    updateLinesPos();
});