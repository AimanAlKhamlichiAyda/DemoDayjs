import { fullCountries } from "./countries.js"

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
//1.
const hola = new Set();
//2.
let nums = 0;
let numContainer = new Set()
for (let i = 0; i <= 9; i++) {
    nums += 1;
    numContainer.add(nums);
}
console.log(numContainer);
//3.
numContainer.delete(2);
console.log(numContainer);
//4.
numContainer.clear(nums)
console.log(numContainer);
//5
const namesArr = ["Aiman", "Hector", "Jerson", "Sebas", "Steven"]
const namesSet = new Set(namesArr);
console.log(namesSet)
//6

const mapPaises = new Map();

mapPaises.set("España", "España".length)
mapPaises.set("Venezuela", "Venezuela".length)
mapPaises.set("Marruecos", "Marruecos".length)
console.log(mapPaises);

//7
const union = new Set([...a], [...b]);
console.log(union);
//8

const difference = a.filter(x => !b.includes(x));
let Dif = new Set(difference)
console.log(Dif)

//9
const encuentro = new Map()
encuentro.set(a, b)
console.log(encuentro)

//10
let leng = "";
let numLeng = 0;
for (element of fullCountries) {
    console.log(element.lenguage)
    /*for(let key in country){
        languages[country[key]]=true;
    }
    console.log(key.fullCountries("language"))
    for (lenguage of fullCountries) {
        numLeng += 1
    }*/
}
console.log(numLeng)