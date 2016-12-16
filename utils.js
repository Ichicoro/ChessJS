var log_enabled = false;
var log_timer;
var taConsole = document.getElementById("taConsole");
var logBtn = document.getElementById("logBtn");

function switchLogging() {
	if (!log_enabled) {
		log_enabled = true;
		taConsole.style.visibility = "visible";
		logBtn.style.visibility = "visible";
		console.log("Logging enabled ("+ log_enabled +")");
		//log_timer = setInterval();
	} else {
		log_enabled = false;
		taConsole.style.visibility = "hidden";
		logBtn.style.visibility = "hidden";
		console.log("Logging disabled ("+ log_enabled +")");
	}
}


function consolePrint(text) {
	taConsole.innerHTML += text;
	taConsole.scrollTop = taConsole.scrollHeight;
}

function consolePrintln(text) {
	taConsole.innerHTML += text + "&#013";
	taConsole.scrollTop = taConsole.scrollHeight;
}

function clearConsole() {
	taConsole.innerHTML = "";
}
