import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as _ from 'koa-route';
import Config from './config';
import PetService from './services/pet.service';

async function sayHello(ctx: any) {
  ctx.body = 'Hello World';
}

function main() {
  const petService = new PetService();
  const app = new Koa();
  const conf = new Config();

  app.use(logger());
  app.use(_.get('/hello', sayHello));
  app.use(_.get('/pets', petService.list));
  app.use(_.get('/pets/:name', petService.show));
  app.listen(conf.port);
  console.log(`App started at http://localhost:${conf.port}`);
}
main();
