const prompt = require("prompt-sync")({ sigint: true });

// 1_ Ir a trabajar - alarma(number) - asearse(booleano) - clima(string) - desayunar(booleano) - tomar el bus(number) - ¿hay trafico?(booleano) - llegamos temprano?(booleano)
const alarma = 6
console.log(alarma)

let asearse = true
console.log(asearse)

let clima = 'clima frío'
console.log(clima)

let desayunar = true
console.log(desayunar)

let tomarElBus = 7
console.log(tomarElBus)

let trafico = prompt('¿Hay tráfico?')
console.log(trafico)

let tiempoDeLlegada = prompt('¿Llegamos temprano?')
console.log(tiempoDeLlegada)

//2_ I a dormir - hora(number) - asearse para dormir(booleano) - ¿Hace calor?(booleano) - ponerse la pijama segun el clima(booleano) - poner alarma(number) - ¿tengo sueño? - dormir
let hora = 11
console.log(hora)

let asearseParaDormir = true
console.log(asearseParaDormir)

let calor = prompt('¿Hace calor?')
console.log(calor)

let pijama = true
console.log(pijama)

let ponerAlarma = 6
console.log(ponerAlarma)

let tengoSueno = prompt('¿Tengo sueño?')
console.log(tengoSueno)

let dormir = true
console.log(dormir)

// Piensen cuál es la diferencia entre la línea 2 y la línea 3. ¿Cuál creen que es la
// mejor opción?

//La diferencia es que la línea 3 esta llamando a la variable y la linea 2 al valor o dato,
//La mejor opción es la línea 3, dado que de esta forma podríamos reasignar el valor de la variable o reutilizarla también y evitar posibles errores.  

// DESAFÍO EXTRA:
// Podríamos invertirlo reasignando el valor de la variable cajon_uno

let cajon_uno = 'remeras';
cajon_uno = 'pantalones';
console.log(cajon_uno);