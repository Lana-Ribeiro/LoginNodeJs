
// http://localhost:3000/curso/2


const login = {
    'user':["user1","user2","user3","user4","user5","user6"],
    'senha':["123","145","156","167","178","189"]
}

var tentativalogin = "user1";
var tentativasenha = "123";
var logado = false;
var senhavalida = false;


    for(var i;i<login.user.leght; i++){

        if(tentativalogin===login.user[i]){
            logado = true;

         if (tentativasenha === login.senha[i]){
            senhavalida = true;
        }
    }
    }

 
 

    if (logado && senhavalida){
        console.log("usuario OK");

    } else {
         if(!logado){
        console.log("usuario não cadastrado no BD");

    } else if(!senhavalida){
        
        console.log("senha inválida");
    }
}

