var estados = ["/img/trilhascheckbox/1.png", "/img/trilhascheckbox/2.png", "/img/trilhascheckbox/3.png", "/img/trilhascheckbox/4.png"];
var indiceEstado = 0;
function alterar(componente) {
    var estadoImg = componente.querySelector(".estado");
    var indiceEstado = estados.indexOf("/img/trilhascheckbox/" + estadoImg.alt + ".png");
    indiceEstado = (indiceEstado + 1) % estados.length;
    estadoImg.src = estados[indiceEstado];
    estadoImg.alt = (indiceEstado + 1);
}

function radiobutton(componente) {
    if (componente.value == "1") {
        console.log("marcado");
        componente.checked = false;
        componente.value = "0";
    }
    else {
        console.log(" não marcado");
        componente.checked = true;
        componente.value = "1";
    }
}
