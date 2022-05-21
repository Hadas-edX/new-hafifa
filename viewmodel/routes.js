import express from 'express';
import { readAllIdeas } from './read';
import { writeIdea } from './write';

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

router.post('/writeIdea', async (req, res) => {
  const response = await writeIdea(req.body);
  res.status(response.status).send(response.message);
});

export default router;
