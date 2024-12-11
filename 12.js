let pares = 0;
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero % 2 === 0) {
    pares++;
  }
}
console.log("O número de números pares é:", pares);
