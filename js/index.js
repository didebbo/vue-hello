// Vue
const root = new Vue(
    {
        el: "#root",
        data: {
            bird: {
                index: 0,
                filesName: ['01', '02', '03', '04', '05'],
                name: "Bird",
                src: "images/",
            },
        },
        created: function () {
            this.bird.name = "Bird " + this.bird.filesName[0];
            this.bird.src = "images/" + this.bird.filesName[0] + ".jpg";
        },
        methods: {
            next: function () {
                this.bird.index++;
                if (this.bird.index >= this.bird.filesName.length) this.bird.index = 0;
                this.bird.name = "Bird " + this.bird.filesName[this.bird.index];
                this.bird.src = "images/" + this.bird.filesName[this.bird.index] + ".jpg";
            },
            prev: function () {
                this.bird.index--;
                if (this.bird.index < 0) this.bird.index = this.bird.filesName.length - 1;
                this.bird.name = "Bird " + this.bird.filesName[this.bird.index];
                this.bird.src = "images/" + this.bird.filesName[this.bird.index] + ".jpg";
            }
        },
    }
);