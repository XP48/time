const heurePlace = document.querySelector('.heure')
const datePlace = document.querySelector('.date')

var DisplayHeure = function(){

    var ajd, year, moisliste, mois, journumero, jourliste, journom, heures, minutes, secondes, twochiffres;

    ajd = new Date(),

    year = ajd.getFullYear();

    moisliste = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = moisliste[ajd.getMonth()];

    journumero = ajd.getDate();

    jourliste = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    journom = jourliste[ajd.getDay()];

    twochiffres = function(element){
        if(element < 10) {
            return element = "0" + element;
        }
        else {
            return element;
        }
    }

    heures = twochiffres(ajd.getHours());
    minutes = twochiffres(ajd.getMinutes());
    secondes = twochiffres(ajd.getSeconds());

    heurePlace.textContent = heures + " h " + minutes + " m " + secondes + " s ";
    datePlace.textContent = journom + " " + journumero + " " + mois + " " + year;

    document.querySelector('.h').style.transform = `rotate(${heures*360/12+90}deg)`;
    document.querySelector('.m').style.transform = `rotate(${minutes*360/60+90}deg)`;
    document.querySelector('.s').style.transform = `rotate(${secondes*360/60+90}deg)`;

    setTimeout(DisplayHeure, 1000);
    
}

DisplayHeure();

var them = "default"

function theme() {
    if(them == "default") {
        document.body.style.backgroundImage = "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)";
        document.body.style.color = "black";
        document.getElementById('theme').src = 'theme3.svg';
        them = "light";
    }
    else if(them == "saumon") {
        document.body.style.backgroundImage = "linear-gradient(to top, #09203f 0%, #537895 100%)";
        document.body.style.color = "#f1f1f1";
        document.getElementById('theme').src = 'theme1.svg';
        them = "default";
    }
    else if(them == "light") {
        document.body.style.backgroundImage = "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)";
        document.body.style.color = "black";
        document.getElementById('theme').src = 'theme2.svg';
        them = "saumon";
    }
}

var affichageMode = "analogique"

function display() {
    if(affichageMode == "analogique") {
        document.getElementById('heure').style.display = "none"
        document.getElementById('clock').style.display = "block"
        affichageMode = "digital"
    }
    else if(affichageMode == "digital") {
        document.getElementById('clock').style.display = "none"
        document.getElementById('heure').style.display = "block"

        affichageMode = "analogique"
    }
}

var ecranMode = "normal"

function ecran(){
    if(ecranMode == "normal") {
        document.documentElement.requestFullscreen()
        ecranMode == "full"
    }
    else if(ecranMode == "full") {
        document.documentElement.cancelFullScreen();
        ecranMode == "normal"
    }
}