                        
const respuesta0 = document.getElementById("respuesta0")
const respuesta1 = document.getElementById("respuesta1")
const respuesta2= document.getElementById("respuesta2")
const respuesta3= document.getElementById("respuesta3")

const logoNegativo0 = document.getElementById("logoMinus0")
const logoPositivo0 = document.getElementById("logoPlus0")

const logoNegativo1 = document.getElementById("logoMinus1")
const logoPositivo1 = document.getElementById("logoPlus1")

 const logoNegativo2 = document.getElementById("logoMinus2")
 const logoPositivo2 = document.getElementById("logoPlus2")

 const logoNegativo3 = document.getElementById("logoMinus3")
 const logoPositivo3 = document.getElementById("logoPlus3")

const respuestas = [respuesta0, respuesta1, respuesta2, respuesta3 ]
 
   function botn0(){

       if( respuestas[0].style.display == "block"){
           respuestas[0].style.display = "none" 

            logoPositivo0.style.display = "block"
           logoNegativo0.style.display = "none"
          
      }else{
            respuestas[0].style.display = "block"
            logoPositivo0.style.display = "none"
             logoNegativo0.style.display = "block"
      }
  };

  function botn1(){
     if( respuestas[1].style.display == "block"){
           respuestas[1].style.display = "none" 

            logoPositivo1.style.display = "block"
           logoNegativo1.style.display = "none"
          
      }else{
            respuestas[1].style.display = "block"
            logoPositivo1.style.display = "none"
             logoNegativo1.style.display = "block"
      }
  }

   function botn2(){
       if( respuestas[2].style.display == "block"){
           respuestas[2].style.display = "none" 

            logoPositivo2.style.display = "block"
           logoNegativo2.style.display = "none"
          
      }else{
            respuestas[2].style.display = "block"
            logoPositivo2.style.display = "none"
             logoNegativo2.style.display = "block"
      }

   }

    function botn3(){
      if( respuestas[3].style.display == "block"){
           respuestas[3].style.display = "none" 

            logoPositivo3.style.display = "block"
           logoNegativo3.style.display = "none"
          
      }else{
            respuestas[3].style.display = "block"
            logoPositivo3.style.display = "none"
             logoNegativo3.style.display = "block"
      }

   }
 
 
