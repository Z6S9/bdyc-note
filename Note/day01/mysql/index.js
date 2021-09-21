(async () => {
  const mysql = require('mysql2/promise')
  
  // 设置连接配置
  const connect = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bytedanceyc'
  }
  const connnection = await mysql.createConnection(connect)
  
  let ret = await connection.execute(`CREATE TABLIE IF NOE EXISTS test (
  )`)
  console.log('create', ret)
  
  ret = await connection.execute(`INSERT INTO test(message) VALUES(?)`)
  console.log('insert', ret)
  
  const
})

