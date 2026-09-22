function mostrarNumero(){

    const nome = document.getElementById("nome");
    const numero1 = Number(document.getElementById(n1));
    const numero2 = Number(document.getElementById(n2));
    const numero3 = Number(document.getElementById(n3));
    const numero4 = Number(document.getElementById(n4));
    const numero5 = Number(document.getElementById(n5));

    const total = (numero1 + numero2 + numero3 + numero4 + numero5);

    let situacao

    if(numero1 > numero2){
        situacao = "Numero 1 é o maior";
 
    } else if(numero2 > numero3){
        situacao = "Numero 2 é o maior";
 
    } else if(numero3 > numero4){
        situacao = "Numero 1 é o maior";
 
    } else if(numero4 > numero5){
        situacao = "Numero 1 é o maior";
 
    } else {
        situacao = "Esse numero é menor";
    }

    const num1 = (numero1 / 2);
    const num2 = (numero2 / 2);
    const num3 = (numero3 / 2);
    const num4 = (numero4 / 2);
    const num5 = (numero5 / 2);
    

    if((num1 == 0) || (num2 == 0 ) || (num3 == 0) || (num4 == 0) || (num5 == 0)){
        situacao = "Esse número é par";
    } else if((num1 = 1) || (num2 = 1) || (num3 = 1) || (num4 = 1) || (num5 = 1)){
        situacao = "Esse número é ímpar";
}

    document.getElementById("number").textContent = 

"Nome : " + nome +
"Numero 1: " + numero1 +
"Numero 2: " + numero2 +
"Numero 3: " + numero3 +
"Numero 4: " + numero4 +
"Numero 5: " + numero5 +
"Total: " + total +
"Situação: " + situacao

}