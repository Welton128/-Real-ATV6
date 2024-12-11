let maioresQue8 = 0;
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero > 8) {
    maioresQue8++;
  }
}
console.log("O número de números maiores que 8 é:", maioresQue8);
