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

    let defaultMessage = 'Hello, I am your bot. What would you like to do?';

    if (state.name && state.address) {
      defaultKeyboard.row()
        .text(state.name, 'custom_1')
        .text(state.address, 'custom_2');
      
      defaultMessage += `\n\nYour wallet name: ${state.name}\nAddress: ${state.address}`;
    }

    ctx.reply(defaultMessage, {
        reply_markup: defaultKeyboard
    
  

  bot.on('message', async (ctx) => {
    const text = ctx.message.text;
    if (state.replyStage === 1) {
        if (text && /^[a-zA-Z]{1,8}$/g.test(text)) {
            state.name = text;
            state.replyStage = 2;
            await ctx.reply('Successful! Now please reply with your wallet address.');
        } else {
            await ctx.reply('Invalid input. Please reply with a wallet name (up to 8 characters).');
        }
    } else if (state.replyStage === 2) {
        if (text && /^0x[a-fA-F0-9]{40}$/g.test(text)) {
            state.address = text;
            state.replyStage = 0;
            const keyboard = new InlineKeyboard()
                .text('Add', 'add')
                .text('Switch', 'switch')
                .row()
                .text(state.isBuy ? 'Buy 0.01' : 'Sell 0.01', 'action_0_01')
                .text(state.isBuy ? 'Buy 0.05' : 'Sell 0.05', 'action_0_05')
                .row()
                .text(state.name, 'custom_1')
                .text(state.address, 'custom_2');

            const newMessage = `Hello, I am your bot. What would you like to do?\n\nYour wallet name: ${state.name}\nAddress: ${state.address}`;
            await ctx.reply(newMessage, { reply_markup: keyboard 
        } else {
            await ctx.reply('Invalid input. Please reply with your wallet address again.');
        }
    }
  
}
