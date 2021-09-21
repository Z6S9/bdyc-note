// 自动写接口

const Koa = require('koa')
const app = new Koa()

// 注册路由
const config = require('./config')
const {loadModel} = require('./framework/loader.js')
loadModel(config)(app)

app.listen(3003, () => {
  console.log('Server is running at 3003')
})