let money = 0;
let screen = "home";
let mailOwners = ["bear", "deer", "squirrel"];
let bunny, ground, forestBunny;
let characterTalking = "";
let characterLetter = ["Guess who this letter is for! \n\n To: my best friend \n HOW ARE YOU DOING? I know we live right next\n door to each other but I have had this BIG\n idea brewing up! I know you love doing our weekly\n farmer's market run, so here is my proposal: \nwe sell our own food! Are you interested in \ntrying to do this with me? OK BYE! \n (P.S. I promise there will be NO ants on a log)", "Guess who this letter is for! \n\n To: mother nature!!\n HIHIHI!!! Sorry for bothering you, but I saw that you have\n SUCH LOVELY plants at your garden! I wanted to start \n growing my own because I might start selling at \nthe local farmer's market, but I definitely do\n not have a green thumb. I would love some of \nyour advice!! Bye!!!", "Guess who this letter is for! \n\n To: loud neighbor... \nHello, lately the neighborhood has gotten a bit loud.... \ndo you think you can please turn down the music \nduring parties? I understand you love to host them,\n but my plants need some quiet time as well. \nSorry. Thank you!"];
let letterValue = 0;
let currentMailOwner = mailOwners[letterValue];

function setup() {
    createCanvas(800, 500);

    world.gravity.y = 10;

    // home page sprites

    textSize(20);
    startButton = new Sprite(-500, -500, 150, 50);
    startButton.text = "start";
    startButton.collider = "static";
    startButton.fill = "#FDEBDE";

    //load animations
    bunnyRight = loadAni('/assets/bunnyRight.gif');
    bunnyRight.scale = 0.25;
    bunnyStill = loadAni('/assets/bunnyStill.png');
    bunnyStill.scale = 0.25;

    //load images
    postOfficeImg = loadImage('/assets/postOffice.png');
    bearHome = loadImage('/assets/bearHome.png');
    squirrelHome = loadImage('/assets/squirrelHome.png');
    deerHome = loadImage('/assets/deerHome.png');
    cloudyBackground = loadImage('/assets/cloudyBackground.png');
    forestBackground = loadImage('/assets/forestBackground.png');
    worldMapBackground = loadImage('/assets/worldMapBackground.png');
    bearBackground = loadImage('/assets/bearBackground.png');
    deerBackground = loadImage('/assets/deerBackground.png');
    squirrelBackground = loadImage('/assets/squirrelBackground.png');
    homeBackground = loadImage('/assets/homeBackground.png');
    mailBackground = loadImage('/assets/mailBackground.png');
    postOfficeBackground = loadImage('/assets/postOfficeBackground.png');

    bear = loadImage('/assets/bear.png');
    deer = loadImage('/assets/deer.png');
    squirrel = loadImage('/assets/squirrel.png');
    lock = loadImage('/assets/lock.png');

    worldMapIcon = loadImage('/assets/worldMapIcon.png');
    shopIcon = loadImage('/assets/shopIcon.png');
    mailIcon = loadImage('/assets/mailIcon.png');
    postOfficeIcon = loadImage('/assets/postOfficeIcon.png');

    gomgomFont = loadFont('/assets/gomgomFont.ttf');
}

function draw() {
    clear();
    textFont(gomgomFont);
    textSize(20);
    textAlign(CENTER, CENTER);

    if (screen == "home") {
        background(homeBackground);

        // position start button
        startButton.x = 550;
        startButton.y = 350;

        // changes cursor
        cursorHovering(startButton);

        if (startButton.mouse.presses()) {
            screen = "mainPlaza";
            startButton.pos = {x: -500, y: -500};
        
        

            mainPlazaScreen("open");

            postOfficeButton = new Sprite(-1000, -1000, 80, 80);
            postOfficeButton.collider = 'static';
            postOfficeButton.image = postOfficeIcon;
            postOfficeButton.ani.scale = 0.08;
        }
    }

    if (screen == "mainPlaza") {
        background(cloudyBackground);
        text("$" + money, 750, 50);
        
        mouse.cursor = 'default';
        // text("X Value: " + bunny.x, 50, 50);
        // camera follows bunny
        camera.x = bunny.x + 100;
        ground.x = camera.x; 

        //bunny movement
        moveBunny(bunny, 110, 1000);

        buttonAppear(bunny, enterOffice, 715, 450, 660, 770);

        if (enterOffice.mouse.presses()) {
            mainPlazaScreen("close");
            screen = "postOffice";
            postOfficeScreen("open");
        }
    }

    if (screen == "postOffice") {
        background(postOfficeBackground);
        text("$" + money, 750, 50);
        
        menuBar.draw();
        worldMap.draw();
        worldMap.ani.scale = 0.08;
        shop.draw();
        shop.ani.scale = 0.08;
        mail.draw();
        mail.ani.scale = 0.08;
        mouse.cursor = 'default';
        
        

        if (worldMap.mouse.presses()) {
            postOfficeScreen("close");
            screen = "worldMap";
            worldMapScreen("open");
        }

        if (mail.mouse.presses()) {
            postOfficeScreen("close");
            screen = "mail";
            mailScreen("open");
        }

    }

    if (screen == "worldMap") {
        background(worldMapBackground);
        forestMap.draw();
        underwaterMap.draw();
        underwaterMap.image = lock;
        underwaterMap.ani.scale = 0.08;
        desertMap.draw();
        desertMap.image = lock;
        desertMap.ani.scale = 0.08;
        mouse.cursor = 'default';

        if (forestMap.mouse.presses()) {
            if (forestBunny) {
                forestMapScreen("openAgain");
            } else {
                forestMapScreen("open");
            }
            screen = "forestMap";
            worldMapScreen("close");
        }

    }

    if (screen == "forestMap") {
        background(forestBackground);
        text("$" + money, 750, 50);

        // text("X Value: " + forestBunny.x, 50, 50);
        // camera follows bunny
        camera.x = forestBunny.x + 100;
        forestGround.x = camera.x; 

        //return to post office 
        postOfficeButton.y = 450;
        postOfficeButton.x = camera.x - 350;

        //bunny movement
        moveBunny(forestBunny, 110, 5000);
        buttonAppear(forestBunny, forestTalk1, 810, 450, 760, 880);
        buttonAppear(forestBunny, forestTalk2, 1470, 450, 1420, 1520);
        buttonAppear(forestBunny, forestTalk3, 2270, 450, 2130, 2380);

        if (postOfficeButton.mouse.presses()) {
            forestMapScreen("close");
            screen = "postOffice";
            postOfficeScreen("open");
            postOfficeButton.pos = {x: -1000, y: -1000};
        }

        if (forestTalk1.mouse.presses()) {
            characterTalking = "bear";
            forestMapScreen("close");
            screen = "talkingScreen";
            talkingScreen("open");
            speechBubble.text = "Hello there! I'm Mr. Razzle Beary, but you\ncan just call me Beary ;) On the weekends,\n I love to go to the farmers' market with my \n BEST friend in the whole wide world, \n Nutmeg! My favorite hobby is to try new snacks \n and flavors of all kinds! However, I cannot bring \n myself to eat ants on a log.... Ants are my friends!";

            talkingCharacter.image = bear;
            talkingCharacter.ani.scale = 0.5;
        } else if (forestTalk2.mouse.presses()) {
            characterTalking = "deer";
            forestMapScreen("close");
            screen = "talkingScreen";
            talkingScreen("open");
            speechBubble.text = "Hello! I'm Jane Doe and I'm known as the\n nature expert around here. I'm happiest \nwhen I'm at the plant nursery or going\n bird watching. I love staying indoors, especially\n looking through my windows. I truly dislike\n loud noises. I believe that the best life\n is a quiet life! Um.. well goodbye!";

            talkingCharacter.image = deer;
            talkingCharacter.ani.scale = 0.5;
        } else if (forestTalk3.mouse.presses()) {
            characterTalking = "squirrel";
            forestMapScreen("close");
            screen = "talkingScreen";
            talkingScreen("open");
            speechBubble.text = "Heyo! I'm Nutmeg, but my mom calls me Squeak,\n speaking of which where is my squeaky toy?\n Wait who are you again? Sorry, I'm Nutmeg!\n Um... well my best friend is Mr. Razzle Beary\n (my neighbor). I LOVE LOVE LOVE going\n on adventures, hosting parties, and especially... \ngoing on adventures! Did I say that already?";

            talkingCharacter.image = squirrel;
            talkingCharacter.ani.scale = 0.5;
        }

    }

    if (screen == "underwaterMap") {

    }

    if (screen == "desertMap") {

    }

    if (screen == "talkingScreen") {
        if (characterTalking == "bear") {
            background(bearBackground);
        } else if (characterTalking == "deer") {
            background(deerBackground);
        } else if (characterTalking == "squirrel") {
            background(squirrelBackground);
        }

        talkingCharacter.draw();
        talkingGiveMail.draw();
        speechBubble.draw();
        backButton.draw();
        mouse.cursor = 'default';

        if (backButton.mouse.presses()) {
            talkingScreen("close");
            screen = "forestMap";
            forestMapScreen("openAgain");
        }

        if (talkingGiveMail.mouse.presses()) {
            if (currentMailOwner == characterTalking) {
                money += 50;
                talkingScreen("close");
                screen = "postOffice";
                postOfficeScreen("openAgain");

                letterValue = (int(random(0, 3)));
                currentMailOwner = mailOwners[letterValue];

            } else {
                money -= 50;
                talkingScreen("close");
                screen = "postOffice";
                postOfficeScreen("openAgain");
            }
        }

    }

    if (screen == "mail") {
        background(mailBackground);
        returnToOffice.draw();
        textAlign(CENTER, CENTER);
        text(characterLetter[letterValue], width / 2, height / 2 - 70);

        if (returnToOffice.mouse.presses()) {
            mailScreen("close");
            screen = "postOffice";
            postOfficeScreen("openAgain");
        }
    }

}


//screen functions


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
        ground.color = "#76BE80";
        ground.friction = 0;

        bunny = new Sprite(200, 300, 100, 125);
        bunny.collider = 'd';
        bunny.color = "white";
        bunny.rotationLock = true;
        bunny.addAni('right', bunnyRight);
        bunny.addAni('still', bunnyStill);

        postOffice = new Sprite(900, 230, 600, 300);
        postOffice.collider = 'n';
        postOffice.layer = -1;
        postOffice.image = postOfficeImg;
        postOffice.ani.scale = 0.5;

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
        menuBar.color = "#b9d5ffff";
        menuBar.friction = 0;
        menuBar.layer = -1;

        worldMap = new Sprite(250, 425, 100, 100);
        worldMap.collider = 's';
        worldMap.image = worldMapIcon;
        worldMap.ani.scale = 0.08;
        worldMap.layer = 4;

        shop = new Sprite(400, 425, 100, 100);
        shop.collider = 's';
        shop.image = lock;
        shop.ani.scale = 0.08;
        shop.layer = 4;

        mail = new Sprite(550, 425, 100, 100);
        mail.collider = 's';
        mail.image = mailIcon;
        mail.ani.scale = 0.08;
        mail.layer = 4;
        
        camera.x = 0;
        camera.y = 0;

    } else if (openClose == "close") {
        menuBar.pos = {x: -1000, y: -1000};
        worldMap.pos = {x: -1000, y: -1000};
        shop.pos = {x: -1000, y: -1000};
        mail.pos = {x: -1000, y: -1000};
    } else if (openClose == "openAgain") {
        menuBar.pos = {x: 400, y: 450};
        worldMap.pos = {x: 250, y: 425};
        shop.pos = {x: 400, y: 425};
        mail.pos = {x: 550, y: 425};
        
        camera.x = 0;
        camera.y = 0;
    }
}

function worldMapScreen(openClose) {
    if (openClose == "open") {
        forestMap = new Sprite(170, 310, 230, 190);
        forestMap.collider = 's';
        forestMap.color = "rgba(255, 255, 255, 0)";

        underwaterMap = new Sprite(650, 300, 75, 75);
        underwaterMap.collider = 's';
        underwaterMap.color = "#cae1fdee";

        desertMap = new Sprite(410, 325, 75, 75);
        desertMap.collider = 's';
        desertMap.color = "#d6de8cee";
    } else if (openClose == "close") {
        forestMap.pos = {x: -1000, y: -1000};
        underwaterMap.pos = {x: -1000, y: -1000};
        desertMap.pos = {x: -1000, y: -1000};
    }
}


// map screens
function forestMapScreen(openClose) {

    if (openClose == "open") {
        
        forestGround = new Sprite(width / 2, height - 60, 800, 120);
        forestGround.collider = 's';
        forestGround.color = "#456e24ff";
        forestGround.friction = 0;
        forestGround.layer = 0;

        forestBunny = new Sprite(200, 300, 100, 125);
        forestBunny.collider = 'd';
        forestBunny.color = "white";
        forestBunny.rotationLock = true;
        forestBunny.addAni('right', bunnyRight);
        forestBunny.ani.scale = 0.25;
        forestBunny.addAni('still', bunnyStill);
        forestBunny.ani.scale = 0.25;

        forestHome1 = new Sprite(900, 230, 600, 300);
        forestHome1.collider = 'n';
        forestHome1.layer = 1;
        forestHome1.image = bearHome;
        forestHome1.ani.scale = 0.5;

        forestTalk1 = new Sprite(-1000, -1000, 200, 50);
        forestTalk1.collider = 's';
        forestTalk1.color = "white";
        forestTalk1.layer = 4;
        forestTalk1.text = 'Talk to Mr. Razzle Beary';

        forestHome2 = new Sprite(1600, 230, 600, 300);
        forestHome2.collider = 'n';
        forestHome2.layer = 1;
        forestHome2.image = deerHome;
        forestHome2.ani.scale = 0.5;

        forestTalk2 = new Sprite(-1000, -1000, 200, 50);
        forestTalk2.collider = 's';
        forestTalk2.color = "white";
        forestTalk2.layer = 4;
        forestTalk2.text = 'Talk to Mrs. Jane Doe';

        forestHome3 = new Sprite(2300, 230, 600, 300);
        forestHome3.collider = 'n';
        forestHome3.layer = 1;
        forestHome3.image = squirrelHome;
        forestHome3.ani.scale = 0.5;

        forestTalk3 = new Sprite(-1000, -1000, 200, 50);
        forestTalk3.collider = 's';
        forestTalk3.color = "white";
        forestTalk3.layer = 4;
        forestTalk3.text = 'Talk to Nutmeg';
        
        camera.x = 400;
        camera.y = 250;

    } else if (openClose == "openAgain") {
        forestGround.pos = {x: width / 2, y: height - 60};
        forestBunny.pos = {x: 200, y: 300};
        forestHome1.pos = {x: 900, y: 230};
        forestTalk1.pos = {x: -1000, y: -1000};
        forestHome2.pos = {x: 1600, y: 230};
        forestTalk2.pos = {x: -1000, y: -1000};
        forestHome3.pos = {x: 2300, y: 230};
        forestTalk3.pos = {x: -1000, y: -1000};

        camera.x = 400;
        camera.y = 250;
    } else if (openClose == "close") {
        forestGround.pos = {x: -1000, y: -1000};
        forestBunny.pos = {x: -1000, y: -1000};
        forestHome1.pos = {x: -1000, y: -1000};
        forestTalk1.pos = {x: -1000, y: -1000};
        forestHome2.pos = {x: -1000, y: -1000};
        forestTalk2.pos = {x: -1000, y: -1000};
        forestHome3.pos = {x: -1000, y: -1000};
        forestTalk3.pos = {x: -1000, y: -1000};
    }
}

function talkingScreen(openClose) {
    if (openClose == "open") {
        talkingCharacter = new Sprite(200, 300, 200, 300);
        talkingCharacter.collider = 's';
        talkingCharacter.image = bear;
        talkingCharacter.ani.scale = 0.5;

        speechBubble = new Sprite(550, 250, 380, 250);
        speechBubble.collider = 's';
        speechBubble.color = "#ffeee4ff";

        talkingGiveMail = new Sprite(550, 450, 160, 50);
        talkingGiveMail.text = "give mail";
        talkingGiveMail.collider = 's';
        talkingGiveMail.color = "#ffeee4ff";

        backButton = new Sprite(700, 60, 100, 50);
        backButton.text = "back";
        backButton.collider = 's';
        backButton.color = "#ffeee4ff";
        
        camera.x = 0;
        camera.y = 0;
    } else if (openClose == "close") {
        talkingCharacter.pos = {x: -1000, y: -1000};
        speechBubble.pos = {x: -1000, y: -1000};
        talkingGiveMail.pos = {x: -1000, y: -1000};
        backButton.pos = {x: -1000, y: -1000};
    }
}

function mailScreen(openClose) {
    if (openClose == "open") { 
        returnToOffice = new Sprite(width / 2, 425, 180, 75);
        returnToOffice.collider = 's';
        returnToOffice.color = "white";
        returnToOffice.text = 'Return to Post Office';

    } else if (openClose == "close") {
        returnToOffice.pos = {x: -1000, y: -1000};
    }
}


//game functions


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
