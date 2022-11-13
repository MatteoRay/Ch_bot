const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib =  require('../modules/lib')

composer.hears('Москва', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('moscow'), Markup.keyboard(
        [
          Markup.button.callback('🛋 1590р'),
          Markup.button.callback('🛋 1990р'),
          Markup.button.callback('У меня вопрос')
        ]).resize())
      } catch (e) {
        console.error(e)
      }
    })



    composer.hears('Санкт-Петербург', async (ctx) => {
      try {
        await ctx.reply(ctx.i18n.t('spb'), Markup.keyboard(
            [
              Markup.button.callback('🛋 1590р'),
              Markup.button.callback('🛋 1990р'),
              Markup.button.callback('У меня вопрос')
            ]).resize())
          } catch (e) {
            console.error(e)
          }
    })
        
    composer.hears('У меня вопрос', async (ctx) => {
      try {
        await ctx.reply(ctx.i18n.t('vopros'), Markup.keyboard(
        [
          Markup.button.callback('Вернуться в главное меню'),
        ]).resize())
          } catch (e) {
            console.error(e)
          }
        })

module.exports = composer