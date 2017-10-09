function omvandla() {
	var valuta1 = parseInt(document.getElementById("valuta 1").value);
	var type1 = document.getElementById("type1").value;
	var type2 = document.getElementById("type2").value;
	var inp = valuta1;
	
	
	if(type1 =="USD") {
		inp *= 8.1;
	}
	if (type1 =="EUR") {
		inp *= 9.5;
	}
	if (type1 =="SEK"){
		inp *= 1;
	}
	if (type1 =="INR"){
		inp /= 8.03;
	}
	if (type1 == "SAR"){
		inp *= 2.1;
	}
	if (type1 == "GBP"){
		inp *= 10.7;
	}
	//type 2
	
	if (type2 == "USD"){
		inp /= 8.1;
	}
	if (type2 =="EUR") {
		inp/= 9.5;
	}
	if (type2 =="SEK"){
		inp /= 1;
	}
	if (type2 =="INR"){
		inp *= 8.03;
	}
	if (type2 == "SAR"){
		inp /= 2.1;
	}
	if (type2 == "GBP"){
		inp /= 10.7;
	}
	
	document.getElementById("valuta 2").value = inp;
}
	