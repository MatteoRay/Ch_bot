const {Telegraf, Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')
const bot = new Telegraf(process.env.BOT_TOKEN);

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
