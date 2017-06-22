"use strict";
/*global game*/

// Wait till the game is ready to run.
// game.onReady(function() {
//   // Sample code to clear the screen then draw an obstacle.
//   // Feel free to delete all this.
//   var obstacleX = 450;
//   var dinosaurY = 200;
//   var dinosaurVelocity = 0;
//   var score = 0;
//   var highScore =  game.getHighScore();

//   //start eventLoop
//   function eventLoop() {
//   	if (obstacleX === 0){
//   		obstacleX = 550; //game.width
//   	}
//   	if (dinosaurY < 100){
//   		dinosaurVelocity = -10;
//   	}
//   	if (dinosaurY > 200){
//   		dinosaurVelocity = 0;
//   		dinosaurY = 200;
//   	}
//   	obstacleX = obstacleX - 10;

//   	game.clear();
//   	game.drawObstacle(obstacleX, 200);
//   	game.drawDinosaur(100, dinosaurY);

//   	dinosaurY = dinosaurY - dinosaurVelocity;
//   	if (obstacleX === 100 && dinosaurY === 200){
//   	//if (95 < obstacleX < 105 && 195 < dinosaurY < 205){
//   		game.drawMessage("You lose :( Press up to restart" );
//   		clearInterval(interval);
//   	}
//   	//score = score +1;
//   	game.drawScore(score);
//   	game.drawHighScore(highScore);
//   	if (score > highScore){
//   		highScore = score;
//   		game.saveHighScore(highScore);
//   	}

//   	score = score +1;
//   }
//   //end eventLoop

//   var interval = setInterval(eventLoop, 50);

//   game.onUpArrow(function() {
// 	if (obstacleX === 100 && dinosaurY === 200){
// 	//if (95 < obstacleX < 105 && 195 < dinosaurY < 205){
// 		game.drawMessage("You lose :( Press up to restart" );
//   		clearInterval(interval);
// 		score = 0;
//   		obstacleX = 450;
//   		dinosaurY = 200;
//   		interval = setInterval(eventLoop, 50);
// 	}
//   	dinosaurVelocity = 10;
//   });
// });


game.onReady(function() {
  // Sample code to clear the screen then draw an obstacle.
  // Feel free to delete all this.
 // var obstacleX = 450;
  var obstacle = {X: 450, Y:200, width: 40, height: 20};
  var dinosaur = {X: 100, Y:200, velocity: 0, width:25, height:50 };
  //var dinosaurY = 200;
  //var dinosaurVelocity = 0;
  var score = 0;
  var highScore =  game.getHighScore();

  //start eventLoop
  function eventLoop() {
  	if (obstacle.X === 0){
  		obstacle.X = 550; //game.width
  	}
  	if (dinosaur.Y < 100){
  		dinosaur.velocity = -5;
  	}
  	if (dinosaur.Y > 200){
  		dinosaur.velocity = 0;
  		dinosaur.Y = 200;
  	}
  	obstacle.X = obstacle.X - 10;

  	game.clear();
  	game.drawObstacle(obstacle.X, 200);
  	game.drawDinosaur(100, dinosaur.Y);

  	dinosaur.Y = dinosaur.Y - dinosaur.velocity;
  	if (obstacle.X - obstacle.width/2 === 100 && 
  		200 - obstacle.height/2 < dinosaur.Y){
  	//if (95 < obstacleX < 105 && 195 < dinosaurY < 205){
  		game.drawMessage("You lose :( Press up to restart" );
  		clearInterval(interval);
  	}
  	//score = score +1;
  	game.drawScore(score);
  	game.drawHighScore(highScore);
  	if (score > highScore){
  		highScore = score;
  		game.saveHighScore(highScore);
  	}

  	score = score +1;
  }
  //end eventLoop

  var interval = setInterval(eventLoop, 50);

  game.onUpArrow(function() {
	if (obstacle.X - obstacle.width/2 === 100 && 
  		200 - obstacle.height/2 < dinosaur.Y){
	//if (95 < obstacleX < 105 && 195 < dinosaurY < 205){
		game.drawMessage("You lose :( Press up to restart" );
  		clearInterval(interval);
		score = 0;
  		obstacle.X = 450;
  		dinosaur.Y = 200;
  		interval = setInterval(eventLoop, 50);
	}
  	dinosaur.velocity = 10;
  });
});