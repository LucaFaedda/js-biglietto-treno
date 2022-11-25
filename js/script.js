// Punto uno: inserire km

let km = parseInt(prompt('Quanti km devi fare?'))

console.log(km)

// Punto due: inseirmento età

let eta = parseInt(prompt('Quanti anni hai?'))

console.log(eta)

// Punto tre: prezzo biglietto


let biglietto = km * 0.21 

console.log(biglietto)

// Punto quattro: sconto minorenni

if(eta < 18){
    biglietto_minorenni = biglietto * 20 / 100
    console.log(biglietto_minorenni)
    sconto_minorenni = biglietto - biglietto_minorenni
    console.log(sconto_minorenni)
}

if(eta > 65){
    biglietto_over = biglietto * 40 / 100
    console.log(biglietto_over)
    sconto_over = biglietto - biglietto_over
    console.log(sconto_over)
}


