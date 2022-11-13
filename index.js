const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()
const path = require('path')
const bot = new Telegraf(process.env.BOT_TOKEN);

const TelegrafI18n = require('telegraf-i18n')
const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, 'locales')
})
bot.use(i18n.middleware())


bot.use(require('./composers/start.composer'))

bot.use(require('./composers/menu.composer'))

bot.use(require('./composers/otlichno.composer'))

bot.use(require('./composers/back.composer'))

bot.use(require('./composers/vopros.composer'))

bot.use(require('./composers/operator.composer'))



bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));