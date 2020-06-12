

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

document.addEventListener('DOMContentLoaded', function() {
    var boton2 = document.getElementById('boton2');
    // onClick's logic below:
    boton2.addEventListener('click', function() {
        mostrarExp();
    });
});


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

document.addEventListener('DOMContentLoaded', function() {
    var boton1 = document.getElementById('boton1');
    // onClick's logic below:
    boton1.addEventListener('click', function() {
        mostrarEdu();
    });
});
