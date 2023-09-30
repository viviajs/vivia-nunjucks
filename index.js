const nunjucks = require('nunjucks')

module.exports = config => {
  return context => {
    context.path = context.path.replace(/\.[^\.]+$/, '.html')
    context.content = context.content.toString()
    context.content = nunjucks.render(context.template, context)
  }
}
