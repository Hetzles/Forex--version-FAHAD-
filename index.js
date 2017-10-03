function calc() {
	var valuta 1 = parseInt(document.getElementById("val1").value);
	var type = document.getElementById("type").value;
	var valuta 2 = parseInt(document.getElementById("val2").value);
	if(type =="plus") {
	document.getElementById("out").innerHTML = valuta 1+valuta 2;
	}
	if(type=="minus"){
	document.getElementById("out").innerHTML = valuta 1-valuta 2;
	}
	if(type=="divide"){
	document.getElementById("out").innerHTML = valuta 1/valuta 2;
	}
	if(type=="multi"){
	document.getElementById("out").innerHTML = valuta 1*valuta 2;
	}
	if(type=="pow"){
	document.getElementById("out").innerHTML = Math.pow (valuta 1, valuta 2);
	}
}