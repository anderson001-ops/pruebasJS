const fibonacci = {
    inicio: 5, /*valor con el cual empieza */
    final: 30 /*valor con el cual finaliza */
};
const spawnfibonaccia = () => {
    var serie = [];
    var a = fibonacci.inicio === 0 ? 0 : 1;
    var b = 1;
    if (fibonacci.inicio === 0) {
    serie.push(0);
    };
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie.push(b);
    }
    const next = a + b;
    a = b;
    b = next;
    }
    return serie ;
};
const resultadoarray = spawnfibonaccia ();
console.log("Serie Fibonacci", resultadoarray);

const spawnfibonaccib= () => {
    const serie =new Set ();
    var a = fibonacci.inicio === 0 ? 0 : 1;
    var b = 1;
    if (fibonacci.inicio === 0) {
    serie.add (0)
    }
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie.add(b);
    };
    var next = a + b;
    a = b;
    b = next;
    }
    return serie ;
};
const resultadoset=spawnfibonaccib();
console.log("set",[resultadoset]);

const spawnfibonaccic= () => {
    const serie =new Map ();
    var a = fibonacci.inicio === 0 ? 0 : 1;
    var b = 1;
    var indice = 0 ;
    if (fibonacci.inicio === 0) {
    serie.set(indice++,0);
    };
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie.set(indice++,b);
    };
    var next = a + b;
    a = b;
    b = next;
    }
    return serie ;
};
const resultadomap=spawnfibonaccic();
console.log("map",[resultadomap]);

