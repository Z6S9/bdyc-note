const http = require('http')
const fs = require('fs')
http.createServer((request, res) => {
  console.log('a request')
  // request response 都是流
  // res.end('Hi Node') 
  // 不是一个好接口
  // res = '123'
  // res.body = '456'
  // 解构
  const {url, method, headers} = request
  if(url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        res.end('500 服务器挂了')
        return
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } 
  else if(url === '/users' && method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('新页面')
  }
  else if(method === 'GET' && headers.accept.indexOf('image/*') !== null) {
    // readFile把所有的图片加载到服务器内存中 内存占用过大
    // url 1.png
    fs.createReadStream('.' + url).pipe(res)
  }
  else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('404 没有')
  }
})

.listen(3001, () => {
  console.log('Server is running at 3001')
})

// 获取原型链 后续课程强相关
// function getPrototypeChain(o) {
//   const protoChain = []
//   while(o = Object.)
// }