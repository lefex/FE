const sub = (a, b) => {
    return a - b;
}
const ret = sub(10, 4);

const request = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('finish');
        }, 1000);
    });
};
request.then(res => {
    console.log(res);
});

const names = [];
if (!names.includes('suyan')) {
    names.push('suyan');
}
