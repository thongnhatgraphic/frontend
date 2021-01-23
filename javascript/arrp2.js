// ---------->Method Array <---------------


// ----->mảng of mảng <-------

// bài 1 làm bảng cửu chương


// var row = 9; 
// var cols = 8;

// for ( let i = 1 ; i < row ; i++ ) {

//     let table = [ ] ;

//     for ( let j = 2 ; j <= cols ; j++ ) {
//         table[i] = document.write(`${j} x ${i} = ${j*i}`)
//         document.write(`&nbsp;&nbsp;`)
//         document.write(`&nbsp;&nbsp;`)
//         document.write(`&nbsp;&nbsp;`)
//     }
//     document.write("</br>")
// }

// bài 2 sinh mảng 2 chiều 5x5 và tính tổng các giá trị đường biên
// var rows = 5;
// var cols = 5;
// var m = []
// for ( let i = 0 ; i < 5 ; i++ ) {
//     let a =[]
//     for ( let j = 0 ; j < cols ; j++) {
//         a[j] = Math.floor(Math.random()*10)
//     };
//     m[i] = a 
// }
// for ( let i = 0 ; i < rows; i++ ) {
//     for ( let j= 0 ; j < cols ; j++) {
//         if ( i ==0 || j ==0 || i == (row-1) || j == ( cols - 1) ) {
//             total += m[i][j]
//         }
//     }
// };

// Tạo ra ma trận 2 chiều vuông
// TÍnh cái phần tử trên dduwognf chéo chính
// TÍnh cái phần tử trên đường chéo phụ

// var arr= [];

// var rows = 8;
// var cols = 8; 

// for ( let i = 0 ; i < rows ; i++) {
//     arr[i] = [];
//     for ( let j = 0 ; j < cols ; j++ ) {
//         document.write(arr[i][j] = Math.floor(Math.random()*10) + "&nbsp;&nbsp;")
//     }
//     document.write("<br>")
// };

// var sum = 0 ;

// for ( let i = 0 ; i< arr.length ; i++ ) {
//     for( let j = 0 ; j < arr[i].length; j++ ) {
//         if ( i === 0 || j ===0 || j === ( arr[i].length - 1) || i === (arr[i].length - 1)) {
//             sum += parseInt(arr[i][j])
//         }
//     }
// };
// console.log(sum);
// document.write("Tổng các đường biên là: " + sum);

// var arr = [ ];
// var row = 8; 
// var col = 8;

// for ( let i = 0 ; i < row; i++ ) {
//     arr[i]= [];
//     for ( let j = 0 ; j < col ; j++ ) {
//         arr[i][j] = Math.floor(Math.random()*10);
//         document.write(`${arr[i][j]} &nbsp&nbsp`)
//     }
//     document.write("<br>")
// };
// var sumMain = 0;
// for ( let i = 0; i < arr.length; i++) {
//     for (let j = 0 ; j < arr[i].length ; j++ ) {
//         if ( i + j === 7 ) {
//             sumMain += arr[i][j]
//         }
//     }
// };
// document.write(` Tổng đường chéo chính là: ${sumMain} <br>`)
// var sumSub = 0;
// for ( let i = 0; i < arr.length; i++) {
//     for (let j = 0 ; j < arr[i].length ; j++ ) {
//         if ( i === j ) {
//             sumSub += arr[i][j]
//         }
//     }
// };
// document.write(` Tổng đường chéo chính là: ${sumSub} `)