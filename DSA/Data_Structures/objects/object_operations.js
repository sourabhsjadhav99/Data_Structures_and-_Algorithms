// Using object literal syntax
let obj = {};

// Using the Object constructor
// let obj = new Object();


// Adding Key-Value Pairs
// Dot notation
obj.key1 = 'value1';

// Bracket notation
obj['key2'] = 'value2';

// Accessing Values 
console.log(obj.key1);  // Output: 'value1'
console.log(obj['key2']);  // Output: 'value2'

// Deleting Key-Value Pairs 
delete obj.key1;
delete obj['key2'];

// Checking for Keys 
console.log('key1' in obj);  // Output: false
console.log(obj.hasOwnProperty('key1'));  // Output: false

// Iterating Over Keys and Values 
let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Using for...in loop
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}



// Using Object.keys, Object.values, and Object.entries
// const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values); // Output: [1, 2, 3]

// const entries = Object.entries(obj);
// console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]


// Object.keys(obj).forEach(key => {
//     console.log(key + ': ' + obj[key]);
// });

// Object.values(obj).forEach(value => {
//     console.log(value);
// });

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key + ': ' + value);
// });

// // merging objects
// let obj1 = { key1: 'value1', key2: 'value2' };
// let obj2 = { key2: 'newValue2', key3: 'value3' };

// // Using Object.assign
// let mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj);  // Output: { key1: 'value1', key2: 'newValue2', key3: 'value3' }

// // Using the spread operator
// let mergedObj2 = { ...obj1, ...obj2 };
// console.log(mergedObj2);  // Output: { key1: 'value1', key2: 'newValue2', key3: 'value3' }
