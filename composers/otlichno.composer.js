const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')



composer.hears('🛋 1590р', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('otlichno'), Markup.keyboard(
      [
        Markup.button.callback('Вернуться в главное меню'),
      ]).resize())
        } catch (e) {
          console.error(e)
        }
      })

composer.hears('🛋 1990р', async (ctx) => {
  try {
    await ctx.reply(ctx.i18n.t('otlichno'), Markup.keyboard(
      [
        Markup.button.callback('Вернуться в главное меню'),
      ]).resize())
        } catch (e) {
          console.error(e)
        }
      })
    

module.exports = composer