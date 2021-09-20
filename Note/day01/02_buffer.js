// 分配 10 字节的内存缓存空间
const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2) // <Buffer 61>
// 返回十六进制 ASCII 码

const buf3 = Buffer.from('中')
console.log(buf3) // <Buffer e4 b8 ad>
// utf-8

// 连接两个 buffer
const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString()) // <Buffer 61 e4 b8 ad> a中

