function mostrarNumero(){

  let numeros = [];

   numeros.push(Number(document.getElementById("n1").value));
   numeros.push(Number(document.getElementById("n2").value));
   numeros.push(Number(document.getElementById("n3").value));
   numeros.push(Number(document.getElementById("n4").value));
   numeros.push(Number(document.getElementById("n5").value));

   let maior = numeros [0];
   let menor = numeros [0];

   let pares = 0, impares = 0, soma = 0;

   for (let i = 0; i < numeros.length; i++ ){
        let numero = numeros[i];

      if(numero>maior){
        maior = numero
      }
      
      if(numero<menor){
        menor = numero
      }

      if(numero % 2 === 0){
        pares++
      }else{
        impares++
      }

      soma = soma + numero;

   }

   
   document.getElementById("number").textContent = 
   " |maior: " + maior +
   " |menor: " + menor +
   " |impares: " + impares +
   " |pares: " + pares +
   " |soma: " + soma

   }
