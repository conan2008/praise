// var rp = require('request-promise');s
import rp from 'request-promise';

// module.exports = {
export default {
    get: async (ctx, next) => {
        var userList = await getData(ctx.query.id);
        // ctx.body = await ctx.render('user', user);
        ctx.body = userList
    },
    add: async (ctx, next) => {
        var response = await addData(ctx.request.body);
        ctx.body = response
    }
}

var getData = function(id) {
    var options = {
        method: 'Get',
        uri: 'http://localhost:8088/user/get?userId='+id,
        json: true
    }

    return rp(options)
            .then(function (data) {
               return data;
            })
            .catch(function (err) {
                // Crawling failed...
            });
}

var addData = function(user) {
    var options = {
        method: 'POST',
        uri: 'http://localhost:8088/user/add',
        body: user,
        json: true
    }

    return rp(options)
            .then(function (data) {
               return data;
            })
            .catch(function (err) {
                // Crawling failed...
            });
}