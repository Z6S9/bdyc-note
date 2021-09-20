// const fs = require('fs');

// 同步读取 二进制文件 图片 视频
// const data = fs.readFileSync('.')
// console.log('data', data.toString('utf-8'))

// 异步IO
// const data = readFile('.', (err, data) => {
//   if(err) throw err;
//   console.log(data.toString())
// })


// promises api

(async () => {
  const fs = require('fs')
  const {promisify} = require('util')
  const readFile = promisify{fs.readFile}
  const data = await readFile('.')
  console.log(data.toString())
})