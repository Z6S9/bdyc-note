// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear') // 清屏
const chalk = require('chalk') // 添加颜色
const log = content => console.log(chalk.rgb(255,0,0).bold.bgRgb(255,255,255)(content))
const {clone} = require('./download')

module.exports = async name => {
  clear()
  const data = await figlet.text('WINTER YYDS', {
    font: 'Ghost',
    // horizontalLayout: 'default',
    // verticalLayout: 'default',
    // width: 80,
    whitespaceBreak: true
  }, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    log(data);
  })
  // 项目模板
  log('!!创建项目!!' + name)
  await clone('github:su37josephxia/vue-template', name)
}
