const donateForm = document.getElementById('donateForm');
const btnDoacaoUnica = document.getElementById('btndoacaounica');
const btnDoacaoMensal = document.getElementById('btndoacaomensal');
const btnvinte = document.getElementById('btnvinte');
const btnquarenta = document.getElementById('btnquarenta');
const btnoitenta = document.getElementById('btnoitenta');


const txtoutro = document.getElementById('txtoutro');

const btnempresa = document.getElementById('btnempresa');
const btnparticular = document.getElementById('btnparticular');

const morada = document.getElementById('morada');

const apelido = document.getElementById('idapelido');
const labelapelido = document.getElementById('labelapelido');

const paypal = document.getElementById('Paypal');
const multibanco = document.getElementById('Multibanco');
const mbway = document.getElementById('Mbway');
const dd = document.getElementById('CD');
const cc = document.getElementById('CC');
const iban = document.getElementById('Iban');
const labeliban = document.getElementById('labeliban');


var valoroutro;
var refeicoes;
var refeicoesdois;

var partedois;
var partetres;

var umapessoaaodia;
const paragrafo = document.getElementById('paragrafo');
const paragrafodois = document.getElementById('paragrafodois');

var opcaoum; //se a cor do mensal for laranja ele tem 2, se n tem 1. Atualiza sempre que se mexe no input
var confirmacaoum; //1-unica 2-mensal

var oitenta;
var quarenta;
var vinte;

function openPopup() {
  var valor1 = document.getElementById('txtoutro');
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'flex';


  valoroutro = 0;
  valoroutro = parseInt(valor1.value, 10);


  if (opcaoum === 1 && confirmacaoum === 1) {
    refeicoes = valoroutro / 1.5;
    refeicoes = parseInt(refeicoes, 10);
    paragrafo.textContent = "O seu doanativo permite-nos fornecer aproximadamente " + refeicoes + " refeições";
  }

  if (valoroutro > 40 && opcaoum === 1 && confirmacaoum === 1) {
    refeicoesdois = valoroutro / 3;
    refeicoesdois = parseInt(refeicoesdois, 10);
    paragrafodois.textContent = "O seu donativo permitirá alimentar diariamente " + refeicoesdois + " pessoas";
  }

  if (opcaoum === 2 && confirmacaoum === 2) {
    partedois = valoroutro / 3;
    partedois = parseInt(partedois, 10);
    paragrafo.textContent = "O seu donativo permitirá alimentar uma pessoa durante " + partedois + " dias";

  }

  if (opcaoum === 2 && valoroutro > 90 && confirmacaoum === 2) {
    partetres = valoroutro / 30;
    partetres = partetres / 3;
    partetres = parseInt(partetres, 10);

    paragrafodois.textContent = "O seu donativo permitirá alimentar " + partetres + " pessoas durante este mês";
  }


  if (vinte == 1 && confirmacaoum == 1) {
    refeicoes = 20 / 1.5;
    refeicoes = parseInt(refeicoes, 10);
    paragrafo.textContent = "O seu doanativo permite-nos fornecer aproximadamente " + refeicoes + " refeições";

  }

  if (vinte === 1 && confirmacaoum === 2) {
    partedois = 20 / 3;
    partedois = parseInt(partedois, 10);
    paragrafo.textContent = "O seu donativo permitirá alimentar uma pessoa durante " + partedois + " dias";
  }




  if (quarenta == 1 && confirmacaoum === 1) {
    refeicoes = 40 / 1.5;
    refeicoes = parseInt(refeicoes, 10);
    paragrafo.textContent = "O seu doanativo permite-nos fornecer aproximadamente " + refeicoes + " refeições";
  }

  if (quarenta === 1 && confirmacaoum === 2) {
    partedois = 40 / 3;
    partedois = parseInt(partedois, 10);
    paragrafo.textContent = "O seu donativo permitirá alimentar uma pessoa durante " + partedois + " dias";
  }



  if (oitenta === 1 && confirmacaoum === 1) {
    refeicoes = 80 / 1.5;
    refeicoes = parseInt(refeicoes, 10);
    paragrafo.textContent = "O seu doanativo permite-nos fornecer aproximadamente " + refeicoes + " refeições";

    refeicoesdois = 80 / 3;
    refeicoesdois = parseInt(refeicoesdois, 10);
    paragrafodois.textContent = "O seu donativo permitirá alimentar diariamente " + refeicoesdois + " pessoas";
  }

  if (oitenta === 1 && confirmacaoum === 2) {
    partedois = 80 / 3;
    partedois = parseInt(partedois, 10);
    paragrafo.textContent = "O seu donativo permitirá alimentar uma pessoa durante " + partedois + " dias";
  }



}

function closePopup() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  paragrafodois.textContent = "";
}


document.addEventListener('DOMContentLoaded', function () {


  morada.style.display = 'none';

  apelido.style.display = 'none';
  labelapelido.style.display = 'none';


  paypal.style.display = 'none';
  multibanco.style.display = 'none';
  mbway.style.display = 'none';
  dd.style.display = 'none';
  iban.style.display = 'none';
  labeliban.style.display = 'none';

  function resetButtonStylesfour() {
    paypal.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    multibanco.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    mbway.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    dd.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    cc.style.border = '1px solid rgba(79, 79, 79, 0.3)';

    paypal.style.backgroundColor = 'white'
    multibanco.style.backgroundColor = 'white'
    mbway.style.backgroundColor = 'white'
    dd.style.backgroundColor = 'white'
    cc.style.backgroundColor = 'white'

    paypal.style.color = 'black'
    multibanco.style.color = 'black'
    mbway.style.color = 'black'
    dd.style.color = 'black'
    cc.style.color = 'black'
  }

  paypal.addEventListener('click', function () {
    resetButtonStylesfour();

    paypal.style.border = '2px solid orange';
    paypal.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    paypal.style.color = 'darkorange'

    iban.style.display = 'none'
    labeliban.style.display = 'none'
  });


  multibanco.addEventListener('click', function () {
    resetButtonStylesfour();

    multibanco.style.border = '2px solid orange';
    multibanco.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    multibanco.style.color = 'darkorange'
    iban.style.display = 'none'
    labeliban.style.display = 'none'

  });


  mbway.addEventListener('click', function () {
    resetButtonStylesfour();

    mbway.style.border = '2px solid orange';
    mbway.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    mbway.style.color = 'darkorange'
    iban.style.display = 'none'
    labeliban.style.display = 'none'

  });


  dd.addEventListener('click', function () {
    resetButtonStylesfour();

    dd.style.border = '2px solid orange';
    dd.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    dd.style.color = 'darkorange'
    iban.style.display = 'inline'
    labeliban.style.display = 'inline'
  });

  cc.addEventListener('click', function () {
    resetButtonStylesfour();

    cc.style.border = '2px solid orange';
    cc.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    cc.style.color = 'darkorange'
    iban.style.display = 'none'
    labeliban.style.display = 'none'
  });

  // -----------------------------------------------------------------------------------------------------------------

  btnDoacaoUnica.addEventListener('click', function () {
    resetButtonStyles();

    btnDoacaoUnica.style.border = '2px solid orange';
    btnDoacaoUnica.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    btnDoacaoUnica.style.color = 'darkorange'

    morada.style.display = 'none'

    paypal.style.display = 'block'
    multibanco.style.display = 'block'
    mbway.style.display = 'block'
    dd.style.display = 'none'

    confirmacaoum = 1;

  });


  btnDoacaoMensal.addEventListener('click', function () {
    resetButtonStyles();

    btnDoacaoMensal.style.border = '2px solid orange';
    btnDoacaoMensal.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    btnDoacaoMensal.style.color = 'darkorange'

    morada.style.display = 'block'

    paypal.style.display = 'none'
    multibanco.style.display = 'none'
    mbway.style.display = 'none'
    dd.style.display = 'block'
    confirmacaoum = 2;

  });

  function resetButtonStyles() {


    btnDoacaoUnica.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    btnDoacaoMensal.style.border = '1px solid rgba(79, 79, 79, 0.3)';

    btnDoacaoUnica.style.backgroundColor = 'white'
    btnDoacaoMensal.style.backgroundColor = 'white'

    btnDoacaoUnica.style.color = 'black'
    btnDoacaoMensal.style.color = 'black'

  }


  txtoutro.addEventListener('input', function () {
    resetButtonStylesdois();
    if (btnDoacaoMensal.style.color === 'darkorange') {
      opcaoum = 2;


    } else {
      opcaoum = 1;
    }

    vinte = 0;
    quarenta = 0;
    oitenta = 0;
  });

  // ---------------------------------------------------------------------------------------------------------

  btnvinte.addEventListener('click', function () {

    resetButtonStylesdois();
    txtazero();

    btnvinte.style.border = '2px solid orange';
    btnvinte.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    btnvinte.style.color = 'darkorange'

    opcaoum = 0;
    oitenta = 0;
    quarenta = 0;
    vinte = 1;

  });


  btnquarenta.addEventListener('click', function () {
    resetButtonStylesdois();
    txtazero();

    btnquarenta.style.border = '2px solid orange';
    btnquarenta.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    btnquarenta.style.color = 'darkorange'

    opcaoum = 0;
    oitenta = 0;
    quarenta = 1;
    vinte = 0;

  });



  btnoitenta.addEventListener('click', function () {
    resetButtonStylesdois();
    txtazero();

    btnoitenta.style.border = '2px solid orange';
    btnoitenta.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
    btnoitenta.style.color = 'darkorange'


    opcaoum = 0;
    oitenta = 1;
    quarenta = 0;
    vinte = 0;


  });



  function resetButtonStylesdois() {
    btnvinte.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    btnquarenta.style.border = '1px solid rgba(79, 79, 79, 0.3)';
    btnoitenta.style.border = '1px solid rgba(79, 79, 79, 0.3)';


    btnvinte.style.backgroundColor = 'white'
    btnquarenta.style.backgroundColor = 'white'
    btnoitenta.style.backgroundColor = 'white'


    btnvinte.style.color = 'black'
    btnquarenta.style.color = 'black'
    btnoitenta.style.color = 'black'

  }

  function txtazero() {
    txtoutro.value = '';
  }
});




btnempresa.addEventListener('click', function () {
  resetButtonStylestres();


  btnempresa.style.border = '2px solid orange';
  btnempresa.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
  btnempresa.style.color = 'darkorange'

  apelido.style.display = 'none'
  labelapelido.style.display = 'none'
});
// ------------------------------------------------------------------------------------------------



btnparticular.addEventListener('click', function () {
  resetButtonStylestres();

  btnparticular.style.border = '2px solid orange';
  btnparticular.style.backgroundColor = 'rgba(255, 165, 0, 0.1)'
  btnparticular.style.color = 'darkorange'
  apelido.style.display = 'inline'
  labelapelido.style.display = 'inline'
});


function resetButtonStylestres() {
  btnempresa.style.border = '1px solid rgba(79, 79, 79, 0.3)';
  btnparticular.style.border = '1px solid rgba(79, 79, 79, 0.3)';

  btnempresa.style.backgroundColor = 'white'
  btnparticular.style.backgroundColor = 'white'

  btnempresa.style.color = 'black'
  btnparticular.style.color = 'black'

}

