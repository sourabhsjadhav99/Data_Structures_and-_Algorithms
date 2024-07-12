// Indirect Recursion 
// let money = 100;
// let totalApple = 0;

// function buyApple(x) {
//     if (x > 0) {
//         console.log("I have", x, "RS", totalApple);
//         buyMore(x - 10);
//     } else {
//         console.log("I don't have more money", totalApple);
//     }
// }
// function buyMore(x) {
//     totalApple++;
//     buyApple(x - 5);
// }
// buyApple(money);
// ----------------------------------------------------------------------------------------------------------------------
// Head and Tail recursion 
// function test(x){
//  console.log(x) // Head recursion--> 5,4,3,2,1,0
//  if(x>0){
//      test(x-1)
//  }
//  console.log(x) // Tail Recurtion-->0,1,2,3,4,5
// }
// let data=5
// test(data)