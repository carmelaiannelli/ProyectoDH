window.addEventListener('load',function(){

    let formulario=document.querySelector('form.formularioProducto');

    formulario.addEventListener('submit',event=>{

        nombreProducto = document.querySelector('.productName').value;
        descripcion = document.querySelector('.productDescription').value;

        

        errores=[];

       
        if (nombreProducto.length<5){
            errores.push('el nombre debe tener al menos 5 caracteres');
        }
        if (descripcion.length<20){
            errores.push('la descripcion debe tener al menos 20 caracteres');
        }
       
        if (errores.length){
            event.preventDefault();

            let imprimirErrores=document.querySelector('.errores');
            imprimirErrores.innerHTML = errores;
        }   
    })
})