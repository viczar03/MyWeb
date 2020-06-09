

function mostrarExp(){

	var clic = 1;
	var div = document.getElementById("caja1");
	var div2 = document.getElementById("caja2");
	var btn1 = document.getElementById("boton1");
	var btn2 = document.getElementById("boton2"); 

   if(clic==1){

   div.style.display = "none";
   div2.style.display = "block";
   btn1.style.background = "#333333";
   btn2.style.background = "#3369e7";

   clic = clic + 1;

   }
}

function mostrarEdu(){

	var clic = 1;
	var div = document.getElementById("caja1");
	var div2 = document.getElementById("caja2");
	var btn1 = document.getElementById("boton1");
	var btn2 = document.getElementById("boton2");

   if(clic==1){
   div2.style.display = "none";
   div.style.display = "block";
   btn1.style.background = "#3369e7";
   btn2.style.background = "#333333";

   clic = clic + 1;

   }

}

function limpiarFormulario() {
    document.getElementById("miformulario").reset();
}

window.onscroll = function(){
   
   if (document.documentElement.scrollTop > 100) {
      document.querySelector('.contenedor_up')
      .classList.add('show');
   }else{
      document.querySelector('.contenedor_up')
      .classList.remove('show');
   }
}

document.querySelector('.contenedor_up')
.addEventListener('click', () ->{
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});