/**
 * Uebung 5: Schleifen
 */


function aufgabe1() {
    console.debug("Aufgabe 1 ==========================");

    let i = 1

    while(i<6) {
        console.debug(i)
        i = i + 1

    }

}


function aufgabe2() {
    console.debug("Aufgabe 2 ==========================");

    for(let i=1; i<6; i++) {
        if(i==3) {
            break
        }
        console.debug(i)
    }
}


function aufgabe3() {
    console.debug("Aufgabe 3 ==========================");

    for(let i=5; i>0; i--) {
        if (i==3) {
            continue
            }
        console.debug("Hallo Nummer: " + i)
    }
}


function aufgabe4() {
    console.debug("Aufgabe 4 ==========================")

    for (let i=1; i<=3; i++)
    { console.debug("Erste Schleife i:"+i)
        for(let j=1;j<=2;j++){
            console.debug("Zweite Schleife j: "+j)
            }}
}


function aufgabe5() {
    console.debug("Aufgabe 5 ==========================");

    let i=1
    while(i < 6) {
        console.debug(i)
        i++

    }
}


function aufgabe6() {
    console.debug("Aufgabe 6 ==========================");

    let i = 1
    do {
        console.debug(i)
        i++
         } while(i< 6)

}


function aufgabe7() {
    console.debug("Aufgabe 7 ==========================");

    let i=1
    do {
        console.debug(i)
        i++
    }
    while(i<0)
}



function main() {
    aufgabe1()
    aufgabe2()
    aufgabe3()
    aufgabe4()
    aufgabe5()
    aufgabe6()
    aufgabe7()
}
main()