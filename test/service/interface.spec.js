var requestSuper = require("supertest");
var app = require("../../app_koa");

function request() {
    return requestSuper(app.listen());
}
describe('接口测试', function() {
    it('首页', function(done) {
        request()
          .get('/')
          .expect(200)
          .end(function(err, res) {
              if(res.status == 200) return done(err);
              done();
          });
      });

    it('点赞加一', function(done) {
      request()
        .post('/praise/add')
        .send({addId: 1, praiseNum: 1})
        .expect(200)
        .end(function(err, res) {
            if(res.body.code == 1) return done(err);
            done();
        });
    });
  });








// describe("接口文档测试", function() {
//     it("首页返回值测试", function(done) {

//         request(app)
//             .get("/")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 if (res.body.data == "Hello World11") {
//                     done();
//                 } else {
//                     done(new Error("出错了！"));
//                 } 
//             });
//     })
// });