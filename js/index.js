// Vue
const root = new Vue(
    {
        el: "#root",
        data: {
            bird: {
                index: 0,
                src: "images/" + this.bird.filesName[0] + ".jpg",
                name: "Bird" + this.bird.filesName[0],
                filesName: ['01', '02', '03', '04', '05']
            },
        },
        methods: {
            next: function () {
                this.bird.index++;
                if (this.bird.index >= this.bird.filesName.length) this.bird.index = 0;
                this.bird.src = "images/" + this.bird.filesName[this.bird.index] + ".jpg";
                this.bird.name = "Bird " + (this.bird.index + 1);
            },
            prev: function () {
                this.bird.index--;
                if (this.bird.index < 0) this.bird.index = this.bird.filesName.length - 1;
                this.bird.src = "images/" + this.bird.filesName[this.bird.index] + ".jpg";
                this.bird.name = "Bird " + (this.bird.index + 1);
            }
        },
    }
);