console.log("ok");

//MAIL

//Raccolta variabili

var mail = prompt("Inserisci la tua email");

var mailList = ["ciao@gmail.com", "biscotto@yahoo.com", "pizza@libero.com", "pasta@gmail.com"];

var result = document.getElementById("result");

var reason = document.getElementById("reason");

var counter = 0;

//Verifica

for (var i = 0; i < mailList.length; i++) {
    if (mail == mailList[i]){
        counter += 1;
    }
}

//Stampa in HTML

if (counter > 0) {
    result.innerHTML = "Confermato";
    reason.innerHTML = "è";
}

else{
    result.innerHTML = "Negato";
    reason.innerHTML = "non è";
}

//DADI

var score1 = (Math.floor(Math.random() * 6) + 1);

var score2 = (Math.floor(Math.random() * 6) + 1);

var winner = document.getElementById("winner");

var playerScore = document.getElementById("playerScore");

var CPUScore = document.getElementById("CPUScore");