import { Bot, InlineKeyboard } from "grammy";

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
    
  
}
