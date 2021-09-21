// esm
import fs from 'fs'
import {createIndexTemplate} from './index_template.js'

// 用户可传入对应数据
// input
// process
// output

// cli -> gui

const  inputConfig = {
  middleware: {
    router: true,
  }
}

// 核心：自动化思维
// 1. 创建文件夹（项目名）
fs.mkdirSync(getRootPath())

// 2. 创建 index.js 
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate())

// 3. 创建 package.json
fs.writeFileSync(getRootPath() + '/package.json', 'package')

// 4. 安装依赖
// TODO package -> npm install

function getRootPath() {
  
}