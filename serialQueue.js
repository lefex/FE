// 需要同步接口获取（这里模拟接口）
const signTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 50);
    });
}

// 本地控制的，比如一天只弹一次
const everyDayTask = () => new Promise.resolve('every_day');

// 需要同步接口获取（这里模拟接口）
const wangpanTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 100);
    });
}

// 本地控制的，比如一天只弹一次
const dayTask = () => {
    return 'day';
}

const dayTask = () => new Promise.resolve('day');

function run() {
    everyDayTask.then(taskId => {
        if (taskId) {
            reject();
        }
        else {
            return signTask();
        }
    }).then(taskId => {
        if (taskId) {

        }
        else {
            return wangpanTask();
        }
    }).then(taskId => {
        if (taskId) {

        }
        else {
            return dayTask();
        }
    }).then(taskId => {

    });
}


/**
 *
 * @param {任务} tasks，同步函数 | 异步函数 | 值 | Promise
 * @returns Promise
 */
function serial(tasks, options) {
    if (tasks && !Array.isArray(tasks)) {
        throw Error('arguments must be array');
    }
    return new Promise((resolve, reject) => {
        let index = 0;
        let curPromise = null;

        // check is promise
        const isPromise = task => !!(task && typeof task === 'object' && task.then);

        // find next promise to deal with
        const promiseAtIndex = index => {
            const next = tasks[index];
            if (next) {
                let promise = typeof next === 'function' ? next() : next;
                if (!isPromise(promise)) {
                    promise = Promise.resolve(promise);
                }
                return promise;
            }
        };

        function loop(task) {
            if (!task) {
                reject('no resolve task');
                return;
            }

            const loopNext = () => {
                index += 1;
                curPromise = promiseAtIndex(index);
                loop(curPromise);
            };

            // task is promise
            if (!curPromise) {
                curPromise = task;
            }
            curPromise.then(res => res ? resolve(res) : loopNext(), () => loopNext());
        }
        // begin run first task
        loop(promiseAtIndex(index));
    });
}

export default function chuanxing() {
    console.log('begin -----');

const tasks = [everyDayTask, signTask, wangpanTask, dayTask];
serial(tasks).then(res => {
    console.log('task finish = ', res);
}, error => {
    console.log('task error = ', error);
});
}