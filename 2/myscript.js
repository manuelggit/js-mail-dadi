// Gioco dei dadi, chi fa di più vince;

var numA, numB, sottrazione

numA = Math.floor((Math.random() * 6) + 1);

console.log(numA);

numB = Math.floor((Math.random() * 6) + 1);

console.log(numB);

sottrazione = numA - numB;

console.log('uguali')

if(sottrazione > 0) {
  console.log(numA + ' > ' + numB + ' : Vince il giocatore A');
} else if (sottrazione < 0) {
  console.log(numA + ' < ' + numB + ' : Vince il giocatore B');
}
