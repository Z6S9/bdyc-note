#! node
// linux usr/bin/env
// npm link

// 定制命令行界面
const program = require('commander') // -> 策略模式
program.version(require('../package').version)
program.command('init <name>')
  .description('init project')
  .action(require('../lib/init.js'))
program.parse(process.argv)
