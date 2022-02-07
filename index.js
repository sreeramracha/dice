randomNumber1=Math.floor(Math.random()*6)+1
randomNumber2=Math.floor(Math.random()*6)+1

var imageOne=document.querySelector("img.img1")
var imageTwo=document.querySelector("img.img2")

imageOne.setAttribute("src","https://github.com/sreeramracha/dice/blob/main/images/dice"+randomNumber1+".png?raw=true");
imageTwo.setAttribute("src","https://github.com/sreeramracha/dice/blob/main/images/dice"+randomNumber2+".png?raw=true");

var heading=document.querySelector("h1");

if (randomNumber1>randomNumber2){
    heading.innerHTML="<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-in-hole_26f3.png' alt=''>Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
    heading.innerHTML="Player 2 Wins!<img src=\"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-in-hole_26f3.png\" alt=\"\">";
}
else{
    heading.innerHTML="<img src=\"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-in-hole_26f3.png\" alt=\"\">Draw!<img src=\"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/flag-in-hole_26f3.png\" alt=\"\">";
}

