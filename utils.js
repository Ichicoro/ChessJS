var log_enabled = false;
document.getElementById("taConsole").style.visibility = "hidden";
document.getElementById("taConsole").style.minWidth = "524px";
document.getElementById("taConsole").style.minHeight = "100px";
var log_timer;

function switchLogging() {
	if (!log_enabled) {
		log_enabled = true;
		document.getElementById("taConsole").style.visibility = "visible";
		console.log("Logging enabled ("+ log_enabled +")");
		//log_timer = setInterval();
	} else {
		log_enabled = false;
		document.getElementById("taConsole").style.visibility = "hidden";
		console.log("Logging disabled ("+ log_enabled +")");
	}
}


function consolePrint(text) {
	document.getElementById("taConsole").innerHTML += text;
}

function consolePrintln(text) {
	document.getElementById("taConsole").innerHTML += text + "&#013";
}

function clearConsole() {
	document.getElementById("taConsole").innerHTML = "";
}
