/**
 * Created by henrique on 18/04/14.
 */

function ehFinal(img) {
    return ehFinal1(img);
}
function ehFinal1(img) {
    var valor = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img[i][j] != 0) {
                if (img[i][j] != valor) {
                    return false;
                }
                valor++;
            }
        }
    }
    return true;
}

function findPosicaoDoZero(img) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img[i][j] == 0) {
                return [i, j];
            }
        }
    }
    return null;
}
function findPosicaoDoZeroParaBoxes(boxes) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (boxes[i][j].value == 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function ehRepetido(est) {
    var anterior = est.deOndeVim;
    while (anterior != null) {
        if (equals(anterior.img, est.img)) {
            return true;
        }
        anterior = anterior.deOndeVim;
    }
    return false;
}
function equals(img1, img2) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img1[i][j] != img2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function calculaManhattan(img) {
    var manhattan = 0;
    var valor, ii, jj, man1, man2;


    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            valor = img[i][j];
            if (valor != 0) {
                ii = Math.floor((valor-1) / 3);
                jj = (valor-1) % 3;
                man1 = Math.abs(i-ii) + Math.abs(j-jj);

                ii = Math.floor(valor / 3);
                jj = valor % 3;
                man2 = Math.abs(i-ii) + Math.abs(j-jj);

                manhattan += man1 < man2 ? man1 : man2;
            }
        }
    }
    return manhattan;
}

function calcNumInversoes(img) {
    var valoresEmString = "";
    var numInversoes = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            valor = img[i][j]
            if (valor != 0) {
                valoresEmString += valor;
            }
        }
    }
    for (var i = 0; i < 8; i++) {
        for (var i2 = i + 1; i2 < 8; i2++) {
            if (parseInt(valoresEmString.charAt(i)) > valoresEmString.charAt(i2)) {
                numInversoes++;
            }
        }
    }
    return numInversoes;
}

String.prototype.toNum = function () {
    return parseInt(this, 10);
}
Array.prototype.clone = function() {
    var array = this.map(function(arrayDeDentro) {
        return arrayDeDentro.slice(0);
    });
    return array;
}
Array.prototype.last = function() {
    return this[this.length - 1];
}
