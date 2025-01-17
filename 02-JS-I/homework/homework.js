// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'null';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1999;

// Crea una variable booleana:
const nuevoBool = 1 > 10;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próletraimos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {

  // "Return" la string provista: str
  // Tu código:
  let string = str;
  return string;



}

function suma(letra, y) {
  
  count = letra + y;
  return count;
  
}

function resta(letra, y) {
  // Resta "y" de "letra" y devuelve el valor
  // Tu código:
  count = letra - y;
  return count;
  
}

function multiplica(letra, y) {
  // Multiplica "letra" por "y" y devuelve el valor
  // Tu código:
  count = letra * y;
  return count;
  
  
}

function divide(letra, y) {
  // Divide "letra" entre "y" y devuelve el valor
  // Tu código:
  
  count = letra / y;
  return count;
  



}

function sonIguales(letra, y) {
  // Devuelve "true" si "letra" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (letra === y){
    return true
  }
  else {
    return false
  }
}

function tienenMismaLongitud(str1, str2) {  
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length){
    return true;
  }
  else {
    return false;
  }
  
  
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  else {
    return false;
  }
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true;
  }
  else {
    return false;
  }
  



  
}

function obtenerResto(letra, y) {
  // Obten el resto de la división de "letra" entre "y"
  // Tu código:
  let count = letra % y;
  return count;


  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

;
  
  if (num % 2 == 0){
    return true;
  }
  else{
    return false;
  }
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0){
    return false;
  }
  else{
    return true;
  }
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let power = Math.pow(num, 2);
  return power;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let power = Math.pow(num, 3);
  return power;
}

function elevar(num, eletraponent) {
  // Devuelve el valor de "num" elevado al eletraponente dado en "eletraponent"
  // Tu código:
  let power = Math.pow(num, eletraponent);
  return power;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próletraimo y devuélvelo
  // Tu código:
  let round = Math.round(num);
  return round;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próletraimo entero) y devuélvelo
  // Tu código:
  let round = Math.ceil(num);
  return round;
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let random = Math.random() * 1;
  return random;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de teletrato que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let positive = Math.sign(numero);
  
  if (positive == 1){
    return "Es positivo";
  }
  else if (positive == 0){
    return false
  }
  else {
    return "Es negativo";
  }
}

function agregarSimboloEletraclamacion(str) {
  // Agrega un símbolo de eletraclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let phrase = `${str}!`;
  return phrase;

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  let string = `${nombre} ${apellido}`;
  return string;
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let string = `Hola ${nombre}!`;
  return string;
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  let areaReactangulo = alto * ancho
  return areaReactangulo;

  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  let perimetro = lado*4;
  return perimetro;

  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let areaTriangulo = (base*altura)/2;
  return areaTriangulo;


}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let cambio = euro*1.20; 
  return cambio;
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  if(letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" ) {
    result = true; 
  }

  else if(letra.length > 1){
    result = "Dato incorrecto";
  }
  
  else{
    result = "Dato incorrecto";
  }

  return result;
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.eletraports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloEletraclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
