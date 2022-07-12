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

let addRest = (...numbers: Array<number>) => {
  return numbers.reduce((acc, i) => {
    acc += i;
    return acc;
  },0);
} ;

console.log(addRest(5,5,6,10));
console.log(addRest(3,3))

class Vehicule {
  wheel = 4;
}

class Voiture extends Vehicule{

  speed: number;

  move(){
    console.log("I m moving");
    
  }
  constructor(){
    super();
  }
}

let a = new Voiture();

let b: Voiture;

b = new Voiture();

b.move();


a.speed = 23;

console.log(a);
console.log(a.speed);
console.log(a.wheel);
a.move();

interface User {
  username: string;
  age: number;
  isDrinking: boolean;
  isSmoking: boolean;
  isHealthy: boolean;
}

const user: User = {
  username: "Pierre",
  age: 30,
  isDrinking: true,
  isSmoking: true,
  isHealthy: true,
};

function greet(user: { username:string }): void {
  console.log(`Helloe ${user.username}`);
}

greet(user);



