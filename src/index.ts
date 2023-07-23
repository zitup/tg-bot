import { Bot } from "grammy";




const bot = new Bot<MyContext>('');





bot.start();

bot.catch((err) => {
  console.log('Error:', err);

