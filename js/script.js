function alterar(componente) {
    var estados = ["/img/trilhascheckbox/1.png", "/img/trilhascheckbox/2.png", "/img/trilhascheckbox/3.png", "/img/trilhascheckbox/4.png"];
    var indiceEstado = 0;
    var estadoImg = componente.querySelector(".estado");
    var indiceEstado = estados.indexOf("/img/trilhascheckbox/" + estadoImg.alt + ".png");
    indiceEstado = (indiceEstado + 1) % estados.length;
    estadoImg.src = estados[indiceEstado];
    estadoImg.alt = (indiceEstado + 1);
}
function alterarFome(componente) {
    var estados = ["/img/trilhascheckbox/1.png", "/img/trilhascheckbox/4.png"];
    var indiceEstado = 0;
    var estadoImg = componente.querySelector(".estado");
    var indiceEstado = estados.indexOf("/img/trilhascheckbox/" + estadoImg.alt + ".png");
    indiceEstado = (indiceEstado + 1) % estados.length;
    estadoImg.src = estados[indiceEstado];
    estadoImg.alt = (indiceEstado + 1);
}
function alterarHumanidade(componente) {
    var estados = ["/img/trilhascheckbox/1.png", "/img/trilhascheckbox/2.png", "/img/trilhascheckbox/4.png"];
    var indiceEstado = 0;
    var estadoImg = componente.querySelector(".estado");
    var indiceEstado = estados.indexOf("/img/trilhascheckbox/" + estadoImg.alt + ".png");
    indiceEstado = (indiceEstado + 1) % estados.length;
    estadoImg.src = estados[indiceEstado];
    estadoImg.alt = (indiceEstado + 1);
}

// Trocar tema
var tema = localStorage.getItem("tema");
if (tema === "dark") {
    document.body.classList.add(tema);
    var checkboxtema = document.getElementById('chk');
    checkboxtema.checked = true;
}

const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
    if (tema === "ligth") {
        console.log("claro");
        localStorage.setItem("tema", "dark");
    }
    else {
        console.log("escuro");
        localStorage.setItem("tema", "ligth");
    }
    document.body.classList.toggle('dark');
})

// Permitir desmarcar o RadioButton
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
