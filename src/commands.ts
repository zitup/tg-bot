import { Bot, InlineKeyboard } from "grammy";
import { MyContext } from "./session";

export const setupCommands = (bot: Bot<MyContext>) => {
  bot.command('start', ctx => {
    const defaultKeyboard = new InlineKeyboard()
      .text('Add', 'add')
      .text('Buy ↔️ Sell', 'switch')
      .row()
      .text('Buy 0.01', 'action_0_01')
      .text('Buy 0.05', 'action_0_05');
    let defaultMessage = 'Hello, I am your bot. What would you like to do?';

    const {name, address} = ctx.session;

    if (name && address) {
      defaultKeyboard.row()
        .text(name, 'custom_1')
        .text(address, 'custom_2');
      
      defaultMessage += `\n\nYour wallet name: ${name}\nAddress: ${address}`;
    }

    ctx.reply(defaultMessage, {
        reply_markup: defaultKeyboard
    
  

  bot.on('message', async (ctx) => {
    const text = ctx.message.text;
    const {isBuy, replyStage, name, address} = ctx.session;

    if (replyStage === 1) {
        if (text && /^[a-zA-Z]{1,8}$/g.test(text)) {
            ctx.session.name = text;
            ctx.session.replyStage = 2;
            await ctx.reply('Successful! Now please reply with your wallet address.');
        } else {
            await ctx.reply('Invalid input. Please reply with a wallet name (up to 8 characters).');
        }
    } else if (replyStage === 2) {
        if (text && /^0x[a-fA-F0-9]{40}$/g.test(text)) {
            ctx.session.address = text;
            ctx.session.replyStage = 0;
            const keyboard = new InlineKeyboard()
                .text('Add', 'add')
                .text('Switch', 'switch')
                .row()
                .text(isBuy ? 'Buy 0.01' : 'Sell 0.01', 'action_0_01')
                .text(isBuy ? 'Buy 0.05' : 'Sell 0.05', 'action_0_05')
                .row()
                .text(name, 'custom_1')
                .text(text, 'custom_2');

            const newMessage = `Hello, I am your bot. What would you like to do?\n\nYour wallet name: ${name}\nAddress: ${text}`;
            await ctx.reply(newMessage, { reply_markup: keyboard 
        } else {
            await ctx.reply('Invalid input. Please reply with your wallet address again.');
        }
    }
  
}
