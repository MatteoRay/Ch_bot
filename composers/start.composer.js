const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib =  require('../modules/lib')


composer.start(async (ctx) => {
  try {
    await ctx.replyWithHTML(ctx.i18n.t('start'), Markup.keyboard([
    [Markup.button.callback('Москва'), 
        Markup.button.callback('У меня вопрос')],
      [Markup.button.callback('Санкт-Петербург')],
    ]).resize())
  } catch (e) {
    console.error(e)
  }
})


module.exports = composer