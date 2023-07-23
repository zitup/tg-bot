import { InlineKeyboard } from "grammy";
import { MyContext } from "./session";

export const getMessages = (ctx: MyContext) => {
  let defaultMessage = 'Hello, I am your bot. What would you like to do?';

  const {name, address} = ctx.session;
  if (name && address) {    
    defaultMessage += `\n\nYour wallet name: ${name}\nAddress: ${address}`;
  }
  return defaultMessage;
}

export const getKeyboard = (ctx: MyContext) => {
  const {isBuy, name, address} = ctx.session;

  const keyboard = new InlineKeyboard()
    .text('Add', 'add')
    .text('Buy ↔️ Sell', 'switch')
    .row()
    .text(isBuy ? 'Buy 0.01' : 'Sell 0.01', 'action_0_01')
    .text(isBuy ? 'Buy 0.05' : 'Sell 0.05', 'action_0_05');

  if (name && address) {
    keyboard.row()
      .text(name, 'custom_1')
      .text(address, 'custom_2');
  }

  return keyboard;
}
