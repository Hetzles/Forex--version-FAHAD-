function omvandla() {
	var valuta1 = parseInt(document.getElementById("valuta 1").value);
	var type1 = document.getElementById("type1").value;
	var type2 = document.getElementById("type2").value;
	var valuta2  = parseInt(document.getElementById("valuta 2").value);
	var inp = valuta1;
	
	
	if(type1 =="USD") {
		inp *= 8;
	}
	if (type2 =="")
	
	
	
	
	
	if(type=="minus"){
	document.getElementById("out").innerHTML = valuta1-valuta2;
	}
	if(type=="divide"){
	document.getElementById("out").innerHTML = valuta1/valuta2;
	}
	if(type=="multi"){
	document.getElementById("out").innerHTML = valuta1*valuta2;
	}
	if(type=="pow"){
	document.getElementById("out").innerHTML = Math.pow (valuta1, valuta2);
	}
}