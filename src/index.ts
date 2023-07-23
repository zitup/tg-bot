import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot('');

const keyboard = new InlineKeyboard()
  .text('Add', 'add')
  .text('Switch', 'switch')
  .row()
  .text('Buy 0.01', 'buy_0_01')
  .text('Buy 0.05', 'buy_0_05');

bot.command('start', ctx => {
  ctx.reply('Hello, I am your bot. What would you like to do?', {
      reply_markup: keyboard
  


bot.callbackQuery('add', async ctx => {
  await ctx.answerCallbackQuery();
  await ctx.reply('You clicked Add!');


bot.callbackQuery('switch', async ctx => {
  await ctx.answerCallbackQuery();
  await ctx.reply('You clicked Switch!');


bot.callbackQuery('buy_0_01', async ctx => {
  await ctx.answerCallbackQuery();
  await ctx.reply('You clicked Buy 0.01!');


bot.callbackQuery('buy_0_05', async ctx => {
  await ctx.answerCallbackQuery();
  await ctx.reply('You clicked Buy 0.05!');


bot.start();
