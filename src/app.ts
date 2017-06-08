import * as Koa from 'koa';
import SampleService from './services/sample.service';

const sampleService = new SampleService();
const app = new Koa();

app.use( (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('App started');
