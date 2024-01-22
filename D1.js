/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principai datatype o valori assegnabili ad una variabile sono: 
string, number, boolean, undefined, null, NaN,
la principale caratteristica di string è che si inserisce con le "" e serve a indicare un carattere (es: corpo, nome, ecc..) se vi si inseriscono dei numeri, non vengono identificati come numeri ma come caratteri.
number serve per indicare un valore in apporto numerico senza utilizzare le ""(es: 100, 0, 88, 65.12, 90.45).
boolean o booleani serve semplicemente per indicare un valore true o un valore false.
undefined rappresenta l'assenza di valore in una variabile per esempio un inizializzazione vuota e perciò andrebbe inserito il datatype.
null rappresenta l'assenza di valore intenzionale in una variabile che è stata modificata e quindi resa così apposta.
NaN significa "Not a Number" significa perciò che hai provato per esempio a sommare un numero ad una stringa, ed è un errore perciò ti uscira fuori un NaN ossia (not a number).
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Marco"; 
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let num3 = num1 + num2;
console.log(num3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = "Peroni";
// const mySur = "Marco";
// mySur = "Peroni";
// const indica una costante e non può essere variata nel tempo.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());


