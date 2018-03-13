
export default {
    index: async (ctx, next) => {
        await ctx.render('thumbIndex');
    },
    thumb: async (ctx, next) => {
        if (ctx.request.header['x-pjax']) {
            ctx.body = "<x-thumb></x-thumb>";
        } else {
            ctx.body = await ctx.render('thumbIndex');
        }
    },
    star: async (ctx, next) => {
        await ctx.render('starIndex');
        if(ctx.request.header['x-pjax']) {
            ctx.body = "<x-star></x-star>"
        } else {
            ctx.body = await ctx.render('starIndex');
        }
    },

}