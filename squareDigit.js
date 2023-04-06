// take an integer and square each digit and then concatanate them together
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
var num = 9119;
// class Kata {
//     static squareDigits(num: number) {
//         let result: string = ''
//         Array.from(String(num), Number).map((num) => {
//             let square: number = num ** 2;
//             result += String(square);
//         });
//         return Number(result);
//     }
// }
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        return num.toString().split('').map(function (n) { return Math.pow(+n, 2); }).join('');
    };
    return Kata;
}());
// class Kata {
//     static squareDigits(num: number) {
//         return +num.toString()
//                     .split('')
//                     .map(n => Math.pow(+n,2))
//                     .join('');
//     }
// }
console.log(Kata.squareDigits(9119));
/* how they did it

export class Kata {
  static squareDigits(num: number) {
    return +num.toString()
               .split('')
               .map(n => Math.pow(+n,2))
               .join('');
  }
}

*/ 
