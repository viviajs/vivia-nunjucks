const nunjucks = require('nunjucks')

module.exports = config => {
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('template'))
  env.addGlobal('Object', Object)
  env.addGlobal('Array', Array)

  return context => {
    context.path = context.path.replace(/\.[^\.]+$/, '.html')
    context.content = context.content.toString()
    context.content = env.render(context.template, context)
  }
}
