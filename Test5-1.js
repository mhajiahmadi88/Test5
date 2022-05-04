
let artikelListe = ["Alien", "Predator", "Star Wars", "Interstellar"]

function artikelFinden(suchName, meldungAusgeben) {
    // for-of-Schleife über artikelListe
    for (let artikel of artikelListe) {
        // wenn suchName in artikel gefunden, dann artikel zurück geben
        if (artikel == suchName) {
            return artikel
        }
    }

    // wenn meldung Ausgeben gesetzt ist, Warn-Meldung auf console ausgeben
    if  (meldungAusgeben == true) {
        console.warn("Artikel nicht gefunden!", suchName)
    }
    return null
}

let gefundeneArtikel = artikelFinden("Ali")
console.debug("Gefundene Artikel", gefundeneArtikel)
