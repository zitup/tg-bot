import { Bot, InlineKeyboard } from "grammy";
import state from "./state";

export const setupCommands = (bot: Bot) => {
  bot.command('start', ctx => {
    const defaultKeyboard = new InlineKeyboard()
    .text('Add', 'add')
    .text('Buy ↔️ Sell', 'switch')
    .row()
    .text('Buy 0.01', 'action_0_01')
    .text('Buy 0.05', 'action_0_05');

    ctx.reply('Hello, I am your bot. What would you like to do?', {
        reply_markup: defaultKeyboard
    
  

  bot.on('message', async (ctx) => {
    const text = ctx.message.text;
    if (state.replyStage === 1) {
        if (text && /^[a-zA-Z]{1,8}$/g.test(text)) {
            state.replyStage = 2;
            await ctx.reply('Successful! Now please reply with your wallet address.');
        } else {
            await ctx.reply('Invalid input. Please reply with a wallet name (up to 8 characters).');
        }
    } else if (state.replyStage === 2) {
        if (text && /^0x[a-fA-F0-9]{40}$/g.test(text)) {
            state.replyStage = 0;
            await ctx.reply('Successful!');
        } else {
            await ctx.reply('Invalid input. Please reply with your wallet address again.');
        }
    }
  
}
