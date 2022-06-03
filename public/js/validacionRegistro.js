window.addEventListener('load',function(){


    let formulario=document.querySelector('form.formularioRegistro');

    formulario.addEventListener('submit',event=>{

        nombre = document.querySelector('.name').value;
        apellido = document.querySelector('.lastName').value;
        email = document.querySelector('.email').value;
        username = document.querySelector('.username').value;
        password = document.querySelector('.password').value;
        avatar = document.querySelector('.avatar').value;
        
        passwordRegex=/.[!,@,#,$,%,^,&,*,(,),-,_]/;

        errores=[];

       
        if (nombre.length<2){
            errores.push('el nombre debe tener al menos 2 caracteres');
        }
        if (apellido.length<2){
            errores.push('el apellido debe tener al menos 2 caracteres');
        }
        if (password.length<8){
            errores.push('la contraseña debe tener al menos 8 caracteres');
        }
        if (!passwordRegex.test(password)){
            errores.push('la contraseña debe tener caracteres especiales')
        }

        if (errores.length){
            event.preventDefault();

            let imprimirErrores=document.querySelector('.errores');
            imprimirErrores.innerHTML = errores;
        }   
    })
})