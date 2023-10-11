/*Alejandro Ruiz Prieto
https://github.com/Alesso-ai/Examen_Alejandro_Ruiz_DWEC_DIW.git
*/

/*Obligo al js a cargar el html si o si con el DOMcontentLoaded*/
document.addEventListener("DOMContentLoaded", function(){

    /*He creado 4 constantes 1 para calcular en el boto y
    3 para la diagonal, area y perimetro cogiendolo el id de html*/

    const calcular=document.getElementById("calcular");
    const area=document.getElementById("area");
    const perimetro=document.getElementById("perimetro");
    const diagonal=document.getElementById("diagonal");

    /* Creo la funcion para el boton para que me escuche 
    cuando hago click, es decir que funcione el click*/ 

    calcular.addEventListener("click", function() {

     /* Dos constantes LOCALES para la longitud y la anchura los meto como
     valores.*/
    const longitud = parseFloat(document.getElementById("longitud").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
        

    if(!isNaN(ancho) && !isNaN(longitud)){

       
         /*Area*/ 
        area.textContent = longitud*ancho;
        area.textContent = "Tu area es de : " + area.textContent;

        /*Perimetro*/ 
        perimetro.textContent =  2 * (longitud + ancho);
        perimetro.textContent = "Tu perimetro es de : " + perimetro.textContent;
 
         /*Diagonal*/ 
        diagonal.textContent =  (Math.sqrt(Math.pow(ancho ,2) + Math.pow(longitud,2)));
        diagonal.textContent = "Tu diagonal es de : " + diagonal.textContent;

        /*Se que para redondear a 2 digitos se usa el .toFixed(2) pero no se donde meterlo, me volvi loco, y te lo puse aqui.*/ 
        

    }else{

        /*Texto de error en caso de que no se ingrese nada*/ 
        area.textContent="Por favor, ingrese valores válidos."

    }
    
   
    });
});
