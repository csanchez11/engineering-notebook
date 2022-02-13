function isValidSubsequence(array, sequence) {
  let idx = 0;
	let result = false;
	// iterate over the array
	for(let i = 0; i < array.length; i++){
		// if elem = seq[idx]
		if(array[i] === sequence[idx]){
		// increase i
			idx++;
		}
	}
	// if idx == seq.length
	if (idx == sequence.length){
		// return true
		result =true;
	}
	return result;
};

var arr1 = [5, 1, ,22, 25, 6, -1, 8, 10];
var seq1 = [1, 6, 10, -1];

var arr2 = [5, 1, ,22, 25, 6, -1, 8, 10];
var seq2 = [1, 6, -1, 10];

console.log(isValidSubsequence(arr1, seq1)); //false
console.log(isValidSubsequence(arr2, seq2)); //true

var piles = [3,6,7,11];
var time = 8;

var piles2 = [30,11,23,4,20];
var time2 = 5;

var minEatingSpeed = function(piles, h) {
	let maxSpeed = Math.max(...piles);
	let totalTime = 0;
	for(let speed = 1; speed <= maxSpeed; speed++){
			let accTime = 0;
			for(let idx = 0; idx < piles.length; idx++){
				let pileTime = Math.ceil(piles[idx]/speed);
				accTime += pileTime;
					if(idx === piles.length -1 && accTime === h){
							return speed;
					}
			}

	}
	return -1;
};

// console.log(minEatingSpeed(piles, time));
// console.log(minEatingSpeed(piles2, time2));
