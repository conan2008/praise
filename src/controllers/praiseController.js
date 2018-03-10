import praiseModel from '../models/praiseModel';

export default {
    get: async (ctx, next) => {
        await ctx.render('');
    },
    add: async (ctx, next) => {
        let praise = ctx.request.body;
        let response = await praiseModel.addOne(praise);
        ctx.body = response;
    }
}