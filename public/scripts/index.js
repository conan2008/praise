import Thumb from './thumb';
import '../styles/praise.css';

xtag.register("x-arm", {
    content: `<div class="arm"></div>`
});

xtag.register("x-hand", {
    content: `<div class="hand">
                <div class="figs">
                    <div class="fig fig-linear"></div>
                    <div class="fig fig-linear"></div>
                    <div class="fig fig-linear"></div>
                    <div class="fig fig-linear"></div>
                </div>
            </div>`
});

xtag.register("x-thumb", {
    content: `<div class="thumb">
               <div class="thumb-top thumb-top-linear"></div>
               <div class="thumb-bottom thumb-bottom-linear"></div>
             </div>`
});

xtag.register('x-praise', {
    content: `<div class="praise">
                <div id="praise-animation">+1</div>
                <x-arm></x-arm>
                <x-hand></x-hand>
                <x-thumb></x-thumb>
             </div>`,
    lifecycle: {
        created: function() {
            $.extend({
                thumb: Thumb
            });
            this.callBack();
        }
    },
    methods: {
        callBack: function() {
            const thumb = new $.thumb(this, 0);
            thumb.bindClick();
        }
    }
});