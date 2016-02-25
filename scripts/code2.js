var problem2 = function() {

	var prev2Term = 1;
	var prevTerm = 1;
	var currTerm = 0;
	var evenTermTotal = 0;

	var limit = document.getElementById('limit2');

while(currTerm <= limit.value) {
	currTerm = prev2Term + prevTerm;
		
	if(currTerm % 2 === 0) {
		evenTermTotal += currTerm;
	}

	prev2Term = prevTerm;
	prevTerm = currTerm;
}

	console.log("total " + evenTermTotal);

	document.getElementById('final_result').innerHTML = evenTermTotal;
}

