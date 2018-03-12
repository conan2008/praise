//佳哥测试代码，运行失败了， 放着当着例子吧，说不定啥时候用到
var Mocha = require('mocha');
var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir:'../reports/mochawesome-report'
    }
  });
  mocha.addFile(
    './test/unit/index.spec.js'
);
mocha.run(function() {
    console.log('All done');
    process.exit();
});