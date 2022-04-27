import express from 'express';
import { readAllIdeas } from './read';

const SUCCESS_STATUS_CODE = 200;

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.status(SUCCESS_STATUS_CODE).send('Basic page');
});

router.get('/readAllIdeas', async (req, res) => {
  res.status(SUCCESS_STATUS_CODE).send(await readAllIdeas());
});

export default router;
