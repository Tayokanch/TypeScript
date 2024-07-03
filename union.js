var score = 23;
var tayo = {
    name: "tayo",
    id: 94399390,
    username: "tayoAdmin"
};
var getId = function (id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else if (typeof id === "number") {
        id + 2;
    }
};
var data = [1, 4, "tayo", 34, "Teni"];
console.log(data[3]);
