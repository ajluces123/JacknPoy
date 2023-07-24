// README IM THE ONLY ONE WHO CAN UNDERSTAND THIS CODE!!!  HAHAHAHA
document.getElementById("help").addEventListener('click', () => {
  alert("JacknPoy is a Filipino-based game inspired by the famous game Rock, Paper, and Scissors, developed by Andrew Julao. How to play? Just choose your best pick one at a time, and then the computer AI picks a random item to counter your attack. The first one to reach a score of 10 points is the winner of the game. Good luck!")
})

console.log("hello world");
var list = ["bato.png","papel.png","gunting.png"]; //list of images stored in array
var r = document.getElementById("result");
var p = document.getElementById("demo");
const audio = new Audio("pixel.mp3");
const pt = document.querySelector(".p1");
const p1 = document.getElementById("p-score");
const c1 = document.getElementById("c-score");
const t = document.getElementById("timer");
const c = document.getElementById("countdown");
const name = document.getElementById("name");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const user = document.querySelector(".user");
const wrap = document.querySelector(".wrap");
const s_hide = document.querySelector(".score-hide");
const player = document.querySelector(".player");



let current = 0; //default score of player
let currents = 0; //default score of computer 
var time = 4;

function start() {
  c.innerHTML = time;
  c.style.fontSize = "5rem";
  c.style.color = "red";
}
function call_p1() {
  p1.innerHTML = current;
  p1.style.color = 'blue';
}
function call_c1() {
  c1.innerHTML = currents;
    c1.style.color = 'red';
}

//actions to hide or show elements when the user enter their name
document.getElementById("enter").addEventListener('click',() => {
  audio.play();
  audio.loop = "true";
  if(name.value == ""){
    pt.innerHTML = "Player:";
  }
  else {
  name.value.innerHTML = "";
  t.innerHTML = name.value;
  pt.innerHTML = name.value + ':';
  }
  user.style.display = "none";
  c.style.display= "block";
  wrap.style.display = "block";
  s_hide.style.display = "block";
  
  function show() {
  for(i = 0; i <= 1; i++) {
    time -= i;
    start();
if (time <= -1) {
  c.innerHTML = ""
  break
  
}
}}
setInterval(show,1000);
})
//actions for bato when the user pick bato img.
const bato = document.getElementById("bato").addEventListener('click', () => {
    const bot = list[Math.floor(Math.random() * list.length)];
  console.log("bato");
    user.style.display = "none";
  if (bot == list[0]) {
    r.innerHTML = "DRAW!";
    r.style.color = 'black';
    r.style.transform = "scale(1.2)";
    r.style.transition = ".3s";
  }
  else if (bot == list[1]) {
    for (let i = 0; i <= 1; i++) {
      currents += i;
      call_c1();
      r.innerHTML = "YOU LOSE!";
      r.style.color = 'red';
      r.style.transform = "scale(1.2)";
      r.style.transition = ".3s";
    }
  }
  else if (bot == list[2]) {
  for (let i = 0; i <= 1; i++) {
    current += i;
    call_p1();
    r.innerHTML = "YOU WIN!";
    r.style.color = 'blue';
    r.style.transform = "scale(1.2)";
    r.style.transition = ".3s";
  }
  }
  
 function reload() {
  window.location.reload(true);
 }
 if (10 <= current) {
   if (name.value == "") {
      alert("Player 1 WIN! The game will automatically refresh in 5 seconds");
      setInterval(reload,5000);
    wrap.style.display = "none";
    player.style.display = "none";
    win.style.display = "block";
    p.style.display = "none";
    }
    else {
  alert(name.value + " WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
        wrap.style.display = "none";
        player.style.display = "none";
        win.style.display = "block";
        p.style.display = "none";
       setInterval(reload,5000);
  }}
  else if (10 <= currents) {
    
    alert("Computer WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
        wrap.style.display = "none";
        player.style.display = "none";
        lose.style.display = "block";
         p.style.display = "none";
       setInterval(reload,5000);

}
   var show = p.src = bot;
  p.style.width = "7rem";
  p.style.backgroundColor = "#C55858";
  p.style.boxShadow = "0 2px 5px 1px #9F9F9F";
  p.style.transform = "scale(1.2)";
  p.style.transition = '.3s';
})
//actions for papel when the user pick papel img.
const papel = document.getElementById("papel").addEventListener('click', () => {
  const bot = list[Math.floor(Math.random() * list.length)];
console.log("papel");
  user.style.display = "none";
if (bot == list[1]) {
  r.innerHTML = "DRAW!";
     r.style.color = 'black';
  r.style.transform = "scale(1.2)";
  r.style.transition = ".3s";
}
else if (bot == list[2]) {
  for (let i = 0; i <= 1; i++) {
    currents += i;
    call_c1();
    r.innerHTML = "YOU LOSE!";
          r.style.color = 'red';

      r.style.transform = "scale(1.2)";
    r.style.transition = ".3s";
  }
}
else if (bot == list[0]) {
  for (let i = 0; i <= 1; i++) {
    current += i;
    call_p1();
    r.innerHTML = "YOU WIN!";
    r.style.transform = "scale(1.2)";
        r.style.color = 'blue';

    r.style.transition = ".3s";
  };
}
function reload() {
  window.location.reload(true);
 }
 if (10 <= current) {
   if (name.value == "") {
      alert("Player 1 WIN! The game will automatically refresh in 5 seconds");
      wrap.style.display = "none";
      player.style.display = "none";
      win.style.display = "block";
      p.style.display = "none";
      setInterval(reload,5000);
    }
    else {
  alert(name.value + " WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
        wrap.style.display = "none";
        player.style.display = "none";
        win.style.display = "block";
        p.style.display = "none";
       setInterval(reload,5000);
  }}
  else if (10 <= currents) {
    alert("Computer WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
       wrap.style.display = "none";
       player.style.display = "none";
       lose.style.display = "block";
       p.style.display = "none";
       setInterval(reload,5000);
  }
var show = p.src = bot;
p.style.width = "7rem";
p.style.backgroundColor = "#C55858";
  p.style.transform = "scale(1.2)";
  p.style.boxShadow = "0 2px 5px 1px #9F9F9F";

p.style.transition = '.3s';
p.innerHTML = bot;

})
//actions for gunting when the user pick gunting img.
const gunting = document.getElementById("gunting").addEventListener('click', () => {
  const bot = list[Math.floor(Math.random() * list.length)];
  console.log("gunting");
    user.style.display = "none";
  if (bot == list[2]) {
    r.innerHTML = "DRAW!";
        r.style.color = 'black';

    r.style.transform = "scale(1.2)";
    r.style.transition = ".3s";
  }
  else if (bot == list[0]) {
  for (let i = 0; i <= 1; i++) {
      currents += i;
      call_c1();
      r.innerHTML = "YOU LOSE!";
      r.style.color = 'red';
      r.style.transform = "scale(1.2)";
      r.style.transition = ".3s";
    }
  }
  else if (bot == list[1]) {
    for (let i = 0; i <= 1; i++) {
    current += i;
    call_p1();
    r.innerHTML = "YOU WIN!";
    r.style.color = 'blue';
    r.style.transform = "scale(1.2)";
    r.style.transition = ".3s";
  }
  }
  function reload() {
  window.location.reload(true);
 }
 if (10 <= current) {
   if (name.value == "") {
     alert("Player 1 WIN! The game will automatically refresh in 5 seconds");
       wrap.style.display = "none";
       player.style.display = "none";
       win.style.display = "block";
       p.style.display = "none";
     setInterval(reload, 5000);
   }
   else {
  alert(name.value + " WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
        wrap.style.display = "none";
        player.style.display = "none";
        win.style.display = "block";
        p.style.display = "none";
       setInterval(reload,5000);
  }}
else if (10 <= currents) {
    alert("Computer WIN! The game will automatically refresh in 5 seconds");
  r.innerHTML = "GAME OVER!";
        wrap.style.display = "none";
        player.style.display = "none";
        lose.style.display = "block";
        p.style.display = "none";
       setInterval(reload,5000);
  }

  var show = p.src = bot;
  p.style.width = "7rem";
    p.style.transform = "scale(1.2)";
  p.style.backgroundColor = "#C55858";
  p.style.transition = '.3s';
  p.style.boxShadow = "0 2px 5px 1px #9F9F9F";

//  p.innerHTML = bo t;
});

