window.addEventListener('load',function(){
    
    let formulario=document.querySelector('form.eliminarPto');

    formulario.addEventListener('submit',event=>{
        confirmacion= this.confirm('Estas seguro de que queres eliminar el producto?');
        if (!confirmacion){
            event.preventDefault();
        }
    })


});