/* variable global */
const fibonacci = {
    inicio: 0, /*valor con el cual empieza */
    final: 20 /*valor con el cual finaliza */
};

/* funcion flecha para fibonacci */
const spawnfibonacci = () => {
    const serie =new Set ();

    /*var serie = [];*/
    var a = fibonacci.inicio === 0 ? 0 : 1;
    var b = 1;

    if (fibonacci.inicio === 0) {
    serie.add(0);
    /*serie.push (0)*/
    }
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie.add(b);
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