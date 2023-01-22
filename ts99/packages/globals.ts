/**
 * @description 定义全局变量
 * Global Module
 */

// 该文件中定义的变量在项目中均可使用
let defaultAudio = {
  name: '青花瓷',
  author: '周杰伦'
}

const SpeedRatio = 1;

/**
 * 定义一个 module，这样你可以直接使用：
 * import { audioId } from 'audio';
 */
declare module 'audio' {
  export let audioId: string;
}

