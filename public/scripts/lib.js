const _ = (function(){
    let _ = function(){};
    _.thorttel = function(fn, wait) {
        var time;
        return function(...args) {
            if (!time) {
                time = setTimeout(() => time = null, wait);
                fn.apply(this, args);
            }
        }
    }

    return _;
})();

export default _;