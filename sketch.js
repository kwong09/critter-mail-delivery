// a simple game where you click to drop a ball and 
// try to get as many balls as possible on the spinning shape
// move the mouse up and down to change the rotation speed of the shape
// use the right and left keys to make the shape larger or smaller

let spinningShape;
let highScore = 0;
let screen = "home";
let bunny, ground;

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
        moveBunny(bunny, 110, 1000);

        buttonAppear(bunny, enterOffice, 775, 450, 750, 800);

        if (enterOffice.mouse.presses()) {
            mainPlazaScreen("close");
            screen = "postOffice";
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
            postOfficeScreen("close");
            screen = "worldMap";
            worldMapScreen("open");
        }

    }

    if (screen == "worldMap") {
        background("#5dc0d6ff");
        forestMap.draw();
        underwaterMap.draw();
        desertMap.draw();
        mouse.cursor = 'default';

        if (forestMap.mouse.presses()) {
            forestMapScreen("open");
            screen = "forestMap";
            worldMapScreen("close");
        }

    }

    if (screen == "forestMap") {
        background("#c1f4ffff");
        text("X Value: " + forestBunny.x, 50, 50);
        // camera follows bunny
        camera.x = forestBunny.x + 100;
        forestGround.x = camera.x; 


        //bunny movement
        moveBunny(forestBunny, 110, 1000);
        buttonAppear(forestBunny, forestTalk1, 775, 450);

    }

    if (screen == "underwaterMap") {

    }

    if (screen == "desertMap") {

    }

}


//functions


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
        worldMap.color = "#ff75b1ff";
        worldMap.layer = 4;

        shop = new Sprite(400, 425, 100, 100);
        shop.collider = 's';
        shop.color = "lavender";
        shop.layer = 4;

        mail = new Sprite(550, 425, 100, 100);
        mail.collider = 's';
        mail.color = "gray";
        mail.layer = 4;

    } else if (openClose == "close") {
        menuBar.pos = {x: -1000, y: -1000};
        worldMap.pos = {x: -1000, y: -1000};
        shop.pos = {x: -1000, y: -1000};
        mail.pos = {x: -1000, y: -1000};
    }
}

function worldMapScreen(openClose) {
    if (openClose == "open") {
        forestMap = new Sprite(300, 250, 75, 75);
        forestMap.collider = 's';
        forestMap.color = "#89d580ee";

        underwaterMap = new Sprite(400, 250, 75, 75);
        underwaterMap.collider = 's';
        underwaterMap.color = "#cae1fdee";

        desertMap = new Sprite(500, 250, 75, 75);
        desertMap.collider = 's';
        desertMap.color = "#d6de8cee";
    }

    if (openClose == "close") {
        forestMap.pos = {x: -1000, y: -1000};
        underwaterMap.pos = {x: -1000, y: -1000};
        desertMap.pos = {x: -1000, y: -1000};
    }
}


// map screens
function forestMapScreen(openClose) {

    if (openClose == "open") {

        // main plaza sprites
        forestGround = new Sprite(width / 2, height - 60, 800, 120);
        forestGround.collider = 's';
        forestGround.color = "lightgreen";
        forestGround.friction = 0;

        forestBunny = new Sprite(200, 300, 100, 125);
        forestBunny.collider = 'd';
        forestBunny.color = "white";
        forestBunny.rotationLock = true;
        forestBunny.addAni('right', bunnyRight);
        forestBunny.ani.scale = 0.25;
        forestBunny.addAni('still', bunnyStill);
        forestBunny.ani.scale = 0.25;

        forestHome1 = new Sprite(900, 230, 600, 300);
        forestHome1.color = "#f292f2ff";
        forestHome1.collider = 'n';
        forestHome1.layer = 1;

        forestTalk1 = new Sprite(-1000, -1000, 200, 50);
        forestTalk1.collider = 's';
        forestTalk1.color = "white";
        forestTalk1.layer = 4;
        forestTalk1.text = 'Talk to Forest Character 1';
        
        camera.x = 400;
        camera.y = 250;
    }
}


function moveBunny(bunny, lim1, lim2) {
    
    if (kb.pressing('right') || kb.pressing('d')) {
        bunny.vel.x = 3;
        bunny.scale.x = 1;
        bunny.changeAni('right');
    } else if (kb.pressing('left') || kb.pressing('a')) {
        bunny.vel.x = -3;
        bunny.scale.x = -1;
        bunny.changeAni('right');
    } else if (!keyIsPressed) {
        bunny.vel.x = 0;
        bunny.scale.x = 1;
        bunny.changeAni('still');
    }

    if (bunny.x <= lim1) {
        bunny.x = lim1;
    }

    if (bunny.x >= lim2) {
        bunny.x = lim2;
    }
}


function buttonAppear(bunny, button, x, y, lim1, lim2) {
    if (bunny.x >= lim1 && bunny.x <= lim2) {
        button.x = x;
        button.y = y;
        cursorHovering(button)

    } else {
        button.x = -1000;
        button.y = -1000;
        mouse.cursor = 'default';
    }
}
