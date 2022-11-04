const touches = [...document.querySelectorAll('.bouton')];
const listKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

var calcul1 = "";

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);

});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);

});

function sin() {
    ecran.textContent = "sin";
    calcul1 += "Math.sin";
}

function cos() {
    ecran.textContent = "cos";
    calcul1 += "Math.cos";
}

function tan() {
    ecran.textContent = "tan";
    calcul1 += "Math.tan";
}

function exp() {
    ecran.textContent = "exp";
    calcul1 += "Math.exp";
}

function ln() {
    ecran.textContent = "ln";
    calcul1 += "Math.log";
}

function log() {
    ecran.textContent = "log";
    calcul1 += "Math.log";
}

function sqrt() {
    ecran.textContent = "sqrt";
    calcul1 += "Math.sqrt";
}

function xY() {
    calcul1 = "Math.pow(";
    calcul1 += ecran.textContent;
    calcul1 += ",";
    ecran.textContent += "^(";
}

function percent() {
    var nbr = calcul1;
    ecran.textContent += "%";
    nbr = nbr / 100;
    calcul1 = nbr;
}

function factorial() {
    ecran.textContent = "!";
    var i, num, f;
    f = 1
    num = calcul1;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    ecran.textContent = f;
}


function calculer(valeur) {
    if (listKeycode.includes(valeur)) {
        switch (valeur) {
            case '39':
                break;
            case '40':
                factorial();
                break;
            case '41':
                percent();
                break;
            case '42':
                sin();
                break;
            case '44':
                cos();
                break;
            case '46':
                tan();
                break;
            case '48':
                exp();
                break;
            case '43':
                ln();
                break;
            case '45':
                log();
                break;
            case '47':
                sqrt();
                break;
            case '49':
                xY();
                break;
            case '8':
                ecran.textContent = " ";
                calcul1 = "";
                break;
            case '13':
                var a = eval(calcul1);
                ecran.textContent = a;
                calcul1 = "";
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
                calcul1 += touche.innerHTML;
        }
    }
}
