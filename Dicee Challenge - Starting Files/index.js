var randomNumber1 = Math.floor(Math.random()*6 +1);
var dice="dice"+randomNumber1+".png";
var source="images/"+ dice;
var randomNumber2 = Math.floor(Math.random()*6 +1);
var dice2="dice"+randomNumber2+".png";
var source2="images/"+ dice2;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", source);
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",source2);
if(randomNumber1>randomNumber2){
    var winner="🚩 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    var winner="Player 2 wins! 🚩";
}
else{
    var winner="Draw!";
}
document.querySelector("h1").innerHTML=winner
