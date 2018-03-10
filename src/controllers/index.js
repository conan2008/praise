import router from 'koa-simple-router';
import index from './indexController';
import user from './userController';
import praise from './praiseController';

const mainRouter = {
    init(app) {
        app.use(router(_ => {
            _.get('/', index);
            _.post('/praise/add', praise.add);
            _.post('/user/add', user.add);
        }));
    }
}
    


export default mainRouter;

