import * as Koa from 'koa';
import Config from './config';
import SampleService from './services/sample.service';

const sampleService = new SampleService();
const app = new Koa();
const conf = new Config();

app.use( (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(conf.port);
console.log('App started');
