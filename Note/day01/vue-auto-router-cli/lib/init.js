// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear') // 清屏
const chalk = require('chalk') // 添加颜色
const log = content => console.log(chalk.rgb(255,0,0).bold(content))
const {clone} = require('./download')
const open = require('open')
// const {spawn} = require('child_process')

// ？？？
const spawn = async(...args) => {
  const {spawn} = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args) // 得到命令流
    // 输出流 子进程合并到主进程
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve() // 状态码
    })
  })
}

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
  // await clone('github:su37josephxia/vue-template', name)
  
  // 下载依赖 子进程
  log('安装依赖')
  try {
      await spawn('npm', ['install', 'lodash'], { cwd: `./${name}` })
      log(chalk.green(`安装依赖完成`))
    } catch (err) {
      console.log(err)
      log(chalk.green(`安装依赖失败`))
    }
  
  // 没有进度条 可发挥
  log(chalk.green(`安装完成`))
  
  open('http://localhost:3002')
  await spawn(process.platform === "win32" ? "npm.cmd" : "npm",['install'],{cwd:`./${name}`});
  // 进入对应目录
}
