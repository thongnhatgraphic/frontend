// ->>>>>>>>>>Ôn <--------------
// let a = +prompt("nhập số a = ");

// for ( ; isNaN(a) || !Number.isSafeInteger(a) ; ) {
//     a = +prompt("nhập số a = ")
// }



// While   Trong khi đúng               thì làm
// while ( isNaN(a) || parseFloat(a) != parseInt(a) ) {
//     a = +prompt("nhập lại a lần nữa a=")
// }

// do While     làm trong khi hắn còn đúng


// ---------------> Mảng <-------------------


// ví dụ
// arr từ 20 tới 80;

// var arr = [];
// var range = 20;
// for ( let i = 0 ; i < 20 ; i ++ ) {
//     var newNumber =  Math.floor( Math.random()*100)
//     if ( newNumber > 20 && newNumber < 80 ) {
//         arr[i] = newNumber
//     } else {
//         i--
//     }
// }
// // Làm sao để sinh dãy số thuộc 1 khoảng cho trước
// // [min, max]
// // Math.floor(Math.random()*(max-min+1) + min )
// var bienI = 0 ; 
// while ( bienI < arr.length ) {
//     document.write( `${arr[bienI]} ,`)
//     bienI++
// }
// document.write("</br>")
// document.write("</br>")
// document.write("</br>")
// document.write("</br>")
// document.write("</br>")
// for ( let i = 0 ; i < arr.length; i ++ ) {
//     document.write(`${arr[i]}, `)
// }
// document.write("</br>")
// document.write("</br>")
// for ( let index in arr ) {
//     document.write(arr[index] +" ,");
//  }
//  document.write("</br>")
// document.write("</br>")

// for ( let obj of arr ) {
//     document.write( `${obj}, `)
// }
// document.write("</br>")
// document.write("</br>")
// arr.forEach( (obj,index) => {
//     document.write(`${obj}, `)
// })
// document.write("</br>")
// document.write("</br>")
// arr.forEach( (obj,index) => {
//     document.write(`${arr[index]}, `)
// });

var l = prompt("Nhập độ dài của mảng mà bạn muốn");

var arr= [];

// if ( !isNaN(l) ) {
//     for ( let i = 0 ; i < l ; i++ ) {
//         var bien = prompt(`nhập số thứ ${i+1} `)
//         if ( !isNaN(bien) ) {
//             arr[i] = parseInt(bien)
//         } else {
//             arr[i] = (bien)
//         }
//     }
// };
// console.log(arr);
if ( !isNaN(l) ) {
    for ( let i = 0 ; i < l ; i++ ) {
        var bien = prompt(`nhập số thứ ${i+1} `)
        while ( isNaN(parseInt(bien)) || !Number.isInteger(parseInt(bien)) ) {
            bien = prompt(`nhập số thứ ${i+1} `)
        }
        arr[i] = parseInt(bien)
    }
};
console.log(arr);
