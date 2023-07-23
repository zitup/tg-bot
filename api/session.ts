import { Bot, Context, SessionFlavor, session } from "grammy";
import { freeStorage } from "@grammyjs/storage-free";

export interface SessionData {
  isBuy: boolean;
  replyStage: number;
  name: string;
  address: string;
}

export type MyContext = Context & SessionFlavor<SessionData>;

export const setupSession = (bot: Bot<MyContext>) => {
  // 安装会话中间件，并定义会话初始值
  const initial = () => {
    return {
      isBuy: true,
      replyStage: 0,
      name: "",
      address: ""
    };
  }

  // 为每个用户存储数据
  const getSessionKey = (ctx: Context): string | undefined => {
    return ctx.from?.id.toString();
  }

  bot.use(session({
    initial,
    getSessionKey,
    storage: freeStorage<SessionData>(bot.token),
  }));
}
