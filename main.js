var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay'); 
btn.onclick = function(){
	var className = this.getAttribute('class');
	if(className === 'dark'){
		this.setAttribute('class','lighten');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}else{
		this.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
};

/* Looping through images */

var displayImage = function(event){
	displayedImage.src = event.target.src;
}

for(var i = 0; i<5 ;i++){
  var imgPath = "images/pic";	
  var newImage = document.createElement('img');
  newImage.setAttribute('src', imgPath+(i+1)+".jpg");
  newImage.onclick = displayImage;
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

