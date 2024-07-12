// function findIntersection(arr1, arr2) {
//     const intersection = [];
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
//           intersection.push(arr1[i]);
//         }
//       }
//     }
//     return intersection;
//   }
  
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [4, 5, 6, 7, 8];
//   console.log(findIntersection(arr1, arr2));

// function findIntersection(arr1, arr2) {
//     const set1 = new Set(arr1); // Create a set from arr1
  
//     const intersection = [];
//     for (let i = 0; i < arr2.length; i++) {
//       if (set1.has(arr2[i]) && !intersection.includes(arr2[i])) {
//         intersection.push(arr2[i]);
//         // set1.delete(arr2[i]); // Remove the element from set1 to handle duplicates
//       }
//     }
  
//     return intersection;
//   }
  
//   arr1 = [1,2,2,1], arr2 = [2,2]
//   console.log(findIntersection(arr1, arr2));



  const intersect = function(nums1, nums2) {
    const map = new Map()
  
    const intersection = [];
    for(let i=0; i<nums1.length; i++){
      map.set(nums1[i], (map.get(nums1[i])||0)+1)
    }
  
    for (let i = 0; i < nums2.length; i++) {
      if (map.has(nums2[i]) && map.get(nums2[i])>0) {  
        intersection.push(nums2[i])     
        map.set(nums2[i],map.get(nums2[i])-1)
      }
    }
  
    return intersection
 
 };
let arr1 = [1,2,2,1], arr2 = [2,2]
 console.log(intersect(arr1,arr2))