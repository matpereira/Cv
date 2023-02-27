var clic=0;

document.getElementById('materias').style.display ="none";
document.getElementById('botonMaterias').onclick = function(){
    console.log("Boton capturado");
    
    if (clic==0)
        {
        document.getElementById('materias').style.display='inline';
        
        clic=1;
        }
   else
    {
       document.getElementById('materias').style.display ="none";
       
        clic=0;
    }

}

