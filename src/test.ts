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
  DONE,
}

const readyState = 0;

if (readyState === XhrReadyState.UNSENT) {
  console.log("requete non envoyé");
} else if (readyState === XhrReadyState.OPENED) {
  console.log("requete ouverte");
} else if (readyState === XhrReadyState.HEADERS_RECEIVED) {
  console.log("en tete reçu");
} else if (readyState === XhrReadyState.LOADING) {
  console.log("Requete en chargement");
} else if (readyState === XhrReadyState.DONE) {
  console.log("Requete effectuée");
}
