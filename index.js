import express from 'express';

const SUCCESS_STATUS_CODE = 200;

const app = express();
const router = express.Router();

router.use((req, res, next) => {
  next();
});

app.listen(3000, () => true);

app.get('/', (req, res) => {
  res.status(SUCCESS_STATUS_CODE).send('Why have I never learned to develop correctly');
});
