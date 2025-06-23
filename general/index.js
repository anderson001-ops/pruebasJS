// comentario
var miVariable = 24;
//console.log ("mi edad es " + miVariable);

miVariable = 12;
//console.log("mi edad es ahora "+ miVariable);

const miConstante =3;
//console.log("el valor de la variable es "+ miConstante);

var op1 = 2
var op2 = 3
var resultado = op1 + op2;
//console.log("resultado vale "+ resultado);

// CONDICIONALES 
let miNumero =6;
let miNombre = "anderson";

 // let resultadoPregunta = miNumero == 7;
 // console.log(resultadoPregunta);
 // if(miNumero > 2 || miNombre=="anderson"){
 //   console.log("si");
//}
//else{
//    console.log ("no ");
//}

//let miNumero2= 0; 
//if(miNumero2>0){
    //console.log("mi numero es postivo");
//} else if (miNumero2 ===0){
//        console.log("mi numero es zero");
//}
//else{
//    console.log("mi numero es negativo");
//}
//let contador=0
//while(contador<5){
//    console.log("hola a todos")

//    contador=contador+1
//}
//for(let i =1000000 ; i > 0 ; i --){
//    console.log(i);
//}
//esto es un bucle podemos arreglar el i-- para
// contar disminuyendo y i++ para contar sumando 
// tener en cuenta el signo el = y >0 

// FUNCIONES 
saludar(nombre);
function saludar(){
    console.log("my name is"+ nombre);
    console.log("my age is  "+ edad);
}
saludar("anderson", 18);
function multiplicar (num1,num2){
    let resultado =num1*num2;
    return resultado ;
}
 console.log(resultado);

// las funciones pueden leerse de arriba para 
//abajo y viceversa puedo colocar el saludar();