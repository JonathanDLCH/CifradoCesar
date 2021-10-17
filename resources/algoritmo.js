function cifrarCesar(idMensaje,idClave){
    //variables
    var msgEncriptado="";
    var letraencriptada=0;

    //Obtenemos los valores del mensaje
    var clave = parseInt(document.getElementById(idClave).value);
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();
    //Verificacion de variables
    //console.log(typeof(mensaje)+" "+typeof(clave));
    //console.log(mensaje+" "+clave);

    //Codificación
    for (var i=0; i<mensaje.length; i++) {
        letraencriptada=mensaje.charCodeAt(i)+clave; //Obtenemos el ASCII ya con el corrimiento
        
        if(letraencriptada>122){
            //Ya termino el alfabeto y regresa a la a
            var restante = letraencriptada-122;
            msgEncriptado+=String.fromCharCode(96+restante); //Suma desde A
        }else{
            msgEncriptado+=String.fromCharCode(letraencriptada);
        }
    }

    document.getElementById("resultado").innerText ="Resultado: "+ msgEncriptado;
    console.log(msgEncriptado);
    return msgEncriptado;
}

function desCifrarCesar(idMensaje,idClave){
    //variables
    var msgdesEncriptado="";
    var letradesEncriptada=0;

    //Obtenemos los valores del mensaje
    var clave = parseInt(document.getElementById(idClave).value);
    var mensaje = document.getElementById(idMensaje).value.toLowerCase();

    //Desifrar
    for (var i=0; i<mensaje.length; i++) {
        letradesEncriptada=mensaje.charCodeAt(i)-clave; //Obtenemos el ASCII quitando el corrimiento

        if(letradesEncriptada<97){
            //Ya termino el alfabeto y regresa a la z
            var restante = 97-letradesEncriptada;
            msgdesEncriptado+=String.fromCharCode(123-restante); //resta desde Z
        }else{
            msgdesEncriptado+=String.fromCharCode(letradesEncriptada);
        }
    }

    document.getElementById("resultado").innerText ="Resultado: "+ msgdesEncriptado;
    console.log(msgdesEncriptado);
    return msgdesEncriptado;
}

//document.getElementById("cifrar").addEventListener('click',cifrarCesar(document.getElementsByName("mensaje"),document.getElementsByName("clave")))