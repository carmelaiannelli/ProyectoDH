window.addEventListener('load',function(){


    let formulario=document.querySelector('form.formularioRegistro');

    formulario.addEventListener('submit',event=>{


        nombre = document.querySelector('#name').value;
        apellido = document.querySelector('#lastName').value;
        email = document.querySelector('#email').value;
        username = document.querySelector('#username').value;
        password = document.querySelector('#password').value;
        avatar = document.querySelector('.avatar').value;
        
        passwordRegex=/.[!,@,#,$,%,^,&,*,(,),-,_]/;

        errores=[];

    
       
        if (nombre.length<2){
            errores.push(1);
            document.querySelector('#errorNombre').innerHTML ='el nombre debe tener al menos 2 caracteres';
        }
        if (apellido.length<2){
            errores.push(1);
            document.querySelector('#errorApellido').innerHTML ='el apellido debe tener al menos 2 caracteres';
        }
        if (password.length<8){
            errores.push(1);
            document.querySelector('#errorPassword').innerHTML ='la contraseña debe tener al menos 8 caracteres incluyendo caracteres especiales';
        } else if (!passwordRegex.test(password)){
            errores.push(1);
            document.querySelector('#errorPassword').innerHTML ='la contraseña debe tener caracteres especiales'
        }

        if (errores.length){
            
            event.preventDefault();

        }   
    })
})