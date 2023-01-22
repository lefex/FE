/**
 * 给 lib.d.ts 添加扩展
 * declare module "some-library-you-dont-care-to-get-defs-for";
 */

// 定义全局遍历
declare var __DEV__: boolean


// 把String中的substring废弃
declare interface String {
  /**
   * @deprecated Please use String.prototype.slice instead of String.prototype.substring in the repository.
   */
  substring(start: number, end?: number): string
}

// 给开源库添加类型
declare module 'file-saver' {
  export function saveAs(blob: any, name: any): void
}