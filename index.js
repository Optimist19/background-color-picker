const colors = ["green", "pink", "purple", "yellow", "brown"]

let colorTitle = document.getElementById('color')
let btn = document.getElementById('btn')

// colors[] is changed to be a function which is randomColor, we cannot hard-code the color picking color[1] etc



btn.addEventListener("click", function(){
	
	let randomNumber = randomColor()
	console.log(randomNumber)
	
	document.body.style.backgroundColor = colors[randomNumber]
	colorTitle.innerText = colors[randomNumber]
	
})

function randomColor(){
	return Math.floor(Math.random() * colors.length)
}
