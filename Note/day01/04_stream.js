// copy image: 1.png => 2.png
// 文件流 提高性能
const fs = require('fs')

// create stream
const rs = fs.createReadStream('./1.png')
const ws = fs.createWrite('./2.png')
rs.pipe(ws)