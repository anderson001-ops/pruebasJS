/* variable global */
const fibonacci = {
    inicio: 0, /*valor con el cual empieza */
    final: 6 /*valor con el cual finaliza */
};

/* funcion flecha para fibonacci */
const spawnfibonacci = () => {
    let serie = [];
    let a = fibonacci.inicio === 0 ? 0 : 1;
    let b = 1;

    if (fibonacci.inicio === 0) {
    serie.push(0);
    }
    while (b <= fibonacci.final) {
    if (b >= fibonacci.inicio) {
    serie.push(b);
    }
    const next = a + b;
    a = b;
    b = next;
    }
    return serie;
};
console.log("Fibonacci en serie ", spawnfibonacci());