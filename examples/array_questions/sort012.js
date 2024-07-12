
	function sort012(a,arr_size){
		let lo = 0;
		let hi = arr_size - 1;
		let mid = 0;
		let temp = 0;
		while (mid <= hi){
			if(a[mid] == 0){
				temp = a[lo];
				a[lo] = a[mid];
				a[mid] = temp;
				lo++;
				mid++;

			}else if(a[mid] == 1){
				mid++;
			}else{
				temp = a[mid];
				a[mid] = a[hi];
				a[hi] = temp;
				hi--;
			}
		}
        return a
	}
	

	let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
	let arr_size = arr.length;
	console.log(sort012(arr, arr_size))

	
// 	let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];

// let arr2=[[],[],[]]

// 	for(let i=0;i<arr.length; i++){
// 		if(arr[i]===0){
// 			arr2[0].push(0)
// 		}else if(arr[i]===1){
// 			arr2[1].push(1)
// 		}else if(arr[i]===2){
// 			arr2[2].push(2)
// 		}
// 	}
// 	console.log(...arr2[0], ...arr2[1], ...arr2[2])

	// let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
