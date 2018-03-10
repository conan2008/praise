import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import convert from 'koa-convert';
import render from 'koa-swig';
import bodyparser from 'koa-bodyparser';
import co from 'co';
import Config from './config/config';
import mainRouter from './controllers/index';

const app = new Koa();

mainRouter.init(app);

app.use(serve(Config.get('staticDir')));
app.use(bodyparser());

app.context.render = co.wrap(render({
    root: Config.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));

app.listen(Config.get('port'));

module.exports = app;