const button = document.querySelectorAll(".circle-icono");



for(i=0; i<button.length ; i++){
    button[i].addEventListener('click',()=> { 
    document.querySelector(".footer").classList.toggle("active"); 

    })
 }

 

//   function tiempo_actual()
// {
//     const hoy = new Date();
//     const fecha = `${hoy.getDate()}-${(hoy.getMonth ()+1)}-${hoy.getUTCFullYear()}`;
   
//     const fechahora = `${fecha}`;
    
//     document.getElementById('day').innerHTML = fechahora;
    
//     setTimeout(tiempo_actual, 1000);
// }

// window.onload = function(){
//     tiempo_actual();
 

// }
