import ejs from 'ejs'
import fs from 'fs'

// 问题驱动：每次创建项目的步骤重复
// 1. 思考手动创建的时候的步骤
// 2. 怎么将过程用代码表示 - 动作翻译为代码

// 开发思想 - 小步骤的开发思想
export function createIndexTemplate(config) {
  const template = fs.readFileSync("./template/index.ejs", "urf-8")
  
  const code = ejs.render(template, {
    router: config.middleware.router,
  })
  console.log(code)
  
  return code
}