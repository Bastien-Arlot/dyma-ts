/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var foo = "blue";
var bar = 2;
var bool = false;
var obj = {
    name: "jean",
};
var anything = [1, 2, 3];
var trym = "paris";
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var tuple = [1, 2];
var tuple2 = [1, "deux"];
var XhrReadyState;
(function (XhrReadyState) {
    XhrReadyState[XhrReadyState["UNSENT"] = 0] = "UNSENT";
    XhrReadyState[XhrReadyState["OPENED"] = 1] = "OPENED";
    XhrReadyState[XhrReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    XhrReadyState[XhrReadyState["LOADING"] = 3] = "LOADING";
    XhrReadyState[XhrReadyState["DONE"] = 33] = "DONE";
})(XhrReadyState || (XhrReadyState = {}));
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
var foo2 = null;
var foo3 = undefined;
function add(nbr1, nbr2) {
    return nbr1 + nbr2;
}
console.log(add(2, 4));
var add2;
add2 = function (nbr1, nbr2) {
    return nbr1 + nbr2;
};
console.log(add2(3, 2));
var addRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, i) {
        acc += i;
        return acc;
    }, 0);
};
console.log(addRest(5, 5, 6, 10));
console.log(addRest(3, 3));
var Vehicule = /** @class */ (function () {
    function Vehicule() {
        this.wheel = 4;
    }
    return Vehicule;
}());
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture() {
        return _super.call(this) || this;
    }
    Voiture.prototype.move = function () {
        console.log("I m moving");
    };
    return Voiture;
}(Vehicule));
var a = new Voiture();
var b;
b = new Voiture();
b.move();
a.speed = 23;
console.log(a);
console.log(a.speed);
console.log(a.wheel);
a.move();
var userA = {
    username: "Pierre",
    age: 30,
    isDrinking: true,
    isSmoking: true,
    isHealthy: true,
    addedProperty: 22,
};
function greet(user) {
    console.log("Helloe ".concat(user.username));
}
function death(user) { }
function inShape(user) { }
var userNotFilled = {
    username: "George",
    age: 44,
};
greet(userA);
var immutableArray = [1, 2, 3];
// On a vu qu'on pouvait type des functions :
var func1;
;
// On peut également utiliser l'interface pour typer une function
var func1Ter = function (param) {
    return 0;
};
var myvehicule = {
    type: 'truck',
    seat: 4,
    load: function (amount) { },
};
function move(param) {
    if ('fly' in param) {
        param.fly();
    }
    else {
        param.swin();
    }
}
var newFruit = {
    name: "banana",
    price: 1,
};
function addItemToCollection(item, collection) {
    return __spreadArray(__spreadArray([], collection, true), [item], false);
}
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        this.items.pop();
    };
    Stack.prototype.display = function () {
        console.log("".concat(this.items));
    };
    return Stack;
}());
var newStack = new Stack();
console.log("Hello");
newStack.push(1);
newStack.display();
newStack.push(3);
newStack.display();
newStack.pop();
newStack.display();
function randomFunction(object, prop) {
    console.log(object[prop]);
}
randomFunction({ price: 50 }, 'price');
function Compononent(target) {
    console.log(target);
}
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent = __decorate([
        Compononent
    ], MyComponent);
    return MyComponent;
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map