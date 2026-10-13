/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma',
};

console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete persona.eta;
persona.email = 'email';
console.log(persona);


/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utente = {
   nome: 'Paolo',
   cognome: 'Verdi',
   indirizzo: {
      via: 'Via Caduti sul Lavoro 15',
      citta: 'Roma',
      cap: '00100',
   },
};

console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*persona.nome = 'nome';
console.log(persona['nome']);*/

//sopra c'è l'esercizio in commento come l'ho fatto io, sotto è quello giusto, perché si richiede una variabile chiave = 'nome' che non avevo messo
const persona = {
   nome: 'Paoloino',
   cognome: 'Paperino',
   eta: 80,
   citta: 'Paperopoli'

};



const chiave = 'nome'
console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* A circa 18 minuti della registrazione pomeridiana del giorno 13.10.26 Dario spiega comoe avrebbe fatto lui, simile a quello che ho fatto io, vai a controllare e metti anche quello nel codice, ha scritto meglio i console log */


const a = 100;
const b = 15;
const c = 3;

if (a > b && a > c) {
   console.log(a);
} else if (b > a && b > c) {
   console.log(b);
} else if (c > a && c > b) {
   console.log(c);
} else {
   console.log('Pareggio');
};

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Soluzione di Dario a minuto 25 circa della registrazione pomeridiana del 13.10.26 */

let totale = 30;
const spedizione = 9.90;

if (totale >= 50) {
   console.log(`Totale carrello: ${totale} - Spedizione: Gratuita - Totale finale: ${totale}`)

} else {
   console.log(`Totale carrello: ${totale} - Spedizione: ${spedizione} - Totale finale: ${totale + spedizione}`)
}


const mySpedizione =
   totale >= 50
      ? `Totale carrello: ${totale} - Spedizione: Gratuita - Totale finale: ${totale}`
      : `Totale carrello: ${totale} - Spedizione: ${spedizione} - Totale finale: ${totale + spedizione}`;

console.log(mySpedizione);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myArray = [42, 'ciao', true];


for (let i = 0; i < myArray.length; i++) {
   if (typeof myArray[i] === 'number') {
      console.log(`${myArray[i]} è un numero`);
   } else {
      console.log(`${myArray[i]} non è un numero`);
   }
};


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayVuoto = [];

arrayVuoto.push(1);
arrayVuoto.push(2);
arrayVuoto.push(3);
arrayVuoto.push(4);
arrayVuoto.push(5);

arrayVuoto.unshift(0);

console.log(arrayVuoto);
console.log(arrayVuoto.length);

//con push si possono inserire più valori invece di metterli tutti singolarmente. L soluzione giusta sarebbe arrayVuoto.push(1, 2, 3, 4, 5); stesso discorso per il console log, che risulta cosi console.log(arrayVuoto, arrayVuoto.length);


/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Soluzione di Dario a minuto 52 circa della registrazione pomeridiana del 13.10.26

const oggettiScuola = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];
console.log(oggettiScuola);

oggettiScuola.splice(1, 1, 'Diario');
console.log(oggettiScuola);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = ['Penna', 'Quaderno', 'Zaino'];
let cercato = 'Zaino' //(correzione video a circa 1 ora)

//Correzione di Dario e Manuel

let zainoCerca = prodotti.indexOf(cercato);
console.log(`Zaino è in carrello: ${zainoCerca}`)

if (zainoCerca) {
   let cercaZaino = prodotti.indexOf(cercato);
   console.log(cercaZaino);
} else {
   console.log(`Non in carrello`);
};


/*
Esercizio mio (sbagliato)
console.log(`Zaino è in carrello? : ${prodotti.includes('Zaino')}`);
console.log(`Zaino è in carrello? : ${prodotti.indexOf('Zaino')}`); 
*/



/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//Ho cercato su google perché questo proprio non riuscivo a farlo, ristudiare for.

const listaUtenti = [
   { nome: 'Mario', eta: '25 anni' },
   { nome: 'Giovanni', eta: '30 anni' },
   { nome: 'Veronica', eta: '40 anni' }
];

for (let i = 0; i < listaUtenti.length; i++) {
   const user2 = listaUtenti[i]
   console.table(user2.nome, user2.eta)
};



/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const inventario = [
   { nome: 'Quadro', prezzo: 100, disponibile: true },
   { nome: 'Cornice', prezzo: 50, disponibile: true },
   { nome: 'Tela', prezzo: 100, disponibile: true }
];

const nonDisponibile = 'Non disponibile';

if (typeof myArray[i] === 'number') {
   console.log(`${myArray[i]} è un numero`);
} else {
   console.log(`${myArray[i]} non è un numero`);
};

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
