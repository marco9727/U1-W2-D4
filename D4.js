/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*Questa funzione permette di calcolare l’area di un rettangolo avendo le dimensioni dei suoi due lati. 
Per questo in input prende i due lati del rettangolo e in output ritorna l’area:*/

function area(l1, l2) {
  const rectangleArea = l1 * l2;

  return rectangleArea;
}

/* definisco i lati del rettangolo*/
const l1 = 4;
const l2 = 9;
/*chiamo la funzione per calcolare i valori dell'area del rettangolo*/
const rectangleArea = area(l1, l2);

console.log(rectangleArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*faccio la funzione con 2 parametri e poi faccio il condizionale prima mettendo l'uguale tra i parametri richiamando la funzione 
e poi qunado sono 2 paramnetri diversi, poi faccio la prova console.log provando con numeri uguali e diversi*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(crazySum(5, 5));
console.log(crazySum(7, 18));
console.log(crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* math.abs valore assoluto*/

function crazyDiff(num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
}

console.log(crazyDiff(25));
console.log(crazyDiff(10));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(45));
console.log(boundary(250));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n % 3 === 0) {
    return "n è un multiplo di 3";
  } else if (n % 7 === 0) {
    return "n è un multpiplo di 7";
  } else {
    return "n non è né un multiplo di 3 né di 7";
  }
}

console.log(check3and7(30));
console.log(check3and7(49));
console.log(check3and7(55));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* per invertire una string come parametro chiamo la funzione con la stringa, split(che divide una stringa in un array di caratteri,
    poi li inverto facendo reverse e poi join per riunire di nuovo i caratteri )*/

function reverseString(str) {
  return str.split(``).reverse().join(``);
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
scrivi una funzione di nome upperFirst con parametro una stringa che contiene più parole, 
fare in modo che la lettera iniziale di ogni parola venga cambiata da minuscola a maiuscola
*/
/*to lowerCase trasforma tutte le parole in minuscolo, split le divide mettendo nell'array, 
map trasforma ogni parola in una nuova stringa con la prima lettera maiuscola,join per riunire le parole in una stringa */

function upperFirst(str1) {
  return str1
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(upperFirst("hello world"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*slice()per creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale. Il metodo slice()prende due parametri: il primo indice di inizio e il secondo indice di fine. In questo caso, 
il primo indice è 1 (il secondo carattere della stringa) e il secondo indice è -1 (l'ultimo carattere della stringa, ma escluso)*/

function cutString(str2) {
  return str2.slice(1, -1);
}

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
