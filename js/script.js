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

// Ao iniciar verificar o tema
var tema = localStorage.getItem("tema");
if (tema === "dark") {
    document.body.classList.add(tema);
    var checkboxtema = document.getElementById('chk');
    checkboxtema.checked = true;
}
//Ao clicar na troca de tema, trocar o tema e salvar no local storage
const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
    var checkboxtema = document.getElementById('chk');
    if (checkboxtema.checked === true) {
        console.log("dark");
        localStorage.setItem("tema", "dark");
    }
    else {
        console.log("ligth");
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
        console.log(componente);

    }
    else {
        console.log(" não marcado");
        componente.checked = true;
        componente.value = "1";
    }
}

function save() {
    // Get all checkbox inputs
    var inputs = document.querySelectorAll('input[type="radio"]');
    var inputstxt = document.querySelectorAll('input[type="text"]');
    var vvfh = document.querySelectorAll(".estado");
    var arrData = [];
    // For each inputs...
    inputs.forEach(function (input) {
        // ... save what you want (but 'ID' and 'checked' values are necessary)
        arrData.push({ id: input.id, checked: input.checked });
    });
    inputstxt.forEach(function (inputtxt) {
        arrData.push({ id: inputtxt.id, value: inputtxt.value });
    });
    vvfh.forEach(function (vvfh) {
        arrData.push({ id: vvfh.id, src: vvfh.src, alt: vvfh.alt });
    });
    // Save in localStorage
    localStorage.setItem('inputs', JSON.stringify(arrData));

    console.log(JSON.stringify(arrData));
}

function load() {
    var inputs = JSON.parse(localStorage.getItem('inputs'));
    // For each inputs...
    inputs.forEach(function (input) {
        // Set the 'checked' value
        if (input.hasOwnProperty('checked')) {
            document.getElementById(input.id).checked = input.checked;
        }
        if (input.hasOwnProperty('value')) {
            document.getElementById(input.id).value = input.value;
        }
        if (input.hasOwnProperty('src')) {
            document.getElementById(input.id).src = input.src;

        }
        if (input.hasOwnProperty('alt')) {
            document.getElementById(input.id).alt = input.alt;
        }
        console.log(input.id, input.src, input.alt);

    });
}

load();
