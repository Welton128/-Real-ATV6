let soma = 0;
while (true) {
  let numero = parseInt(prompt("Digite um número (ou um número negativo para encerrar):"));
  if (numero < 0) {
    break;
  }
  soma += numero;
}
console.log("A soma dos números é:", soma);