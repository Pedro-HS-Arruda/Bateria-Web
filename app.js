for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", clique);
	function clique() {

		let btnInHT = this.innerHTML
		
		som(btnInHT)
		btnan(btnInHT)
	}
}

document.addEventListener('keydown', function(event){
	som(event.key)
	btnan(event.key)
})

function som (key){
	switch (key) {
		case 'w':
			let tom1 = new Audio ('./sounds/tom-1.mp3');
			tom1.play()
			break;
			
		
		case 'a':
			let tom2 = new Audio ('./sounds/tom-2.mp3');
			tom2.play()
			break;
		
			
		case 's':
			let tom3 = new Audio ('./sounds/tom-3.mp3');
			tom3.play()
			break;
				

		case 'd':
			let tom4 = new Audio ('./sounds/tom-4.mp3');
			tom4.play()
			break;

		
		case 'j':
			let tom5 = new Audio ('./sounds/snare.mp3');
			tom5.play()
			break;

		case 'k':
			let tom6 = new Audio ('./sounds/crash.mp3');
			tom6.play()
			break;
		

		case 'l':
			let tom7 = new Audio ('./sounds/kick-bass.mp3');
			tom7.play()
			break;
		
		default:
			break;
	}
}

function btnan(currentkey){
	let actbtn = document.querySelector('.' + currentkey)

	actbtn.classList.add('pressed')

	setTimeout( function(){
		actbtn.classList.remove('pressed')
	}, 140)
}