import UriConfig from '../config/uriConfig';
import rp from 'request-promise';

export default {
    addOne: function(praise) {
        var options = {
            method: 'POST',
            uri: UriConfig.get('addOnePraise'),
            body: praise,
            json: true
        }
    
        return rp(options)
                .then(function (data) {
                   return data;
                })
                .catch(function (err) {
                    console.log("后端服务连接超时");
                });
    }
}