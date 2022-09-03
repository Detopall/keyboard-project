"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
	document.addEventListener("keydown", addColor);
	document.addEventListener("keyup", removeColor);
}

function addColor(e){
	const allKeys = document.querySelectorAll("[data-code]");
	allKeys.forEach(key => {
		if (parseInt(key.getAttribute("data-code")) === e.keyCode){
			key.classList.add("yellow");
		}
	});
}

function removeColor(e){
	const allKeys = document.querySelectorAll("[data-code]");
	allKeys.forEach(key => {
		if (parseInt(key.getAttribute("data-code")) === e.keyCode){
			key.classList.remove("yellow");
		}
	});
}

