import * as Koa from 'koa';
import * as logger from 'koa-logger';
import Config from './config';
import SampleService from './services/sample.service';

async function sayHello(ctx: any) {
  ctx.body = 'Hello World';
}

function main() {
  const sampleService = new SampleService();
  const app = new Koa();
  const conf = new Config();

  app.use(logger());
  app.use(sayHello);
  app.listen(conf.port);
  console.log(`App started at http://localhost:${conf.port}`);
}
main();
