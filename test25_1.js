console.log("Работа Ушаковой Евгении");

var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
console.log("Stations: "+stations)
console.dir(stations)
console.log("Langth: "+stations.length);
arrayImages = ["маяк.png", "от души.png", "соль.png", "супер.png", "хайп.png"]
function getRadio(result_id, select_index) {
	// result_id.textContent = "Выбрана радиостанция: "+stations[select_index].value;


	let indexSelect = 0;
	for (let i=0; i<stations.length; i++) {
		console.log("["+i+"]: "+stations[i].value);
		console.log("Checked: "+stations[i].checked)
	
		stations[i].addEventListener('change', getRadio);
	
		if (stations[i].checked) {
			indexSelect = i;
		}
	}
	resultId.textContent = "Выбранная радиостанция: "+stations[indexSelect].value
}

getRadio(resultId, 0);

for (let i=0; i<arrayImages.length; i++) {
	console.log(i+1+") "+arrayImages[i]);
}
// resultId.textContent = "Выбранная радиостанция: "+stations[indexSelect].value