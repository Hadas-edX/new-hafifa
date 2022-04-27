import express from 'express';
import router from './viewmodel/routes';

const app = express();

app.listen(3000, () => true);

app.use('/', router);
