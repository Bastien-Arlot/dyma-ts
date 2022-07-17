// let foo: string = "blue";
// let bar: number = 2;
// let bool: boolean = false;

import { AnyMxRecord } from "dns";

// const obj: object = {
//   name: "jean",
// };

// const anything: any = [1, 2, 3];

// const trym: "paris" = "paris";
// const arr: number[] = [1, 2, 3, 4];
// const arr2: Array<number> = [1, 2, 3, 4];
// const tuple: [number, number] = [1, 2];
// const tuple2: [number, string] = [1, "deux"];

// enum XhrReadyState {
//   UNSENT,
//   OPENED,
//   HEADERS_RECEIVED,
//   LOADING,
//   DONE = 33,
// }

// // const readyState = 33;

// // if (readyState === XhrReadyState.UNSENT) {
// //   console.log("requete non envoyé");
// // } else if (readyState === XhrReadyState.OPENED) {
// //   console.log("requete ouverte");
// // } else if (readyState === XhrReadyState.HEADERS_RECEIVED) {
// //   console.log("en tete reçu");
// // } else if (readyState === XhrReadyState.LOADING) {
// //   console.log("Requete en chargement");
// // } else if (readyState === XhrReadyState.DONE) {
// //   console.log("Requete effectuée");
// // }

// // console.log(XhrReadyState.HEADERS_RECEIVED);

// const foo2: null = null;
// const foo3: undefined = undefined;

// function add(nbr1: number, nbr2:number):number {
//   return nbr1 + nbr2;
// }

// console.log(add(2,4));

// let add2: (nbr1: number, nbr2: number) => number;

// add2 = (nbr1, nbr2) => {
//   return nbr1 + nbr2
// }

// console.log(add2(3,2));

// let addRest = (...numbers: Array<number>) => {
//   return numbers.reduce((acc, i) => {
//     acc += i;
//     return acc;
//   },0);
// } ;

// console.log(addRest(5,5,6,10));
// console.log(addRest(3,3))

// class Vehicule {
//   wheel = 4;
// }

// class Voiture extends Vehicule{

//   speed: number;

//   move(){
//     console.log("I m moving");

//   }
//   constructor(){
//     super();
//   }
// }

// let a = new Voiture();

// let b: Voiture;

// b = new Voiture();

// b.move();

// a.speed = 23;

// console.log(a);
// console.log(a.speed);
// console.log(a.wheel);
// a.move();

// interface User {
//   readonly username: string;
//   age: number;
//   isDrinking?: boolean;
//   isSmoking?: boolean;
//   isHealthy?: boolean;
//   greeting?: () => void;
//   [moreProperties: string]: any; // permet d'accepter n'importe quel propriété supplémentaire
// }

// const userA: User = {
//   username: "Pierre",
//   age: 30,
//   isDrinking: true,
//   isSmoking: true,
//   isHealthy: true,
//   addedProperty: 22,
// };

// function greet(user: { username:string }): void {
//   console.log(`Helloe ${user.username}`);
// }

// function death(user: User){}

// function inShape(user:User){}

// const userNotFilled: User = {
//   username: "George",
//   age: 44,
// }

// greet(userA);

// const immutableArray: readonly number[] = [1, 2, 3];

// // On a vu qu'on pouvait type des functions :
// let func1: (param: string) => number;

// // On peut aussi typer une function via une interface
// interface Func1Bis{
//   (param: string): number
// };

// // On peut également utiliser l'interface pour typer une function
// let func1Ter: Func1Bis = (param) => {
//   return 0;
// }

// interface Car {
//   type: 'car';
//   seat: number;
// }

// interface Truck {
//   type: 'truck';
//     seat: number;
//     load: (amount:number) => void;
// }

// const myvehicule: Car | Truck = {
//   type: 'truck',
//   seat: 4,
//   load: (amount: number): void =>{},
// }

// interface Whale {
//   swin: () => void;
// }

// interface Bird {
//   fly: () => void;
// }

// function move(param: Bird | Whale){
//   if ('fly' in param){
//     param.fly();
//   }else{
//     param.swin();
//   }
// }

// interface Fruit {
//   name: string;
//   price: number;
// }

// const newFruit: Fruit = {
//   name: "banana",
//   price: 1,
// }

// function addItemToCollection<T>(item: T, collection: Array<T>): Array<T> {
//   return [...collection, item];
// }

// class Stack {
//   items: any[] = [];

//   push(item) {
//     this.items.push(item);
//   }

//   pop(){
//     this.items.pop();
//   }

//   display() {
//     console.log(`${this.items}`);

//   }
// }

// const newStack = new Stack();
// console.log("Hello");

// newStack.push(1);
// newStack.display();
// newStack.push(3);
// newStack.display();
// newStack.pop();
// newStack.display();

// function randomFunction<T, U extends keyof T>(object: T, prop: U){
//   console.log(object[prop]);
// }

// randomFunction({price: 50}, 'price');

// function Compononent(target: any){
//   console.log(target);

// }
function Compononent(target: any) {
  console.log("in Component");
}
function CompononentFactory(param: { template: string; selector: string }) {
  const elem = document.querySelector(param.selector);
  elem.innerHTML = param.template;
  console.log("in Compononent Factory");

  return (target: any) => {};
}
function LogFactory() {
  console.log("in log factory");
  return Compononent;
}

function Method(
  target: any /* Prototype de la méthode */,
  propName: string,
  propertyDescriptor: PropertyDescriptor
) {
  return {
    value: function () {
      if (this.name) {
        console.log("name ok");
        propertyDescriptor.value.call(this); // Le this doit être call ou bindé car on ne fait plus appel au this du constructuteur mais à celui de la fonction renvoy-e donc sans bind/call = undefined
      } else {
        console.log("no name");
      }
    },
  };
}

function Method2(
  target: any,
  propName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log({
    target,
    propName,
    propertyDescriptor,
  });

  return {};
}

function Prop(target: any, propName: string) {
  console.log({ target, propName });
}
function Param(target: any, paramName: string, paramIndex: number){
  console.log({target, paramName, paramIndex});
  
}
// @LogFactory()
// @CompononentFactory({
//   template: "<h1>Hello</h1>",
//   selector: "app",
// })
class MyComponent {

  @Prop
  public name: string;

  @Method
  public greeting(@Param fancy?: boolean) {
    console.log(`${fancy ? "Hello" : "Hi"} ${this.name}`);
  }

  @Method2
  get fancyName() {
    return `Hello Monsieur ${this.name}`;
  }

  constructor(name?: string) {
    this.name = name;
  }
}

const foo = new MyComponent("Pierre");
const bar = new MyComponent("Paul");

foo.greeting(true);
