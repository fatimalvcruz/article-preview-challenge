const button = document.querySelectorAll(".circle-icono");



for(i=0; i<button.length ; i++){
    button[i].addEventListener('click',()=> { 
    document.querySelector(".footer").classList.toggle("active"); 

    })
 }

 

