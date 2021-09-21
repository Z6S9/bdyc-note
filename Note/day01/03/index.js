const http = require('http')

const session = {}

 http.createServer((req, res) => {
   console.log('cookie', req.headers.cookie)
   
   
   res.setHeader('Set-Cookie', '123')
   res.end('hello')
 })
 .listen(3004, () => {
   console.log('Server is running')
 })