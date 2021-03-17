<template>
  <h3>请选择一个文件：</h3>
  <input type="file" @change="handleFileChange" multiple/>
</template>

<script>
import Uploader from './upload';




// 分片上传的大小
const FILE_PIECE_SIZE = 1024 * 400;
const __DEBUG__ = true;

export default {
  name: 'webworker',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    if (!window.Worker) {
      console.log('当前浏览器不支持web worker');
      return;
    }
    this.worker = new Worker({
      onmessage: function (e) {
        console.log('receive worker message: ', e);
      },
      onerror: function (e) {
        console.log('receive worker error message: ', e);
      }
    });
    this.worker.postMessage(['start']);
    console.log(this.worker);

    // 当 worker 不再使用时回收掉
    this.worker.terminate();
  },
  methods: {
    // input 文件选择事件监听
    handleFileChange(e) {
      // 选择的文件
      const files = e.target.files;
      // 转换成数组
      let postFiles = Array.prototype.slice.call(files);
      postFiles = this.splitFiles(postFiles);
      this.uploadFiles(postFiles);
    },

    // 对文件进行拆分
    splitFiles(files) {
      console.log('begin split files = ', files);
      files.map(rawFile => {
        console.log('拆分文件');
        rawFile.chunks = this.splitSignalFile(rawFile);
        return rawFile;
      });
      console.log('end split files = ', files);
      return files;
    },

    // 拆分单个文件
    splitSignalFile(file, pieceSize = FILE_PIECE_SIZE) {
      console.log('split signal file', file);
      // 最终拆分的文件
      const chunks = [];
      // 文件总大小
      const totalSize = file.size;
      console.log('file total size = ', totalSize);
      const totalPieces = Math.floor(totalSize / pieceSize);
      const lastPieceSize = totalSize - totalPieces * pieceSize;
      console.log('total piece size = ', totalPieces);
      for(let i = 0; i < totalPieces; i++) {
        console.log(`start = ${i * pieceSize}, end = ${(i + 1) * pieceSize}`);
        const subFile = file.slice(i * pieceSize, (i + 1) * pieceSize);
        chunks.push(subFile);
        console.log(subFile);
      }
      if (lastPieceSize > 0) {
        const subFile = file.slice(totalPieces * pieceSize);
        chunks.push(subFile);
        console.log(subFile);
      }
      return chunks;
    },

    uploadFiles(files) {
      this.uploadSignalFile(files[0]);
    },

    uploadSignalFile(file) {
      const uploader = new Uploader({
        file: file,
        action: 'https://jsonplaceholder.typicode.com/posts/'
      });
      uploader.start();
    }
  }
}
</script>
