var app = (function(){

	var stoke = ["img/im1.png", "img/im2.png", "img/im3.jpg", "img/im4.jpg", "img/im5.jpg"];
	
	var img,index=0,boutonpause,iconchange,newicon,autOplay,x,textContent
	
	const html = {}
	const start = function(){
		img = document.getElementById("img");
		img.src=stoke[0]
		textContent = document.getElementById("infobule")
		html.button1 = document.getElementById('boutonafter');
		html.button2 = document.getElementById('boutonbefore');
		newicon=null

		html.button1.addEventListener('click',sliderNext)
		html.button2.addEventListener('click',sliderPrevuis)

		boutonpause = document.getElementById('boutonpause')
		boutonplay = document.querySelector('.fa-play')
		iconchange = document.getElementById('iconchange')

		boutonplay.addEventListener('click',function(){

			autOplay("auto",1000)

			newicon = document.createElement('i')
			boutonpause.appendChild(newicon)

			newicon.classList.add("fa")
			newicon.classList.add("fa-pause")
			newicon.classList.add("fa-2x")
			iconchange.remove(".fa-play");

			newicon.addEventListener('click',function(){

				
				clearInterval(x)
				iconchange.classList.add("fa-play");

				boutonpause.appendChild(iconchange)

				this.remove(".fa-pause");

			})

		})

	}

	var sliderNext = function(){

		if(index === stoke.length -1)
		{
			index = 0
		}else
		{
			index++;
		}

		changeiMG()
	}

	var sliderPrevuis = function(){

		if(index === 0)
		{
			index = stoke.length -1
		}else
		{
			index--
		}


		changeiMG()
	}

	var changeiMG = function(){

		img.src = stoke[index]
	}

	window.addEventListener("DOMContentLoaded",start)

	// var slide = () => (index === stoke.length - 1 ) ? index = 0 : index++ 


	var autOplay = function(auto,time){

		

		if(auto === "auto"){

			x = setInterval(sliderPrevuis,time)
		}

	}

	var log = function(element){

		console.log(element)

		return element

	}


}())