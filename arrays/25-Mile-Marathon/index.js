// my solution

function marathonDistance(d) {
  return d.length >0 && d.map(num => num>=0?num:-num ).reduce((a,b)=> a+b) === 25 
}

marathonDistance([-6, 4, 15])


// a better solution which I found after I submited my solution. With this opportunity I learned about Math.abs()

function marathonDistance(d){
	return d.reduce((total, item)=>total +=Math.abs(item), 0)==25
}