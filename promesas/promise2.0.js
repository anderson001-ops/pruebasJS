function sleep(time, value, state) {
return new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 5000);
    setTimeout(() => {
        if (state === "fullfill") {
            resolve (value);
        } else {
            reject(new error(value));
        }
    }, time);
});
}

const p1 = sleep(500, "one", "fullfill");
const p2 = sleep(100, "two", "fullfill");

Promise.race ([p1,p2]).then((value) => {console.log(value);})
















/*
const promise01 = new Promise((resolve, reject) => {setTimeout = (resolve, Math.random)});

const promise02 = new Promise((resolve, reject) => {setTimeout = (resolve, Math.random)});

const promise03 = new Promise((resolve, reject) => {setTimeout = (resolve, Math.random)});
*/
