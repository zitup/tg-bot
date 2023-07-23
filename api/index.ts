import 'dotenv/config';
import express, { Request, Response } from "express";
import { Bot, webhookCallback } from "grammy";
import { setupCommands } from "./commands";
import { setupCallbacks } from "./callbacks";
import { MyContext, setupSession } from "./session";
import routes from './routes';

const bot = new Bot<MyContext>(process.env.BOT_TOKEN!);

setupSession(bot);
setupCommands(bot);
setupCallbacks(bot);

const app = express();
app.use(express.json());
app.use(routes);
app.use(webhookCallback(bot, "express"));
app.use((err: Error, _req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
