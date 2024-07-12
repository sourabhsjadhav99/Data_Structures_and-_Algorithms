// // A
// // A B
// // A B C
// // A B C D
// // A B C D E

let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);

//----------------------------------------------------------------------------

// // A
// // B B
// // C C C
// // D D D D
// // E E E E E

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode((i - 1) + 65);
//   }
//   string += "\n";
// }
// console.log(string);

//----------------------------------------------------------------------------
// // A
// // B C
// // D E F
// // G H I J
// // K L M N O
// let n = 5; // you can take input using prompt or change the value
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(count + 65);
//     count++; // increment cause next alphabet
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// // ABCDE
// // ABCD
// // ABC
// // AB
// // A

// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// // EDCBA
// // DCBA
// // CBA
// // BA
// // A

// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - i - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// //     A
// //    ABC
// //   ABCDE
// //  ABCDEFG
// // ABCDEFGHI

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// //     A
// //    BCD
// //   EFGHI
// //  JKLMNOP
// // QRSTUVWXY
// let n = 5;
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(count + 65);
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// // ABCDEFGHI
// //  ABCDEFG
// //   ABCDE
// //    ABC
// //     A

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// //     A
// //    ABC
// //   ABCDE
// //  ABCDEFG
// // ABCDEFGHI
// //  ABCDEFG
// //   ABCDE
// //    ABC
// //     A
// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// // ABCDEFGHI
// //  ABCDEFG
// //   ABCDE
// //    ABC
// //     A
// //    ABC
// //   ABCDE
// //  ABCDEFG
// // ABCDEFGHI

// let n = 5;
// let string = "";
// // Reverse Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);
//----------------------------------------------------------------------------
// // A
// // AB
// // ABC
// // ABCD
// // ABCDE
// // ABCD
// // ABC
// // AB
// // A
// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let k = 0; k < i; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 0; k < n - i; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);