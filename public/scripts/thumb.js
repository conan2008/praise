import _ from './lib';
import add from './util';

class PraiseButton {
    constructor(element, count) {
        this.element = element;
        this.count = count;
    }

    bindClick() {
        this.element.onclick = _.thorttel(this.addOne,1000);
    }

    addOne() {
        $("#praise-animation").addClass("praise-animation");
        if (this.count < 10) {
            $(".praise").css("-webkit-filter", "grayscale(0%)");
            this.count = add(this.count);
        } else {
            $(".praise").css("-webkit-filter", "grayscale(100%)");
            this.count = 0;
        }

        axios.post('/praise/add', {
                addId: 1,
                praiseNum: this.count
            })
            .then((response) => {
                console.log(this.count);
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

class Thumb extends PraiseButton {

    constructor(element, count) {
        super(element, count)
    }

}


export default Thumb
