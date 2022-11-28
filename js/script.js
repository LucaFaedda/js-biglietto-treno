// Punto uno: inserire km

let km = parseInt(prompt('Quanti km devi fare?'))

console.log(km)

// Punto due: inseirmento età

let eta = parseInt(prompt('Quanti anni hai?'))

console.log(eta)

// Punto tre: prezzo biglietto


let biglietto = km * 0.21 

console.log(biglietto)

// Punto quattro/cinque: sconto minorenni con decimali +
// Punto quattro/cinque: sconto over con decimali

if(eta < 18){
    let sconto_minorenni = biglietto * 20 / 100
    console.log(sconto_minorenni)  // Prezzo da sottrarre al biglietto
    let biglietto_minorenni = biglietto - sconto_minorenni
    console.log(biglietto_minorenni) // Prezzo finale 
    let biglietto_minorenni_decimali = biglietto_minorenni.toFixed(2)
    console.log(biglietto_minorenni_decimali)}
else if ( eta > 65){
    let sconto_over = biglietto * 40 / 100
    console.log(sconto_over) // Prezzo da sottrarre al biglietto
    let biglietto_over = biglietto - sconto_over
    console.log(biglietto_over) // Prezzo finale 
    let biglietto_over_decimali = biglietto_over.toFixed(2)
    console.log(biglietto_over_decimali)
    
}
else{
    biglietto
}





