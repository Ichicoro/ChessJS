var log_enabled = false;
var help_enabled = false;
var rainbow_enabled = false;
var log_timer;
var taConsole = document.getElementById("taConsole");
var logBtn = document.getElementById("logBtn");
var helpBox = document.getElementById("helpBox");


function assignShortcuts() {
    /* http://www.openjs.com/scripts/events/keyboard_shortcuts/ */

    shortcut.add("Ctrl+R",function() {
        resetBoard();
    },{ 'disable_in_input': true });

    shortcut.add("F1",function() {
        toggleHelp();
    });

    shortcut.add("Ctrl+L",function() {
        switchLogging();
    });

    shortcut.add("Ctrl+Alt+R",function() {
        toggleRainbow();
    });

    shortcut.add("Ctrl+Alt+D",function() {
        //();
    });


    shortcut.add("1",function() {
        numberHandler(0);
    },{ 'disable_in_input': true });
    shortcut.add("2",function() {
        numberHandler(1);
    },{ 'disable_in_input': true });
    shortcut.add("3",function() {
        numberHandler(2);
    },{ 'disable_in_input': true });
    shortcut.add("4",function() {
        numberHandler(3);
    },{ 'disable_in_input': true });
    shortcut.add("5",function() {
        numberHandler(4);
    },{ 'disable_in_input': true });
    shortcut.add("6",function() {
        numberHandler(5);
    },{ 'disable_in_input': true });
    shortcut.add("7",function() {
        numberHandler(6);
    },{ 'disable_in_input': true });
    shortcut.add("8",function() {
        numberHandler(7);
    },{ 'disable_in_input': true });



}


function toggleHelp() {
    if (!help_enabled) {
        helpBox.style.visibility = "visible";
        help_enabled = true;
    } else {
        helpBox.style.visibility = "hidden";
        help_enabled = false;
    }
}


function toggleRainbow() {
    var anim;
    if (!rainbow_enabled) {
        anim = "rainbow 3s ease infinite"
        rainbow_enabled = true;
    } else {
        anim = ""
        rainbow_enabled = false;
    }
    document.getElementById("bigpagetitle").style.animation = anim;
    return anim;
}


function switchLogging() {
    if (!log_enabled) {
        log_enabled = true;
        taConsole.style.visibility = "visible";
        logBtn.style.visibility = "visible";
        console.log("Logging enabled ("+ log_enabled +")");
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
