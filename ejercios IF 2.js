
function mostrarMenos(numero1,numero2){
  if(numero1 < numero2){
    console.log(numero1)
  } else {
    console.log(numero2)
  }
}

function sonIguales(numero1,numero2){
    if (numero1 > numero2){
        console.log(numero1)
    } else if(numero2 > numero1){
        console.log(numero2)
    } else if (numero1 == numero2){
        alert('son iguales')
    } 
}

function valores(numero){
    if (numero > 0){
        console.log('valor es positivo')
    } else if (numero < 0){
        console.log('es negativo')
    } else if (numero == 0){
        console.log('Cero')
    }
}

function paroimpar(numero){
    if(numero % 2){
        console.log('Impar')
    } else {
        console.log('Par')
    }
}

function juegos(numero){
    if(numero < 1000){
        console.log('no hay descuento')
    } else if(numero > 1000 && numero < 5000){
        console.log('aplica descuento 10%')
    } else if(numero >= 5000){
        console.log('aplica descuento 18%')
    }
}

function programaMayor(n1,n2,n3,n4){
    if(n1 > n2 && n1 > n3 && n1 > n4){
        console.log(n1)
    } else if (n2 > n1 && n2 > n3 && n2 > n4){
        console.log(n2)
    } else if (n3 > n1 && n3 > n2 && n3 > n4){
        console.log(n3)
    } else {
        console.log(n4)
    }
}


function mayorymenor(n1,n2,n3,n4){
    var mayor = Math.max(n1,n2,n3,n4)
    console.log(mayor)
    var menor = Math.min(n1,n2,n3,n4)
    console.log(menor)
}


function mostrarcualesmayores(n1,n2,n3,n4){
    if (n1 > 100){
        console.log(n1)
    } if (n2 > 100) {
        console.log(n2)
    } if (n3 > 100){
        console.log(n3)
    } if (n4 > 100) {
        console.log(n4)
    }
}


function menoresA100(n1,n2,n3,n4){
    let contar = 0;
    if (n1 < 100){
        contar++
    } if (n2 < 100) {
        contar++
    } if (n3 < 100){
        contar++
    } if (n4 < 100){
        contar++
    }
    console.log(contar)
}

menoresA100(2,500,105,90)


function minutos(minutos){
    if(minutos > 60){
        let horas = minutos / 60
        console.log(horas + ' horas')
    } else {
        console.log(minutos + ' minutos')
    }
}

