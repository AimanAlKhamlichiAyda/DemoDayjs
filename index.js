import { fullCountries } from "./countries.js"

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

//====================Ejercicios:Nivel 1=================

//1.crear un set vacío
const hola = new Set();
//2.Crear un set que contenga de 0 a 10 utilizando el bucle
let nums = 0;
let numContainer = new Set()
for (let i = 0; i <= 9; i++) {
    nums += 1;
    numContainer.add(nums);
}
console.log(numContainer);
//3.Eliminar un elemento de set
numContainer.delete(2);
console.log(numContainer);
//4.Limpia set
numContainer.clear(nums)
console.log(numContainer);
//5.Crear un set de 5 elementos string a partir de un array
const namesArr = ["Aiman", "Hector", "Jerson", "Sebas", "Steven"]
const namesSet = new Set(namesArr);
console.log(namesSet)
//6.Crear un map de países y el número de caracteres de un país

const mapPaises = new Map();

mapPaises.set("España", "España".length)
mapPaises.set("Venezuela", "Venezuela".length)
mapPaises.set("Marruecos", "Marruecos".length)
console.log(mapPaises);

//===================Ejercicios:Nivel 2=========================

//1.Encontrar a unión b
const union = new Set([...a], [...b]);
console.log(union);

//2.Encontrar a intersección b

const difference = a.filter(x => !b.includes(x));
let Dif = new Set(difference)
console.log(Dif)

//3.Encontrar a con b
const encuentro = new Map()
encuentro.set(a, b)
console.log(encuentro)
//=====================Nivel 3============

//1.Cuántos idiomas hay en el archivo de objetos de países.

let leng = "";
let numLeng = 0;
for (element of fullCountries) {
    console.log(element.lenguage)

}
console.log(numLeng)

//2.Utiliza los datos de los países para encontrar las 10 lenguas más habladas:


const languageArray = Object.entries(fullCountries);

languageArray.sort((a, b) => b[1] - a[1]);

const topLanguages = languageArray.slice(0, 10);

console.log("Los 10 lenguajes más hablados son:");
for (let i = 0; i < topLanguages.length; i++) {
    console.log(`${i + 1}. ${topLanguages[i][0]} (${topLanguages[i][1]} hablantes)`);
}


