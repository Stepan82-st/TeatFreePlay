function hunter() {

    window.addEventListener("mousemove", F);

    var a = document.createElement("div");
    a.style.cssText = "position:absolute; width:200px; height:50px; background-color:#fe2; top:0; left:0";
    document.body.appendChild(a);

    function F(e) {

        if (e.target) {
            a.style.visibility = "visible";
            a.style.left = (e.pageX) + "px";
            a.style.top = (e.pageY) + "px";
            a.textContent = e.pageX + ", " + e.pageY;

        } else {

            a.style.visibility = "hidden";

        }

    }

};
hunter();

class Raabbit {

    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.duration = options.duration;
        this.speed = options.speed;
        this.radius = options.radius;
        this.color = options.color;
    }
    get namex() {
        return this.x;
    }
    get namey() {
        return this.y;
    }
    set namex(x) {
        if (x) {
            return this.x = x;
        } else {
            throw new Error('Error x');
        }
    }
    set namey(y) {
        if (y) {
            return this.y = y;
        } else {
            throw new Error('Error y');
        }
    }

    draw() {
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = `${this.x}px`;
        div.style.top = `${this.y}px`;
        div.style.width = `${this.radius}px`;
        div.style.height = `${this.radius + 20}px`;
        div.style.border = "1px solid;";
        div.style.borderRadius = "20%";
        div.style.backgroundColor = `${this.color}`;
        document.body.appendChild(div);

    }

    setColor(newColor) {
        return this.color = newColor;
    }

    moveTo(v) {
        let start = Date.now();
        let circle = document.getElementsByTagName('div')[1];
        let numX = this.x;
        let duration = this.duration;
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;

            circle.style.left = (numX) + "px";
            numX++;
            if (timePassed > duration) clearInterval(timer);
        }, this.speed)
    }
    rotateTurn(corner) {
        let start = Date.now();
        let circle = document.getElementsByTagName('div')[1];
        let numY = this.y;
        let duration = this.duration;
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            circle.style.transform = 'rotate(' + corner + 'turn)';
            circle.style.top = (numY) + "px";
            corner += 0.1;
            setTimeout(function () {
                console.log(numY);
                return numY += 5;
            }, 4000);

            if (timePassed > duration) clearInterval(timer)
        }, this.speed)

    }

}
let options = {
    x: 200,
    y: 100,
    duration: 5000,
    speed: 10,
    radius: 100,
    color: 'red'
};
let circle = new Raabbit(options);
console.log(circle.x);
circle.draw();
circle.moveTo();
circle.rotateTurn(0.7);
console.log(circle) // массив значений;