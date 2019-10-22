// // Gioco dei dadi, chi fa di più vince;
//
// // definizione delle variabili
//
// var numA, numB, sottrazione
//
// // chiedo di lanciare i dadi al giocatore A
//
// function A() {
//   numA = Math.floor((Math.random() * 6) + 1);
//   document.getElementById("js_A").innerHTML = numA;
// console.log(numA);
// };
//
// // chiedo di lanciare i dadi al giocatore B
//
// function B() {
//   numB = Math.floor((Math.random() * 6) + 1);
//   document.getElementById("js_B").innerHTML = numB;
// console.log(numB);
// };
//
// // cosa succede in caso di pareggio
//
// // cosa succede se qualcuno vince
//
// if(numA > numB) {
//   console.log(numA + ' > ' + numB + ' : Vince il giocatore A');
//   document.getElementById('esito').innerHTML = 'Vince il giocatore A';
// } else if (numA < numB) {
//   console.log(numA + ' < ' + numB + ' : Vince il giocatore B');
//   document.getElementById('esito').innerHTML = 'Vince il giocatore B';
// }

var numA = Math.floor((Math.random() * 6) + 1);

var numB = Math.floor((Math.random() * 6) + 1);

console.log('A:', numA, ' B:', numB);

if(numA > numB) {
  console.log('Vince A');
} else if(numA < numB) {
  console.log('Vince B')
} else {
  console.log('Pareggio!')
}
