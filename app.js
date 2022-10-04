 class Game {

    // Default constructor 
    constructor() {
        this.width = 600; // canvas width
        this.height = 400; // canvas height
        this.canvas = document.getElementById("Canvas"); // calling the canvas
        this.ctx = this.canvas.getContext("2d"); // calling the context
        this.objects = []; // object array
        this.canvas.width = this.width; // assigning canvas width 
        this.canvas.height = this.height; // assigning canvas height 
    }

    // Update method that takes parameter delta and calls the object's updates
    update(delta) {

        // for loop to loop through the array of objects 
        for(let i = 0; i < this.objects.length; ++i)
            if (this.objects[i] instanceof Ball)
                // call Ball update 
                this.objects[i].update(this.canvas, delta);       
    }

    // Drawing the objects on the screen 
    draw() {

        // set a color
        this.ctx.fillStyle = "#0000FF"; 
        // draws the blue board
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // loop to go through array to draw objects on screen
        for(let i = 0; i < this.objects.length; ++i) {
            // call Ball draw 
            this.objects[i].draw(this.ctx);
        }
    }

    // Adding objects to object array
    addObject(obj) {
        this.objects.push(obj);
    }
}

// Object class which is a parent class for all objects in the game
class Object {
    constructor() {

    }

    update() {

    }

    draw() {

    }
}

// Class for creating the ball
 class Ball extends Object {

    //Constructor for the ball
    constructor(canvas) {
        super();
        
        // default position of ball
        this.x = 0; 
        this.y = canvas.height / 2;

        this.radius = 10; // radius of ball

        // the speed of the ball
        this.speed = 200;

        this.color = '#fff'; // color is white
    }
    
    //update of movment 
    update(canvas, delta) {
        // move the ball
        this.x += this.speed * delta;

        if(this.x > canvas.width) {
            this.x = 0;
            this.speed = 200;
        }
    }

    // draw the ball
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); 
        ctx.closePath();
        ctx.fill();
    }
}

// calling all game objects
let game = new Game();
let ball = new Ball(game.canvas);

// adding all game objects
game.addObject(ball);

// the game loop
let animate = () => {

    // setting up the time for the game engine 
    let now = Date.now();
    let delta = now - then;

    game.update(delta / 1000);
    game.draw();

    then = now;

    requestAnimationFrame(animate);
        
}

// making sure everything is compatable 
var w = window; 
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame 
|| w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

let then = Date.now();

animate(); // calling animate function