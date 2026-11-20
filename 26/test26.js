console.log("Работа Ушаковой Евгении");

var stations = document.getElementsByName("radistation");
let resultId = document.getElementById("result");
let imageId = document.getElementById("radio_image");
console.log("Stations: "+stations)
console.dir(stations)
console.log("Langth: "+stations.length);
arrayImages = ["маяк.png", "соль.png", "хайп.png"]
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
	imageId.src = arrayImages[indexSelect];
}

getRadio(resultId, 0);

for (let i=0; i<arrayImages.length; i++) {
	console.log(i+") "+arrayImages[i])
}
// resultId.textContent = "Выбранная радиостанция: "+stations[indexSelect].value