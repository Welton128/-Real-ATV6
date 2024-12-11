let entre0e100 = 0, entre101e200 = 0, maioresQue200 = 0;
for (let i = 0; i < 20; i++) {
  let numero = parseInt(prompt("Digite um número:"));
  if (numero >= 0 && numero <= 100) {
    entre0e100++;
  } else if (numero >= 101 && numero <= 200) {
    entre101e200++;
  } else if (numero > 200) {
    maioresQue200++;
  }
}
console.log("Números entre 0 e 100:", entre0e100);
console.log("Números entre 101 e 200:", entre101e200);
console.log("Números maiores que 200:", maioresQue200);
