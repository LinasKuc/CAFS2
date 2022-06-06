let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

function arrDoubled(num) {
    const map = num.map(x => x * 2);
    return map;
}
console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

let arg = 6;
function arrMultiplied(num, argu) {
    const map = num.map(x => x * argu);
    return map;
}
console.log(arrMultiplied(numbers, arg));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

function arrCountTwos(num) {
    let ats = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === 2){
            ats++;
        }
    }
    return ats;
}
console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
let arg2 = 7;
function arrIndexOfLast(num, argu) {
    let ats = num.indexOf(argu);
    return ats;
}
console.log(arrIndexOfLast(numbers,arg2));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

let arg3 = 7;
function arrIndexOfFirst(num, argu) {
    let ats = -1;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === argu){
            ats = i;
        }
    }
    return ats;
}
console.log(arrIndexOfFirst(numbers,arg3));
//----------------------Šitas kaip 4 tik su ciklu.

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reverseNumbers(arr){
    let split = arr.split(""); 
    let reversed = split.reverse("");
    let full = reversed.join("");
    return full;
}
console.log(reverseNumbers("123456"));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

let arr = [8,5,4,2,7,1,9];
function findMinMax(arr1){
   let max =  Math.max(...arr1);
   let min =  Math.min(...arr1);
   return("Mažiausas: " + min + " Didžiausas: " + max);
}
console.log(findMinMax(arr));
//-----------------Galima su reduce turbut kad išvengti per ilgo masyvo klaidų?

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). 
//Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: 
//“Raidė “v” sakinyje rasta 4 kartus”.

let argument = "Pirmas argumentas bus sakinys";
let argument2 = "a";

function checkForLetters(arg1,arg2){
    let split = arg1.split("");
    let ats = 0;
    for (let i = 0; i < arg1.length; i++) {
        if (split[i] === arg2){
            ats++;
        }
    }
    return(`Raidė ${arg2} sakinyje rasta ${ats} katus`);
}
console.log(checkForLetters(argument,argument2));
//---------------------Bandžiau su find funkcija rasti bet rasdavo kartą bet nesskaičiavo...

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
function onlyNumbers(arr2){
    arr2 = arr2.filter(arrValue => Number(arrValue));
    arr2 = arr2.sort((a, b) => a - b)
    return arr2;
}
console.log(onlyNumbers(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

arr5 = [2, 7, 6, 9, 5];
function checkIfAllSmaller(arr, max){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= max){
            count++;
        }
    }
    if(count>0){
        return false;
    }
    else return true;
}
console.log(checkIfAllSmaller(arr5, 5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto 
// kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevėžys',
    'Alytus',
    'Marijampolė',
    'Mažeikiai',
    'Jonava',
    'Utena',
  ];
  let letter = "u";

  function filteredByLetter(arr, letter) {
    const lower = arr.map(element => {return element.toLowerCase();});
    return lower.filter(arrVal => arrVal.includes(letter));
  }
  console.log(filteredByLetter(citiesOfLithuania, letter));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). 
// Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) 
// ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

let num1 = 14, num2 =7;
let action = "multiplication";

function addition(num1, num2){
    return num1 + num2;
 }
 function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    return num1 / num2;
}
function calculateValue(num1, num2, action){
    let rez = false;
    if (Number.isInteger(num1) || Number.isInteger(num2)){
        switch(action) {
            case "addition":
                rez = addition(num1,num2);
            break;
            case "subtraction":
                rez = subtraction(num1,num2);
            break;
            case "multiplication":
                rez = multiplication(num1,num2);
            break;
            case "division":
                rez = division(num1,num2);
            break;
            default:
                return rez;
          }
          
          return rez;
    }
    else return ("Reikšmės nėra skaičiai");
 }
console.log(calculateValue(num1, num2, action));