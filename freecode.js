//crear una funcion que calcule el area de un triangulo
function areaTriangulo(base, altura){
    var area = (base*altura)/2;
    return area;
}
console.log(areaTriangulo(5, 6));

//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

function tConverter(unit, temp){
    if (unit == "c"){
        var t = (1.8*temp)+32;
        return t;
    }
    var t = ((temp-32)*0.5556);
    return t;
}
console.log(tConverter("c", 25));
console.log(tConverter("f", 77));
