randomnumber1= (Math.floor(Math.random() * 6))+1;
randomnumber2=Math.floor(Math.random()*6)+1;
const abc2 = document.querySelector(".img2");
const abc1 = document.querySelector(".img1");
let dc="dice"+randomnumber1+".png";
let dc2="dice"+randomnumber2+".png";
abc1.setAttribute("src",dc);
abc2.setAttribute("src",dc2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 won";
}
else{
    document.querySelector("h1").innerHTML="player 2 won";
}
