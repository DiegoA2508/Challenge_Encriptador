let numeroMayor = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMayor)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVez = 'vez'
let maximoIntentos = 20;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){

    numeroUsuario = prompt(`Me indicas un número entre 1 y ${numeroMayor} por favor:`);

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor")
        }
        intentos ++;
        //palabraVez = 'veces';
        if(intentos > maximoIntentos){

            alert(`Llegaste al numero maximo de ${maximoIntentos} Intentos`);
            break;

        }
    }
}