import { Bot } from "grammy";
import { MyContext } from "./session";
import { getKeyboard } from "./utils";

export const setupCallbacks = (bot: Bot<MyContext>) => {
  bot.callbackQuery('add', async ctx => {
    await ctx.answerCallbackQuery();
    ctx.session.replyStage = 1;
    await ctx.reply('Please reply with a wallet name (up to 8 characters).');
  
  
  bot.callbackQuery('switch', async ctx => {
    await ctx.answerCallbackQuery();

    // 更新状态变量
    const { isBuy } = ctx.session;
    ctx.session.isBuy = !isBuy;

    // 更新inline键盘
    const newKeyboard = getKeyboard(ctx);
    await ctx.editMessageReplyMarkup({
        reply_markup: newKeyboard
    
  

  bot.callbackQuery('action_0_01', async ctx => {
      await ctx.answerCallbackQuery();
      await ctx.reply(`You clicked ${ctx.session.isBuy ? 'Buy' : 'Sell'} 0.01!`);
  

  bot.callbackQuery('action_0_05', async ctx => {
      await ctx.answerCallbackQuery();
      await ctx.reply(`You clicked ${ctx.session.isBuy ? 'Buy' : 'Sell'} 0.05!`);
  

  // 响应未知回调查询
  bot.on("callback_query:data", async (ctx) => {
    await ctx.answerCallbackQuery();
  
}
