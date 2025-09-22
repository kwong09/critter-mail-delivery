// a simple game where you click to drop a ball and 
// try to get as many balls as possible on the spinning shape
// move the mouse up and down to change the rotation speed of the shape
// use the right and left keys to make the shape larger or smaller

let spinningShape;
let highScore = 0;
let screen = "home";

function setup() {
    createCanvas(800, 500);

    world.gravity.y = 10;

    // home page sprites

    startButton = new Sprite(-500, -500, 150, 50);
    startButton.text = "start";
    startButton.collider = "static";
    startButton.fill = "pink";
    /* STARTING CODE!!

    // this sprite can be created on a single line, but it's easier to read this way:
	spinningShape = new Sprite();
	spinningShape.width = canvas.width/5;
	spinningShape.height = spinningShape.width;
    spinningShape.collider = "kinematic";

    textFont("Courier", 24);

    */
}

function draw() {
    clear();

    if (screen == "home") {
        background('pink');

        // position start button
        startButton.x = width / 2;
        startButton.y = 100;

        // changes cursor
        cursorHovering(startButton);

        if (startButton.mouse.presses()) {
            screen = "mainPlaza";
            startButton.pos = {x: -500, y: -500};

            mainPlazaScreen();
        }
    }

    if (screen == "mainPlaza") {
        // text("bunny x coordinate: " + bunny.x, 50, 50);
        background('lightblue');
        mouse.cursor = 'default';
        text("X Value: " + bunny.x, 50, 50);

        // cursor hovering

        // camera follows bunny
        camera.x = bunny.x + 100;
        ground.x = camera.x; 


        //bunny movement
        if (kb.pressing('right') || kb.pressing('d')) {
            bunny.vel.x = 3;
        } else if (kb.pressing('left') || kb.pressing('a')) {
            bunny.vel.x = -3;
        } else if (!keyIsPressed) {
            bunny.vel.x = 0;
        }

        if (bunny.x >= 750 && bunny.x <= 800) {
            enterOffice.x = bunny.x + 100;
            enterOffice.y = bunny.y + 125;
        } else {
            enterOffice.x = -500;
            enterOffice.y = -500;
        }
    }

    function cursorHovering(object) {
        if (object.mouse.hovering()) {
            mouse.cursor = 'pointer';
        } else {
            mouse.cursor = 'default';
        }
    }

    /* STARTING CODE!!

    // try the game without this line :)
    clear();

    // the map function translates a value from one range to another
    // https://p5js.org/reference/#/p5/map
    spinningShape.rotationSpeed = map(mouse.y, 0, canvas.height, -10, 10);

    // create a ball when the mouse is clicked
    // https://p5play.org/learn/input_devices.html
    if (kb.pressing('up')) {
        let ball = new Sprite(mouse.x, -20, 20);
        // make the ball resist rolling when it touches the spinning shape
        // https://p5play.org/learn/sprite.html?page=9
        ball.rotationDrag = 10;
    }

    // make the spinning shape larger or smaller using the keyboard
    // note the difference between presses (above) and pressing (here)
    if (kb.pressing('right')) {
        spinningShape.width += 10;
    } else if (kb.pressing('left')) {
        spinningShape.width -= 10;
    }

    // loop through the allSprites array and see how many are above the center of the screen
    let currentScore = 0;
    for (let sprite of allSprites) {
        if (sprite.y < canvas.height/2) {
            currentScore++;
            if (currentScore > highScore) {
                highScore = currentScore;
            }
        }
    }

    // display the score (minus 1 so it doesn't count the spinning shape)
    text("BALLS: " + (currentScore-1), 40, 60);
    text("HIGH:  " + (highScore-1), 40, 86);


    */

}


function mainPlazaScreen() {

    noStroke();

    // main plaza sprites
    ground = new Sprite(width / 2, height - 60, 800, 120);
    ground.collider = 's';
    ground.color = "lightgreen";
    ground.friction = 0;

    bunny = new Sprite(200, 300, 100, 125);
    bunny.collider = 'd';
    bunny.color = "white";
    bunny.rotationLock = true;

    postOffice = new Sprite(900, 230, 600, 300);
    postOffice.collider = 'n';
    postOffice.layer = 1;

    enterOffice = new Sprite(-500, -500, 200, 50);
    enterOffice.collider = 'n';
    enterOffice.color = "white";
    enterOffice.layer = 4;
    enterOffice.text = 'Enter Post Office';


}