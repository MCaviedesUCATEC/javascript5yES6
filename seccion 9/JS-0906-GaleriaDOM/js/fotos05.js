window.onload = function(){
	var fotos = document.querySelector("div");
	
	//Listener
	fotos.addEventListener("click",function(e){
		if(e.target.tagName==="IMG"){
			var fondoNegro = document.createElement("div");
			fondoNegro.id = "overlay";
			document.body.appendChild(fondoNegro);
			
			//Darle estilo al fondo
			fondoNegro.style.position="absolute";
			fondoNegro.style.top = 0;
			fondoNegro.style.backgroundColor = "rgba(0,0,0,0.5)";
			fondoNegro.style.cursor = "pointer";
			
			//
			fondoNegro.style.width = window.innerWidth+"px";
			fondoNegro.style.height = window.innerHeight+"px";
			fondoNegro.style.top = window.pageYOffset+"px";
			fondoNegro.style.left = window.pageXOffset+"px";
			
			//Crear la imagen
			var archivoMini = e.target.src;
			//console.log(archivoMini);
			var archivo = archivoMini.substr(archivoMini.length-10, 10);
			//console.log(archivo);
			var imagenGrande = "imagenes/fondos/"+archivo;
			//console.log(imagenGrande);
			var imagen = document.createElement("img");
			imagen.id = "imagen";
			imagen.src = imagenGrande;
			imagen.style.display = "block";
			imagen.style.position = "absolute";
			
			imagen.addEventListener("load", function(){
				centrar(this);
				fondoNegro.appendChild(imagen);
			}, false);
			
			imagen.addEventListener("click", function(){
				if(fondoNegro){
					fondoNegro.parentNode.removeChild(fondoNegro);	
				}
			}, false);
			
		} else { 
			console.log("NO pulso una imagen");
		}
	}, false);
	
	function centrar(imagen){
		var xx = (window.innerWidth - imagen.width)/2;
		var yy = (window.innerHeight - imagen.height)/2;
		imagen.style.top = yy+"px";
		imagen.style.left = xx+"px";
		return imagen;
		
	}
	
}