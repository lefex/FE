const express = require('express')
const router = express.Router()

// 给该路由天剑中间件
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

// 首页路由
// http://localhost:3000/topic
router.get('/', (req, res) => {
    res.send('topic home');
});

// define the about route
// http://localhost:3000/topic/about
router.get('/about', (req, res) => {
    res.send('about');
});

module.exports = router