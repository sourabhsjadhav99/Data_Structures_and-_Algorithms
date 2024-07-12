// // 54321
// // 4321
// // 321
// // 21
// // 1

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // print 6-n stars
//    for (let num = 6 - n; num >= 1; num--) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

//----------------------------------------------------------------------------
// // 54321
// // 5432
// // 543
// // 54
// // 5
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = rows; num >= n; num--) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


//----------------------------------------------------------------------------
// //   1
// //  234
// // 56789
// let rows = 3;
// let variable = 1;
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner Loop - I -> for the spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> for the series of numbers
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += variable;
//       variable++;
//    }

//    pattern += "\n";
// }
// console.log(pattern);

//----------------------------------------------------------------------------
// //     1
// //    123
// //   12345
// //  1234567
// // 123456789
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner Loop - I -> for the spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> for the numbers
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += num;
//    }

//    pattern += "\n";
// }
// console.log(pattern);


//----------------------------------------------------------------------------
// // 12345
// // 1234
// // 123
// // 12
// // 1
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 6 - n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

//----------------------------------------------------------------------------
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// let rows = 4;

// // variable contains the next element of the pattern
// let variable = 1;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += variable+" ";
//       variable++;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

//----------------------------------------------------------------------------
// // 1
// // 2 2
// // 3 3 3
// // 4 4 4 4
// // 5 5 5 5 5
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += n;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);

//----------------------------------------------------------------------------
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // inner loop runs for n
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);
