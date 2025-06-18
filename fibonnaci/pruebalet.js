const fibonacci = {
    inicio: 0, /*valor con el cual empieza */
    final: 20 /*valor con el cual finaliza */
};

/* funcion flecha para fibonacci */
const spawnfibonacci = () => {
    /*funcion con array */

    /*funcion con set */
    /* const serie =new Set (); */

    const serie =new Map ();
    /*var serie = [];*/
    var a = fibonacci.inicio === 0 ? 0 : 1;
    var b = 1;
    var indice = 0 ; 

    if (fibonacci.inicio === 0) {
    /* serie.add(0);*/
    /*serie.push (0)*/
    serie.set(indice++,0);
    };
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie .set(indice++,b);
    /*serie.add(b);*/
    /*serioe.push(b);*/
    }
    var next = a + b;
    a = b;
    b = next;
    }
    return serie;
};
const sfibonacci = spawnfibonacci ();

console.log("Serie Fibonacci", sfibonacci);
console.log("Como array:", Array.from(sfibonacci));
console.log("Map:", sfibonacci.entries());