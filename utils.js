var log_enabled = false;
var log_timer;

function switchLogging() {
	if (!log_enabled) {
		log_enabled = true;
		console.log("Logging enabled ("+ log_enabled +")");
		//log_timer = setInterval();
	} else {
		log_enabled = false;
		console.log("Logging disabled ("+ log_enabled +")");
	}
}


function printGameStatus() {

}
