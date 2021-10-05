var a
var b
var resultado

function sumar() {
    var numero1 = document.getElementById("a")
    var numero2 = document.getElementById("b")
    
    a =  numero1.value;
    b = numero2.value
    
    console.log(a,b)
    resultado = parseInt(a) + parseInt(b)
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado
}

function restar() {
    var numero1 = document.getElementById("a")
    var numero2 = document.getElementById("b")
    
    a =  numero1.value;
    b = numero2.value
    
    console.log(a,b)
    resultado = parseInt(a) - parseInt(b)
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado


}

function multiplicar() {
    var numero1 = document.getElementById("a")
    var numero2 = document.getElementById("b")
    
    a =  numero1.value;
    b = numero2.value
    
    console.log(a,b)
    resultado = a * b
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado


}

function dividir() {
    var numero1 = document.getElementById("a")
    var numero2 = document.getElementById("b")
    
    a =  numero1.value;
    b = numero2.value
    
    console.log(a,b)
    resultado = a / b
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado
}

function elevar() {
    var numero1 = document.getElementById("a")

    a =  numero1.value;
    
    console.log(a)
    resultado = Math.pow(a,2)
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado
}

function raiz() {
    var numero1 = document.getElementById("a")

    a =  numero1.value;
    
    console.log(a)
    resultado = Math.sqrt(a)
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado
}

function elevarNumero() {
    var numero1 = document.getElementById("a")
    var numero2 = document.getElementById("b")

    a = numero1.value
    b = numero2.value
    
    console.log(a,b)
    resultado = Math.pow(a,b)
    console.log(resultado)

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = 'Resultado = ' + resultado
}