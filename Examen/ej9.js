function calcularPrimo() {
    var num = parseInt(document.getElementById("numero1").value);
    var cont = 0;
    if (num == 0) {
        for (let i = 0; i < num; i++) {
            if (i%2==0 && i%3==0 && i%5==0) {
                document.writeln(i);
            } else {
                cont++;
                
                document.write(`<br>`);
            }
        }
    }
    document.write("Cantidad de numeros primos: " + cont);
}
function calcularMultiplos() {
    var num = parseInt(document.getElementById("numero2").value);
    var cont=0;
    for (let i = 1; i < num; i++) {
        if (i%3==0 && i%5==0) {
            document.write(i+(`<br>`))
            cont++;
        }
    }
    document.write("la cantidad de numeros multiplos de 3 y 5 es: "+cont)
}
function calcularFactorial() {
    var num = parseInt(document.getElementById("numero3").value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.write("factorial: " + factorial);
}
function calcularBono() {
    var num1 = parseInt(document.getElementById("numero4").value);
    var num2 = parseInt(document.getElementById("numero5").value);
    var bono=0,anti=num1,sueldo=num2,por=0;
    if (anti>4 || sueldo<2000) {
        por=0.25;
        bono=sueldo*por
        document.write("su cantida del bono navideño es de: "+bono)
    } else {
        por=0.2;
        bono=sueldo*por
        document.write("su cantida del bono navideño es de: "+bono)
    }
}