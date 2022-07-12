let foo: string = "blue";
let bar: number = 2;
let bool: boolean = false;

const obj: object = {
  name: "jean",
};

const anything: any = [1, 2, 3];

const trym: "paris" = "paris";
const arr: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [1, 2, 3, 4];
const tuple: [number, number] = [1, 2];
const tuple2: [number, string] = [1, "deux"];

enum XhrReadyState {
  UNSENT,
  OPENED,
  HEADERS_RECEIVED,
  LOADING,
  DONE = 33,
}

// const readyState = 33;

// if (readyState === XhrReadyState.UNSENT) {
//   console.log("requete non envoyé");
// } else if (readyState === XhrReadyState.OPENED) {
//   console.log("requete ouverte");
// } else if (readyState === XhrReadyState.HEADERS_RECEIVED) {
//   console.log("en tete reçu");
// } else if (readyState === XhrReadyState.LOADING) {
//   console.log("Requete en chargement");
// } else if (readyState === XhrReadyState.DONE) {
//   console.log("Requete effectuée");
// }

// console.log(XhrReadyState.HEADERS_RECEIVED);

const foo2: null = null;
const foo3: undefined = undefined;

function add(nbr1: number, nbr2:number):number {
  return nbr1 + nbr2;
}

console.log(add(2,4));

let add2: (nbr1: number, nbr2: number) => number;

add2 = (nbr1, nbr2) => {
  return nbr1 + nbr2
}

console.log(add2(3,2));

