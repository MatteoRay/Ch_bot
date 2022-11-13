const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib =  require('../modules/lib')


composer.start(async (ctx) => {
  try {
    await ctx.replyWithHTML(ctx.i18n.t('start'), Markup.keyboard([
      [Markup.button.callback('Москва'),
      Markup.button.callback('Санкт-Петербург')],
      [Markup.button.callback('У меня вопрос')]],
    ).resize())
  }
  catch (e) {
    console.error('error in Help command', e)
  }
})


module.exports = composer