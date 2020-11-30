'use strict';
//Creamos la funcion dentro de una variable
let convertToRoman = function(num) {
  //Creamos una variable que contenga un array con los números decimales equivalentes
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //Creamos otro array con las letras que representan los números decimales
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
   let romanized = "";
  
    for (let index = 0; index < decimalValue.length; index++) {
      //Mientras el valor decimal sea menor o igual a el número que demos
      while (decimalValue[index] <= num) {

        romanized += romanNumeral[index];
        
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };

console.log(`El número romano de 2 es `+ convertToRoman(2));

console.log(`El número romano de 3 es `+ convertToRoman(3));

console.log(`El número romano de 4 es `+ convertToRoman(4));

console.log(`El número romano de 5 es `+ convertToRoman(5));

console.log(`El número romano de 9 es `+ convertToRoman(9));

console.log(`El número romano de 12 es `+ convertToRoman(12));

console.log(`El número romano de 16 es `+ convertToRoman(16));

console.log(`El número romano de 29 es `+ convertToRoman(29));

console.log(`El número romano de 44 es `+ convertToRoman(44));

console.log(`El número romano de 45 es `+ convertToRoman(45));

console.log(`El número romano de 68 es `+ convertToRoman(68));

console.log(`El número romano de 83 es `+ convertToRoman(83));

console.log(`El número romano de 97 es `+ convertToRoman(97));

console.log(`El número romano de 99 es `+ convertToRoman(99));

console.log(`El número romano de 400 es `+ convertToRoman(400));

console.log(`El número romano de 500 es `+ convertToRoman(500));

console.log(`El número romano de 501 es `+ convertToRoman(501));

console.log(`El número romano de 649 es `+ convertToRoman(649));

console.log(`El número romano de 798 es `+ convertToRoman(798));

console.log(`El número romano de 891 es `+ convertToRoman(891));

console.log(`El número romano de 1000 es `+ convertToRoman(1000));

console.log(`El número romano de 1004 es `+ convertToRoman(1004));

console.log(`El número romano de 1006 es `+ convertToRoman(1006));

console.log(`El número romano de 1023 es `+ convertToRoman(1023));

console.log(`El número romano de 2014 es `+ convertToRoman(2014));

console.log(`El número romano de 3999 es `+ convertToRoman(3999));