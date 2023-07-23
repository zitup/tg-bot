import { Bot } from "grammy";
import { MyContext } from "./session";
import { getKeyboard, getMessages } from "./utils";

export const setupCommands = (bot: Bot<MyContext>) => {
  bot.command('start', ctx => {
    const keyboard = getKeyboard(ctx);
    const defaultMessage = getMessages(ctx);

    ctx.reply(defaultMessage, {
        reply_markup: keyboard
    
  

  bot.on('message', async (ctx) => {
    const text = ctx.message.text;
    const {replyStage} = ctx.session;

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
            const keyboard = getKeyboard(ctx);
            const newMessage = getMessages(ctx);

            await ctx.reply(`Successfully added!\n\n${newMessage}`, { reply_markup: keyboard 
        } else {
            await ctx.reply('Invalid input. Please reply with your wallet address again.');
        }
    }
  
}
