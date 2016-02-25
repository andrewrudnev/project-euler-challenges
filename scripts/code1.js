var problem1 = function() {

	var multipleThree = 0;
	var multipleFive = 0;

	var limit = document.getElementById('limit1');

	for(var i = 0; i < limit.value; i ++) {
		if(i % 3 === 0) {
			multipleThree += i;
		}
		else if(i % 5 === 0) {
			multipleFive += i;
		}
	}

	var total = multipleThree + multipleFive;

	console.log(limit);
	console.log(multipleThree);
	console.log(multipleFive);
	console.log("total " + total);

	document.getElementById('final_result').innerHTML = total;
}