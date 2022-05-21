import express from 'express';
import bodyParser from 'body-parser';
import router from './viewmodel/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => true);

app.use('/', router);
