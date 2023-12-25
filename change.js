//stylings
document.querySelector("#context").style.position = "absolute";
document.querySelector("#context").style.top="50%";
document.querySelector("#context").style.left="50%";
document.querySelector("#context").style.fontFamily="cursive";
//button
document.querySelector("#btn").style.position = "absolute";
document.querySelector("#btn").style.top="60%";
document.querySelector("#btn").style.left="50%";
//functionality
document.addEventListener("DOMContentLoaded", allFunctions);
function allFunctions(){
	const fonts=["Arial", "Times New Roman", "Courier New","Georgia", "Comic Sans MS"];
	let currentFontIndex=0;
document.querySelector("#btn").addEventListener("click", changeFont);
function changeFont(){
document.querySelector("#context").style.fontFamily=fonts[currentFontIndex];
currentFontIndex=(currentFontIndex+1)%fonts.length;
}
changeFont();
}
allFunctions();