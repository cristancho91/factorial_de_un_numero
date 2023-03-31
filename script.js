let resultado = document.getElementById("resultado");

const encontrarFactorial = () =>{

    let numero = document.getElementById("numero").value;

    if(numero < 0){
        resultado.innerHTML = "Error!! el numero factorial negativo no existe";

    }else if(numero == 0){
        resultado.innerHTML = `El factorial de ${numero} es 1.`; 
    }else{
        let factorial = 1;
        for(let i = 1; i <= numero; i++){
            factorial *= i;
        }
        // console.log(factorial)
        resultado.innerHTML = `El factorial de ${numero} es ${factorial}.`
    }

    resultado.style.display= "block";
    
    
}