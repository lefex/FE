import upload from './ajax';
import ajax from './ajax';

const noop = () => {};

export default class Uploader {
    constructor(options) {
        // 要上传的文件
        this.file = options.file;
        // 最大并发数
        this.concurrent = options.concurrent || 1;
        // 上传进度回调
        this.onProgress = options.onProgress || noop;
        // 上传成功回调
        this.onSuccess = options.onSuccess || noop;
        // 上传失败回调
        this.onError = options.onError || noop;
        // 请求头
        this.headers = options.headers || {};
        this.withCredentials = options.withCredentials || false;
        // 请求参数
        this.data = options.data || {};
        // 上传文件名
        this.filename = options.name || 'file';
        // 上传的服务端地址
        this.action = options.action;
        // 当前上传的任务
        this.uploadQueue = [];
        // 当前上传的位置
        this.uploadIndex = 0;
    }

    start(res) {
        const {chunks} = this.file;
        if (this.uploadIndex >= chunks.length) {
            // 已经上传完了
            console.log('upload finished!');
            this.onSuccess(res, this.file);
            return;
        }
        if (this.uploadQueue.length > this.concurrent) {
            // 不能超出最大并发数
            return;
        }

        for(let i = this.uploadIndex; i < chunks.length; i++) {
            const options = {
                headers: this.headers,
                withCredentials: this.withCredentials,
                file: chunks[i],
                data: this.data,
                filename: this.name,
                action: this.action,
                index: i,
                onProgress: e => {
                    console.log('on onProgress = ', options.index, e);
                    this.onProgress(e, this.file);
                },
                onSuccess: res => {
                    console.log('on onSuccess = ', options.index, res);
                    // 继续上传
                    this.start(res);
                },
                onError: err => {
                  console.log('on error = ', options.index, err);
                  this.onError(err, this.file);
                }
            };
            const req = upload(options);
            this.uploadQueue.push(req);
            if (this.uploadQueue === this.concurrent) {
                break;
            }
        }
    }
}