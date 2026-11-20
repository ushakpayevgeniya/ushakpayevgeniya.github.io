console.log("Работа Ушаковой Евгении");

let glazovGipuLatitude = 58.138480;
let glazovGipuLongitude = 52.674803;
ymaps.ready(init);
/*
if (ymaps.ready()) {
	console.log("Загружено! API Яндекс Карты");
	var locateRequest = ymaps.panorama.locate([55.83403, 37.623370]);
	console.log("Locate Request: "+locateRequest)
}
*/

function init() {
	console.log("Инициализация состоялась!");
	var locateRequest = ymaps.panorama.locate([glazovGipuLatitude, glazovGipuLongitude]);
	console.log("Locate Request: "+locateRequest);
	
	locateRequest.then(requestOK, requestError);
	function requestOK(panoramas) {
		console.log("Panoramas: "+panoramas);
		console.log("Length: "+panoramas.length);
		console.log("Запрос OK!");
		if(panoramas.length) {
			console.log("Ура, нашлась панорама: "+panoramas[0])
			console.dir(panoramas[0]);
			
			let player = new ymaps.panorama.Player("map", panoramas[0], {direction: [240, 5]});
		}
	}
	
	function requestError() {
		console.log("Ошибка запроса..")
		
	}
}