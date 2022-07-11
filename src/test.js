var foo = "blue";
var bar = 2;
var bool = false;
var obj = {
    name: "jean"
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
    XhrReadyState[XhrReadyState["DONE"] = 4] = "DONE";
})(XhrReadyState || (XhrReadyState = {}));
var readyState = 0;
if (readyState === XhrReadyState.UNSENT) {
    console.log("requete non envoyé");
}
else if (readyState === XhrReadyState.OPENED) {
    console.log("requete ouverte");
}
else if (readyState === XhrReadyState.HEADERS_RECEIVED) {
    console.log("en tete reçu");
}
else if (readyState === XhrReadyState.LOADING) {
    console.log("Requete en chargement");
}
else if (readyState === XhrReadyState.DONE) {
    console.log("Requete effectuée");
}
