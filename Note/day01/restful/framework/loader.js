const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

// 加载器（文件夹，回调）
function load(dir, cb) {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  files.forEach(filename => {
    filename = filename.replace(url + '/' + filename)
    cb(filename, file)
  })
}

const loadModel = config => app => {
  mongoose.connect(config.db.url, conf.db.options)
  const conn = mongoose.connection
  conn.on('err', () => console.error('数据库加载失败'))
  app.$model = {}
  load('../model', (filename, {schema}) => {
    console.log('load model: ' + filename, schema)
    app.$model[filename] = mongoose.model(filename, schema)
    
  })
}