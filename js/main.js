 const btn=document.querySelector('button');
 const body=document.querySelector('body');

 const colores=['blue','yellow','geem','white'];

 btn. addEventListener('click',fondo);
 function fondo(btn){
    const indice=parseInt(Math.random()*colores-length);
    body.style.backgrounColor=colores[indice];
 }

    

    



       
