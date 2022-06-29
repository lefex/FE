import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    plugins: [
        vue(),
    ],
    server: {
        // 设置访问的 ip 地址
        host: '0.0.0.0',
        // 设置访问的端口
        port: 7000,
        // 如果端口被占用直接退出
        strictPort: true,
        // 配置首次打开的页面
        open: '/pages/article/index.html'
    }
});
