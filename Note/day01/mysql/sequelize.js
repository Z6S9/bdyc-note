(async () => {
  const Sequelize = ('sequelize')
  
  const sequelize = new Sequelize('bdyc', 'root', '123456', {
    host: 'localhost',
    dialect: '',
    operatorsAliases: false
  })
  
  // 定义模型
  const Fruit = sequelize.define("Fruit", {
    name: {type: Sequelize.STRING(20), allowNull: false },
    price: {type: Sequelize.FLOAT, allowNull: false },
    stock: {type: Sequelize.INTERGER, defaultValue: 0}
  })
  
  let ret = await Fruit.async()
  
  ret = await Fruit.create({
    name: '香蕉',
    price: 3.5,
  })
})()