
// playing sound through anonymous function
// plese help me why its not working!
window.onload = function(){
	document.getElementByTagName("audio").play();
	}

var player=prompt("enter your name to play the game! :");
let playerName=player;
let count =0;
let yourScore=0;
function play() {
		var randomNUmber1=Math.floor(Math.random()*6)+1;
		var randomImages="dice"+randomNUmber1+".png";
		document.querySelectorAll("img")[0].setAttribute("src",randomImages);


		var randomeNumber2=Math.floor(Math.random()*6)+1;
		var randomImages2="dice"+randomeNumber2+".png";
		document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

		count+=randomNUmber1;
		var dScore=count;
		document.getElementById("team1").innerHTML="Dahal's score" + dScore;
			yourScore+=randomeNumber2;
		var pScore=yourScore;
		document.getElementById("team2").innerHTML="here is " + playerName+"  score " +pScore;

		if(pScore>=100){
			alert("game over "+ player +" won   totle  score: " + pScore);
			alert("refresh the page!!");
		}
		else if(dScore>=100){
			alert("game over Mr_dahal won  totle  score: " + dScore);
			alert("refresh the page!!");
		}
		else if(randomNUmber1>randomeNumber2){
			document.querySelector("h1").innerHTML="Mr_dahal won 😎!";
		}
		else if(randomNUmber1<randomeNumber2){
			document.querySelector("h1").innerHTML="wow! "+playerName+" won 😋!";
		}

		else{
			document.querySelector("h1").innerHTML="draw ⚔!";
			}
}

