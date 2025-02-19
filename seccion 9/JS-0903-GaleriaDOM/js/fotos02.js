window.onload = function(){
	var fotos = document.querySelector("div");
	
	//Listener
	fotos.addEventListener("click",function(e){
		if(e.target.tagName==="IMG"){
			console.log("Pulso una imagen");
		} else { 
			console.log("NO pulso una imagen");
		}
	}, false);
	
}