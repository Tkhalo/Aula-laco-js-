let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    // console.log(contador);
    
    if (contador === 0) {
        console.log("O número atual é ZERO.")
    } else if (contador % 2 == 0 && contador > 5)  {
        console.log("O número " + contador + " é par e maior que 5.")        
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR.")
    } else {
        console.log("O número " + contador + " é ÍMPAR.")

    }
            
    }

                
/*

Operadores lógicos
AND  &&
TRUE && TRUE -> true toda a sentença é verdadeira
TRUE && FALSE -> false
FALSE && TRUE -> false
FALSE && FALSE -> false

OR
Compara duas sentenças, se somente uma for verdadeira, tudo é verdadeiro
true || true -> true
true || false -> true
false || true -> true
false || false -> false

NOT (operador unário)
!true -> é igual a falso (not true = false)
!false -> é igual a verdadeiro (not false = true)


exemplo:
if (!usuario){
    console.log("Resposta vazia")
}

Tabela verdade
Determina o comportamento do operador lógico
Valores Booleanos verificados
True or False


*/