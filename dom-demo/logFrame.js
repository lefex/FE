var logBySelector = function (id) {
    let elm = document.querySelector(id);
    logFrame(elm);
    elm.onscroll = function () {
        logFrame(elm);
        if (elm.scrollHeight - elm.scrollTop === elm.clientHeight) {
            console.log('到底了');
        }
        else if (elm.scrollTop === 0) {
            console.log('到顶了');
        }
    }
};

var logFrame = function (elm) {
    console.log(elm, '-------------------------');
    console.log(elm.getBoundingClientRect());
    for (key in elm) {
        let whiteList = [
            'offsetTop', 'offsetLeft', 'offsetWidth', 'offsetHeight',
            'scrollTop', 'scrollLeft', 'scrollWidth', 'scrollHeight',
            'clientTop', 'clientLeft', 'clientWidth', 'clientHeight',
            'offsetParent'
        ];
        if (whiteList.indexOf(key) !== -1) {
            console.log(key, ' = ', elm[key]);
        }
    }
}