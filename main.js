import { Vector2 } from './web-physics/Vector2.js';
import { Ball } from './web-physics/Ball.js';
import { Engine } from './web-physics/Engine.js';

let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let engine = new Engine(canvas, '#1E1E1E');
let colors = [
    'green',
    'purple',
    'blue'
];

for (let i = 0; i < 20; i++) {
    let color = Math.floor(Math.random() * colors.length);
    let radius = 20 + (Math.random() * 90);
    let ball = new Ball(radius, colors[color]);

    ball.mass = Math.PI * (ball.radius ** 2);

    ball.position.x = Math.random() * canvas.width;
    ball.position.y = Math.random() * canvas.height;

    ball.velocity.x = -100 + (Math.random() * 200);
    ball.velocity.y = -100 + (Math.random() * 200);

    engine.add(ball);
}

let gitBall = new Ball(150, 'gray');
gitBall.position.x = Math.random() * canvas.width;
gitBall.position.y = Math.random() * canvas.height;
gitBall.velocity.x = -100 + (Math.random() * 200);
gitBall.velocity.y = -100 + (Math.random() * 200);
gitBall.mass = (Math.PI * gitBall.radius ** 2);
engine.add(gitBall);

/*
let projectsBall = new Ball(150, 'gray');
projectsBall.position.x = Math.random() * canvas.width;
projectsBall.position.y = Math.random() * canvas.height;
projectsBall.velocity.x = -100 + (Math.random() * 200);
projectsBall.velocity.y = -100 + (Math.random() * 200);
projectsBall.mass = (Math.PI * projectsBall.radius ** 2);
engine.add(projectsBall);
*/

engine.setOnObjectPress(function () {
    if (engine.selectedObject === gitBall) {
        window.location.href = 'https://github.com/benrbowers';
        engine.selectedObject = null;
    }

    /*
    if (engine.selectedObject === projectsBall) {
        window.location.href = './projects.html';
        engine.selectedObject = null;
    }
    */
});

let gitOffset = gitBall.radius / Math.sqrt(2);
//let projectsOffset = projectsBall.radius / Math.sqrt(2);
engine.setOnFrame(function () {
    let canvas2D = canvas.getContext('2d');
    let x = gitBall.position.x - gitOffset;
    let y = gitBall.position.y - gitOffset * 1.1;

    let gitImg = document.createElement('img');
    gitImg.src = 'Icons/github_PNG20.png';
    
    canvas2D.drawImage(gitImg, x, y, gitOffset * 2, gitOffset * 2);

    /*
    x = projectsBall.position.x - projectsOffset;
    y = projectsBall.position.y - projectsOffset;

    let projectsImg = document.createElement('img');
    projectsImg.src = 'Icons/viewProjects.png';
    
    canvas2D.drawImage(projectsImg, x, y, projectsOffset * 2, projectsOffset * 2);
    */

    document.body.style.cursor = 'default';
    engine.physObjects.forEach((ball) => {
        if (ball.position.distance(engine.mousePos) < ball.radius) {
            if (ball === gitBall || ball === projectsBall) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'grab'; 
            }//end else
        }//end if
    });//end for each

    if (engine.selectedObject !== null) {
        document.body.style.cursor = 'grabbing';
    }
});

engine.setOnObjectRelease(function () {
    if (engine.selectedObject !== null) {

        //Time since last mouse movement
        if (engine.mouseTimeStamp != 0) {
            engine.mouseElapsedTime = (Date.now() - engine.mouseTimeStamp) / 1000;
        }

        if (engine.mouseElapsedTime < 0.03) { //Ensure a recent velocity is used
            engine.selectedObject.velocity = new Vector2(engine.mouseVel.x, engine.mouseVel.y);
        } else {
            engine.selectedObject.velocity = new Vector2(0, 0);
        }
    }
});

engine.setWhileObjectHeld(function() {
    engine.selectedObject.velocity.x = 0;
    engine.selectedObject.velocity.y = 0;

    engine.selectedObject.position.x = engine.mousePos.x;
    engine.selectedObject.position.y = engine.mousePos.y;
});

engine.start();