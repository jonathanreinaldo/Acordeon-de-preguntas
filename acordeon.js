                        
const respuesta0=document.getElementById("respuesta0");
const respuesta1=document.getElementById("respuesta1");
const respuesta2=document.getElementById("respuesta2");
const respuesta3=document.getElementById("respuesta3");
 
const logoPlus=document.getElementById("logoPlus")
const logoMinus=document.getElementById("logoMinus")

const logos = [logoPlus, logoMinus]
const respuestas = [respuesta0, respuesta1, respuesta2, respuesta3]

function boton0() {
      
     if( respuestas[0].style.display == "none"){
        
          respuestas[0].style.display = "block"
         logoPlus.style.display="none"
          logoMinus.style.display="block"

     }else{
         respuestas[0].style.display = "none"
            logoPlus.style.display="block"
          logoMinus.style.display="none"
          
     } 
}
 
 function boton1(){
     if( respuestas[1].style.display =="none" ){
        
         respuestas[1].style.display="block"
            logoPlus.style.display="none"
          logoMinus.style.display="block"

     }else{
         respuestas[1].style.display = "none"
            logoPlus.style.display="block"
          logoMinus.style.display="none"
     }

 }

 function boton2(){
     if( respuestas[2].style.display =="none" ){
        

         respuestas[2].style.display="block"
          logos.style.display="none"
          logos.style.display="block"

     }else{

         respuestas[2].style.display = "none"
          logos.style.display="none"
          logos.style.display="block"
     }

 }

 function boton3(){
     if( respuestas[3].style.display =="none" ){
        
         respuestas[3].style.display="block"
          logos.style.display="none"
          logos.style.display="block"

     }else{
         respuestas[3].style.display = "none"
          logos.style.display="none"
          logos.style.display="block"
     }

 }
