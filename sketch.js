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

    //load animations
    bunnyRight = loadAni('/assets/bunnyRight.gif');
    bunnyRight.scale = 0.25;
    bunnyStill = loadAni('/assets/bunnyStill.png');
    bunnyStill.scale = 0.25;
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

            mainPlazaScreen("open");
        }
    }

    if (screen == "mainPlaza") {
        background('lightblue');
        mouse.cursor = 'default';
        text("X Value: " + bunny.x, 50, 50);
        // camera follows bunny
        camera.x = bunny.x + 100;
        ground.x = camera.x; 


        //bunny movement
        if (kb.pressing('right') || kb.pressing('d')) {
            bunny.vel.x = 3;
            bunny.changeAni('right');
        } else if (kb.pressing('left') || kb.pressing('a')) {
            bunny.vel.x = -3;
        } else if (!keyIsPressed) {
            bunny.vel.x = 0;
            bunny.changeAni('still');
        }

        if (bunny.x >= 750 && bunny.x <= 800) {
            enteringOffice = true;
            enterOffice.x = 775;
            enterOffice.y = 200;
            cursorHovering(enterOffice)

        } else {
            enterOffice.x = -500;
            enterOffice.y = -500;
            mouse.cursor = 'default';
        }

        if (bunny.x <= 110) {
            bunny.x = 110;
        }

        if (enterOffice.mouse.presses()) {
            mainPlazaScreen("close");
            screen = "postOffice";
            camera.x = 0;
            camera.y = 0;
            postOfficeScreen("open");
        }
    }

    if (screen == "postOffice") {
        background("lightyellow");
        menuBar.draw();
        worldMap.draw();
        shop.draw();
        mail.draw();
        mouse.cursor = 'default';

        if (worldMap.mouse.presses()) {
            screen = "worldMap";
        }

    }

    if (screen == "worldMap") {

    }

    if (screen == "forestMap") {

    }

    if (screen == "underwaterMap") {

    }

    if (screen == "desertMap") {

    }

}


function cursorHovering(object) {
    if (object.mouse.hovering()) {
        mouse.cursor = 'pointer';
    } else {
        mouse.cursor = 'default';
    }
}


function mainPlazaScreen(openClose) {

    noStroke();

    if (openClose == "open") {

        // main plaza sprites
        ground = new Sprite(width / 2, height - 60, 800, 120);
        ground.collider = 's';
        ground.color = "lightgreen";
        ground.friction = 0;

        bunny = new Sprite(200, 300, 100, 125);
        bunny.collider = 'd';
        bunny.color = "white";
        bunny.rotationLock = true;
        bunny.addAni('right', bunnyRight);
        bunny.addAni('still', bunnyStill);

        postOffice = new Sprite(900, 230, 600, 300);
        postOffice.collider = 'n';
        postOffice.layer = 1;

        enterOffice = new Sprite(-500, -500, 200, 50);
        enterOffice.collider = 's';
        enterOffice.color = "white";
        enterOffice.layer = 4;
        enterOffice.text = 'Enter Post Office';


    } else if (openClose == "close") {
        ground.pos = {x: -1000, y: -1000};
        bunny.pos = {x: -1000, y: -1000};
        postOffice.pos = {x: -1000, y: -1000};
        enterOffice.pos = {x: -1000, y: -1000};
    }


}

function postOfficeScreen(openClose) {
    noStroke();

    if (openClose == "open") {
        menuBar = new Sprite(400, 450, 800, 200)
        menuBar.collider = 's';
        menuBar.color = "lightgreen";
        menuBar.friction = 0;
        menuBar.layer = -1;

        worldMap = new Sprite(250, 425, 100, 100);
        worldMap.collider = 's';
        worldMap.color = "pink";
        worldMap.layer = 4;

        shop = new Sprite(400, 425, 100, 100);
        shop.collider = 's';
        shop.color = "lavender";
        shop.layer = 4;

        mail = new Sprite(550, 425, 100, 100);
        mail.collider = 's';
        mail.color = "gray";
        mail.layer = 4;
    }
}