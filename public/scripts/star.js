import {
    Star
} from './praise';
import '../styles/praise.css';

xtag.register('x-star', {
    content: "<div class='star' id='star' >" +
        "<div class='star1'></div>" +
        " </div>" +
        " <span class='hide' id='animation'>+1</span>",
    lifecycle: {
        created: function () {
            $.extend({
                star: Star
            });
            this.callBack();
        }
    },
    methods: {
        callBack: function () {
            const star = new $.star(this, 0);
            star.bindClick();
        }
    }
});