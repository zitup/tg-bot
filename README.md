## Telegram Bot

This is a simple Telegram bot that can be used to send messages to a Telegram chat. It is written in Typescript and uses the [Grammy](https://grammy.dev/) framework. This bot uses Inline Menu, Session, Storage, Webhook, and other features of the Grammy framework.

## Usage

### Prerequisites

- Node.js
- npm
- A Telegram bot token (Find `@BotFather` in the Telegram app and create your own bot as instructed.)

### Installation

1. Clone this repository
2. Run `npm install` to install the dependencies

### Local Start

1. Copy the `.env.example` file to `.env` and fill in the required values
2. Run `npm run start` to start the bot
3. Send a message to the bot

### Local Testing

1. Install [vercel](https://vercel.com/download)
2. Run `vercel dev` to start the bot
3. Use [ngrok](https://ngrok.com/) to expose the local server to the internet
4. Set the ngrok URL as the webhook URL for the bot using `https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<HOST_URL>` (replace `<BOT_TOKEN>` and `<HOST_URL>` with the actual values)
5. Send a message to the bot to test it

### Deployment

1. Install [vercel](https://vercel.com/download)
2. Run `vercel` to deploy the bot
