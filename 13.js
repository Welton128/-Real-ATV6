let entre0e100 = 0;
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero >= 0 && numero <= 100) {
    entre0e100++;
  }
}
console.log("O número de números entre 0 e 100 é:", entre0e100);
