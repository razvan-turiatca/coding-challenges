// my solution 

function fruitSalad(arr) {
	let half =  arr.map(fruit => fruit.substring(0, Math.floor(fruit.length/2)))
	let secondHalf = arr.map(fruit => fruit.substring(Math.floor(fruit.length/2)))
	return half.concat(secondHalf).sort().join("")
}

// other solutions

function fruitSalad(arr) {
	return arr.flatMap(f => [f.slice(0, f.length / 2), f.slice(f.length / 2)]).sort().join("");
}