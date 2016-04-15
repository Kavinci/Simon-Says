//setup global variables
var seq = [];
var input = [];
var lvl = 1;
var active = true;

var main = function () {
    $(document).ready(function () {
      $("#start").click(function(){
        lvl = 1;
        active = true;
        seq = generate();
        play(lvl, seq, active);
      });
    });
};

function generate() {
var numseq = [];
//generate numbers 0 through 3
  for (var i=0; i < 40; i++) {
  var num = Math.round(Math.random()*10/3);
  numseq.push(num);
  };

//convert the numbers to colors
  var x;
  var color;

  for (x in numseq) {
    switch(numseq[x]) {
      case 0:
        color = "green";
        seq.push(color);
        break;
      case 1:
        color = "red";
        seq.push(color);
        break;
      case 2:
        color = "blue";
        seq.push(color);
        break;
      case 3:
        color = "yellow";
        seq.push(color);
        break;
        };
      };
  console.log(seq);
  return seq;
};

function play(lvl, seq, active){
  update(lvl);
  var i = 1;
  setInterval(show(lvl, seq, i), 1000*lvl);
  startTimer();
  setInterval(input.length = 0,active = click(lvl, seq, active), 1000*lvl);
  if(active == false){
  alert("GAMEOVER! Press the red button to play again. Thanks for playing!");
  main();
  }
  else if(lvl == 41){
  alert("Congratulations! You beat the game! Press the red button to play again. Thanks for playing!");
  main();
  }
  else{
  play(lvl, seq, active);
  };
};


function update(lvl){
  var tx = "Level " + lvl;
  console.log(tx); //the tx variable has correct output
  //Changing the level is broken
  $("#XMLID_x5F_67_x5F_").text = tx;
};

function show(lvl, seq, i){
  if(i <= lvl){
  switch(seq[(i-1)]){
    case "red":
    $("#red").addClass("redon");
    setTimeout(function() {$("#red").removeClass("redon");}, 500);
    break;
    case "blue":
    $("#blue").addClass("blueon");
    setTimeout(function() {$("#blue").removeClass("blueon");}, 500);
    break;
    case "yellow":
    $("#yellow").addClass("yellowon");
    setTimeout(function() {$("#yellow").removeClass("yellowon");}, 500);
    break;
    case "green":
    $("#green").addClass("greenon");
    setTimeout(function() {$("#green").removeClass("greenon");}, 500);
    break;
  };
  i++;
  show(lvl,seq, i);
  };
};

function startTimer(){
//this is where the timer goes
};

function click(lvl, seq, active){


  var x = input.length;
  $("#red").click(function(){
    input.push("red");
    active = check(lvl, seq, input, active);
    });

  $("#blue").click(function(){
    input.push("blue");
    active = check(lvl, seq, input, active);
    });

  $("#yellow").click(function(){
    input.push("yellow");
    active = check(lvl, seq, input, active);
    });

  $("#green").click(function(){
    input.push("green");
    active = check(lvl, seq, input, active);
    });

  return active;
};


function newLevel(){
  lvl++;
  return lvl;
};

function check(lvl, seq, input, active){
  return active;
};

$(document).ready(main);
