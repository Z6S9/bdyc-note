// a very simple exercise
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  console.log('running req')
  const {url, method} = req
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
  } else {
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('404 没有')
  }  
})

.listen(3000, () => {
  console.log('Server is running at 3000')
})