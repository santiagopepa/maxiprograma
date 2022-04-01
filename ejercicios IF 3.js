function multiplo(numero){

    let resto = numero / 5
    if(resto == 0){
        alert('es multiplo')
    } else {
        alert('no es multiplo')
    }
}


function nuevoprograma(n1,n2){
    if(n1 > n2){
        let resta = n1-n2;
        alert(resta)
    } if (n1 == n2){
        let suma = n1+n2
        alert(suma)
    } if (n1 < n2){
        let producto = n1/n2
        alert(producto)
    }
}

function nuevoprograma1(n1,n2){
    if(n2 != 0){
        let producto = n1 / n2;
        alert(producto)
    } else {
        alert('No se puede dividir por cero')
    }
}

function negocio(importe,litros){
    if (litros < 100){
        alert(importe  + ' no hay descuento')
    }
     
    if (litros > 101 && litros < 300){
        let importe1 = importe - (importe * 10) / 100
        alert('total a pagar $' + importe1 + ' el descuento es del 10%')
    }
     
    if (litros > 300 && litros < 500){
        let importe1 = importe - (importe * 15) / 100
        alert('total a pagar $' + importe1 + ' el descuento es del 15%')
    }
    
    if (litros > 500){
        let importe1 = importe - (importe * 25) / 100 
        alert('total a pagar $' + importe1 + ' el descuento es del 25%')
    }
}

function notasParcial(nota1,nota2){
    if (nota1 > 8 && nota2 > 8){
        alert('aprobacion directa')
    } else if (nota1 > 6 && nota2 > 6){
        alert('rinde examen final')
    } else if (nota1 < 6  || nota2 < 6) {
        alert('debe recuperar')
    }
}

function logitudtriangulo(lado1,lado2,lado3){

    if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        alert('equilatero')
    } else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
        alert('isosceles')
    } else if(lado1 != lado2 && lado2 != lado3 || lado3 != lado1){
        alert('escaleno')
    }
}

function ordenadosdecre(n1,n2,n3,n4){
    if(n1 > n2 && n2 > n3 && n3 > n4){
        alert('ordenados de forma decreciente')
    } else {
        alert('estan alternados')
    }
}

function detergentesuelto(litros,mediodepago){

    let hasta50litros = 25 * litros;
    let hasta2litros = 20 * litros;
    let hasta5litros = 15 * litros;
    let a500 = 10 * litros;


    if (litros <= 50 && mediodepago == 1){
        let total = hasta50litros * 10 / 100;
        let final = hasta50litros + total
        alert('se vendieron '+ litros  + ' a ' + final + ' pesos ARS , pago en efectivo 10% de recargo')
    } else if(litros <= 50 && mediodepago == 0) {
        alert('se vendieron '+ litros + ' a ' + hasta50litros + ' pesos ARS , otro medio de pago')
    }
    
    if (litros >= 51 && litros <= 200 && mediodepago == 1){
        let total = hasta2litros * 10 / 100;
        let final = hasta2litros + total
        alert('se vendieron '+ litros  + ' a ' + final + ' pesos ARS , pago en efectivo 10% de recargo')
    } else if (litros >= 51 && litros <= 200 && mediodepago == 0){
        alert('se vendieron '+ litros + ' a ' + hasta2litros + ' pesos ARS , otro medio de pago')
    }

    if (litros >= 201 && litros <= 500 && mediodepago == 1){
        let total = hasta5litros * 10 / 100;
        let final = hasta5litros + total
        alert('se vendieron '+ litros  + ' a ' + final + ' pesos ARS , pago en efectivo 10% de recargo')
    } else if (litros >= 201 && litros <= 500 && mediodepago == 0) {
        alert('se vendieron '+ litros + ' a ' + hasta5litros + ' pesos ARS , otro medio de pago')
    }
    
    if (litros > 500 && mediodepago == 1) {
        let total = a500 * 10 / 100;
        let final = a500 + total
        alert('se vendieron '+ litros  + ' a ' + final + ' pesos ARS , pago en efectivo 10% de recargo')
    } else if (litros > 500 && mediodepago == 0){
        alert('se vendieron '+ litros + ' a ' + a500 + ' pesos ARS , otro medio de pago')
    }

}

function computadoras(procesador,ram,extenderdisco){
    if(procesador == 'i5' && ram === 8 && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + ' de RAM es de 800 USD')
    }else if(procesador == 'i5' && ram === 8 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1100 USD')
    } 
    
    if(procesador == 'i5' && ram == 16  && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + ' de RAM es de 900 USD')
    }else if(procesador == 'i5' && ram === 16 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1200 USD')
    }

    if(procesador == 'i5' && ram == 32 && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + ' de RAM es de 1000 USD')
    }else if(procesador == 'i5' && ram === 32 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1300 USD')
    }

    if(procesador == 'i7' && ram == 8 && extenderdisco == 0){
        alert('el costo de '+ procesador + ' con ' + ram + ' de RAM es de 900 USD')
    }else if(procesador == 'i7' && ram == 8 && extenderdisco == 1){
        alert('el coste final de '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1200 USD')
    }

    if (procesador == 'i7' && ram == 16 && extenderdisco == 0){
        alert('el costo de '+ procesador + ' con ' + ram + ' de RAM es de 1000 USD')
    }else if(procesador == 'i7' && ram == 16 && extenderdisco == 1){
        alert('el coste final de '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1300 USD')
    }

    if (procesador == 'i7' && ram == 32 && extenderdisco == 0){
        alert('el costo de '+ procesador + ' con ' + ram + ' de RAM es de 1400 USD')
    }else if(procesador == 'i7' && ram == 32 && extenderdisco == 1){
        alert('el coste final de '+ procesador + ' con ' + ram + ' de RAM con la extension de disco es de 1700 USD')
    }

    if(procesador == 'i9' && ram == 8 && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + 'de RAM es de 1200 USD')
    }else if(procesador == 'i9' && ram == 8 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + 'de RAM con la extension de disco es de 1500 USD')
    }

    if(procesador == 'i9' && ram == 16 && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + 'de RAM es de 1400 USD')
    }else if(procesador == 'i9' && ram == 16 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + 'de RAM con la extension de disco es de 1700 USD')
    }

    if(procesador == 'i9' && ram == 32 && extenderdisco == 0){
        alert('el costo de su '+ procesador + ' con ' + ram + 'de RAM es de 2000 USD')
    }else if(procesador == 'i9' && ram == 32 && extenderdisco == 1){
        alert('el coste final de la '+ procesador + ' con ' + ram + 'de RAM con la extension de disco es de 2300 USD')
    }
}

function cartel(n1,n2,n3,n4){
    let igual1 = (n1 == n2);
    let igual2 = (n2 == n3);
    let igual3 = (n3 == n4)
    if(igual1 == igual2 && igual2 == igual3){
        alert('todos los numeros son iguales')
    } else {
        alert('no son todos iguales')
    }
}

function ordenados(n1,n2,n3){
    if (n1<n2 && n1<n3 && n2<n3){
        console.log(n1,n2,n3)
    } if (n2<n1 && n2<n3 && n1 < n3){
        console.log(n2,n1,n3)
    } if (n3<n1 && n3<n2 && n1<n2){
        console.log(n3,n1,n2)
    } if (n1>n2 && n1>n3 && n3>n2){
        console.log(n2,n3,n1)
    } if (n3>n1 && n3<n2 && n2>n3){
        console.log(n1,n3,n2)
    } if (n1>n2 && n1>n3 && n2>n3){
        console.log(n3,n2,n1)
    }
}

function cartel(n1,n2,n3){
    let producto = (n2 / n3)
    let suma = (n1 + n2)
    if(suma > producto){
        alert('suma es mayor que el producto')
    } else {
        alert('la suma no es mayor')
    }
}


//programa que calcule el interes compuesto : ingreso un numero (equivalente al ahorro mensual) sumado mes a mes me calcule por año cuanto recaudo y luego calcular el interes que genero.

function calculadorainteres(montofijo){

    let intereses = (montofijo *6) /100; //30
    let totalprimeraño = intereses + montofijo //530
    console.log(totalprimeraño)
    //530 en un año
    //siguiente sumo 500
    let arranquesegundo = totalprimeraño + montofijo
    let interesessegundo = (arranquesegundo *6) /100 // 61.8
    let finalsegundoaño = arranquesegundo + interesessegundo // 1091.8
    console.log(finalsegundoaño)

    let arranquetercer = finalsegundoaño + montofijo
    let interesestercero = (arranquetercer *6) /100 // 95.5
    let finalterceraño = arranquetercer + interesestercero // 1687
    console.log(finalterceraño)
    

    let sumaaños = finalterceraño + montofijo
}

//invirtiendo 500 usd en 12 años tendrias 12360

function promedio(n1,n2,n3){
    let nueva = (n1 + n2 +n3) /3
    console.log(nueva)
} 


function promedio5(n1,n2,n3,n4,n5){
    let nueva =(n1+n2+n3+n4+n5)/5
    console.log(nueva)
}


function promedio100(){
    let acu = 0;
    for(let i=0 ;i<10;i++){
        let n = parseInt(prompt('ingresa un valor'));
        acu = (acu + n)
    }
    let promedio = acu / 2
    console.log(promedio)
}


function elmayor(){

    let numeros = [];
    for(i=0 ; i < 3; i++){
    let n = parseInt(prompt('ingresar numero'))
        numeros.push(n)
    }
    let mayor = Math.max.apply(null,numeros)
    alert(mayor)
}


function positivos(){
    let numerospositivos = []
    let numerosnegativos = []

    for(i=0; i<3; i++){
        let n = prompt('ingresar numero')
        if(n > 0){
            numerospositivos.push(n)
        } else {
            numerosnegativos.push(n)
        }
    }
    alert(numerospositivos.length)
}

function del1a10(){
    for(i=1;i<11;i++){
        console.log(i)
    }
}

function de10a1(){
    for(i=10;i>0;i--){
        console.log(i)
    }
}

function del1al100(){
    for(i=0;i<101;i+=5){
        console.log(i)
    }
}

function Esprimo(){
    let uno = prompt('un numero')
    if(uno % 2 === 0) {
        alert('no es primo')
    } else {
        alert('es primo')
    }
}

function maximoyposicion(){
   
        let maximo = []
        let posicion = 0
        for(x=0 ; x < 10; x++){
        n = prompt('ingresar numero')
            if (x == 0){
                maximo.push(n)
                posicion = 1
            } if(n>maximo){
                maximo = n
                posicion++
            }
        }
        console.log('el mayor numero es el ' +maximo)
        console.log('y se encuentra en la posicion '+posicion)
  }


function personamaschica(){

    minimo = []
    posicion = 0

    for(x = 0; x < 20;x++){
        n = prompt('ingresar un numero')
        if(x == 0){
            minimo.push(n)
            posicion = 1
        } if(n<minimo){
            minimo = n
            posicion++
        }
    }
    console.log('el menor numero es el '+ minimo);
    console.log('y se encuentra en la posicion ' + posicion)
}


function promediomayoress(){
        let mayores = 0;
        let cantidad = 0;
        for(x=0 ; x < 20; x++){
        n = parseInt(prompt('ingresar numero'))
            if(n > 18){
                mayores += n
                cantidad++
            }
        }
        let promedio18 = mayores/cantidad
      
        console.log(promedio18)
}

function maximodelospares(){
    let par = []
    let impar = []
    for(x = 0 ;x<20;x++){
    n = prompt('Ingrese los numeros')
        if(n % 2 == 0){
            par.push(n)
        } else {
            impar.push(n)
        }
    }

    let mayorpar =  Math.max.apply(null,par)
    let menorimpar = Math.min.apply(null,impar)

    console.log(mayorpar)
    console.log(menorimpar)

}

function mayordelosprimos(){
    let primo = 0

    for(x=0;x<3;x++){
        n = prompt('un nuevo numero')
    }
    let contador = 0
    for (i = 1; i<=n ; i++){
        if(n % i === 0){
            contador++
        } if (contador === 2) {
            console.log('es primo')
        }if (!primo){
            maximoprimo = n
            primo = 1
        } if(n > maximoprimo){
            maximoprimo = n
        }
    }   
    console.log(primo)
}

mayordelosprimos()

/*

let mayordelosprimos = Math.max.apply(null,mayor)
console.log(mayordelosprimos) */
