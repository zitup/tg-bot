import { Bot } from "grammy";
import { generateKeyboard } from "./keyboard";

const bot = new Bot('');

const keyboard = generateKeyboard(bot);
bot.command('start', ctx => {
  ctx.reply('Hello, I am your bot. What would you like to do?', {
      reply_markup: keyboard
  


bot.start();
