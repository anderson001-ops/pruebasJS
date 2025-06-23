//ESTE ES CODIGO ES PARA HACER PROMESAS//
/*const miPromise = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve("¡La operacion fue exitosa!");
    } else {
        reject ("Ocurrio un error en la operacion")
    }
}); 

miPromise
.then((resultado) => {
    console.log("Exito total:", resultado);
})
.catch((error) => {
console.log("error:", error);
});*/


/*// ESTE CODIGO ES EL EJERCICIO 1//
const tarea = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea completada");
        }, 3000);
    });
}

tarea() .then((resultado) => {
    console.log("resultado", resultado);
}) .catch((error) => {
    console.log ("error", error);
});*/




/*///ESTE FUE EL EJERCICIO NUMERO 2//
const tarea = () => {
    return new Promise((resolve, reject) => {
        const tiempo = Math.floor(Math.random() * 4000);
        setTimeout(() => {
                if (tiempo <= 2000) {
        resolve("¡Cumplio con tu objtivo!");
    } else {
        reject ("lo siento no cumple")
    }
        }, tiempo);
    });
}

tarea() .then((resultado) => {
    console.log("resultado", resultado);
}) .catch((error) => {
    console.log ("error", error);
});*/


function llamado() {
     const tiempo = Math.floor(Math.random() * 5000);
     console.log (tiempo)
     return tiempo;
}


const promise01 = () => new Promise((resolve, reject) => {
        setTimeout(()=>resolve("01"),llamado());
});

const promise02 = () => new Promise((resolve, reject) => {
        setTimeout(() =>resolve("02"),llamado());
});
const promise03 = () => new Promise((resolve, reject) => {
        setTimeout(() =>resolve("03"),llamado());
});

Promise.race([promise01(),promise02(),promise03()])
.then((resultado) => {
    console.log("resultado", resultado);
})
.catch ((error)=>{
    console.error ("fallo", error);
});