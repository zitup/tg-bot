import { Router } from "express";

const router = Router();

router.get("/", async (_, res) => {
  res.send('Hello World!');
});

router.get("/ping", async (_, res) => {
  res.send(`pong`);
});

export default router;
