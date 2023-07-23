import { Bot, InlineKeyboard } from "grammy";

let isBuy = true;

export const setupCallbacks = (bot: Bot) => {
  bot.callbackQuery('add', async ctx => {
    await ctx.answerCallbackQuery();
    await ctx.reply('You clicked Add!');
  
  
  bot.callbackQuery('switch', async ctx => {
    await ctx.answerCallbackQuery();

    // 更新状态变量
    isBuy = !isBuy;

    // 更新inline键盘
    const newKeyboard = new InlineKeyboard()
        .text('Add', 'add')
        .text('Buy ↔️ Sell', 'switch')
        .row()
        .text(isBuy ? 'Buy 0.01' : 'Sell 0.01', 'action_0_01')
        .text(isBuy ? 'Buy 0.05' : 'Sell 0.05', 'action_0_05');
    await ctx.editMessageReplyMarkup({
        reply_markup: newKeyboard
    
  

  bot.callbackQuery('action_0_01', async ctx => {
      await ctx.answerCallbackQuery();
      await ctx.reply(`You clicked ${isBuy ? 'Buy' : 'Sell'} 0.01!`);
  

  bot.callbackQuery('action_0_05', async ctx => {
      await ctx.answerCallbackQuery();
      await ctx.reply(`You clicked ${isBuy ? 'Buy' : 'Sell'} 0.05!`);
  
}
