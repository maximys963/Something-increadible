import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { RestAPI } from './rest';
import { Config } from './../config';

const conf = Config[process.env.MODE];

if (conf === undefined) {
  throw new Error('Environment variables "MODE" not specified!');
}

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.text({ type: 'text/plain'} ));
app.use('/api/v1', RestAPI);
app.use(express.static('./front/build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../front/build/index.html')));

mongoose
  .connect(conf.mongoUri, { useNewUrlParser: true })
  .then(() => {
    console.log('DB connected');
    app.listen(
      conf.port,
      () => console.log('Server is running...')
    );
  })
  .catch(console.error);

