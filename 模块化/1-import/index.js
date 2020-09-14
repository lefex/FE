// // 导入默认的模块
// import defaultExport from "module-name";
// // 全部导入，并重命名
// import * as name from "module-name";
// // 导入模块中的某一个
// import { export1 } from "module-name";
// // 导入模块中的某一个并重命名
// import { export1 as alias1 } from "module-name";
// // 导出模块中的两个
// import { export1 , export2 } from "module-name";
// // 导入模块中的默认值和其他值
// import myDefault, {foo, bar} from '/modules/my-module.js';

// import { foo , bar } from "module-name/path/to/specific/un-exported/file";
// import { export1 , export2 as alias2 , [...] } from "module-name";
// import defaultExport, { export1 [ , [...] ] } from "module-name";
// import defaultExport, * as name from "module-name";
// // 运行模块中的代码，但不导入任何值
// import "module-name";

import {
    getUserName as uname,
    Suyan,
    age,
    name,
    curTime,
    dAge,
    join
} from './utils';
import welcome from './utils.js';

// 导入整个模块
import * as utils from './utils.js';
console.log(utils);

console.log('getUserName -----');
console.log(uname());

console.log('Suyan -----');
console.log(new Suyan());

console.log('age -----');
console.log(age);

console.log('name -----');
console.log(name);

console.log('curTime -----');
console.log(curTime());

console.log('dAge -----');
console.log(dAge);

console.log('join -----');
console.log(join('suyan', ' learn FE'));

console.log('welcome -----');
console.log(welcome());