import * as component from "./_components.js";

// Variáveis globais //////////////////////////////////////////////
let quantityValue, minValue, maxValue, toggleStatus, results;
results = 0;

// Atualiza valores dos inputs em tempo real
component.inputMax.addEventListener('input', () => {
  maxValue = Number(component.inputMax.value);
});

component.inputMin.addEventListener('input', () => {
  minValue = Number(component.inputMin.value);
});

// BUTTON FORM /////////////////////////////////////////
export function f_BtnFormPressed() {
  // Clique no botão: alterna telas e sorteia
  component.btnForm.addEventListener('click', (event) => {
    event.preventDefault();

    results +=1
    component.resultCounter.textContent = `${results}º resultado`


    // Atualiza os valores na hora do clique
    maxValue = Number(component.inputMax.value);
    minValue = Number(component.inputMin.value);
    quantityValue = Number(component.inputQuantity.value);
    toggleStatus = component.inputToggle.checked;

    // Validações básicas
    if (
      isNaN(minValue) ||
      isNaN(maxValue) ||
      isNaN(quantityValue) ||
      minValue >= maxValue ||
      quantityValue <= 0
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const intervaloDisponivel = maxValue - minValue + 1;
    if (toggleStatus && quantityValue > intervaloDisponivel) {
      alert(`Não é possível sortear ${quantityValue} números únicos entre ${minValue} e ${maxValue}.`);
      return;
    }

    // Sorteia os números
    const resultados = toggleStatus
      ? sortearSemRepeticao(quantityValue, minValue, maxValue)
      : sortearComRepeticao(quantityValue, minValue, maxValue);

    // Troca as telas
    component.asideForm.classList.toggle('hidden');
    component.asideResult.classList.toggle('hidden');

    // Exibe os números sorteados com animação
    exibirNumerosAnimadamente(resultados);
  });
}
f_BtnFormPressed();

// Sorteio com números repetidos
function sortearComRepeticao(qtde, min, max) {
  const numeros = [];
  while (numeros.length < qtde) {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.push(n);
  }
  return numeros;
}

// Sorteio com números únicos
function sortearSemRepeticao(qtde, min, max) {
  const pool = [];
  for (let i = min; i <= max; i++) {
    pool.push(i);
  }

  const numeros = [];
  while (numeros.length < qtde) {
    const index = Math.floor(Math.random() * pool.length);
    const n = pool.splice(index, 1)[0];
    numeros.push(n);
  }
  return numeros;
}

// Exibe os números sorteados com delay animado
function exibirNumerosAnimadamente(numeros) {
  const container = document.querySelector('.result__container');
  container.innerHTML = ''; // limpa resultados anteriores

  numeros.forEach((numero, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('result__animation');

    const span = document.createElement('span');
    span.classList.add('result__number');
    span.textContent = String(numero).padStart(2, '0');

    const box = document.createElement('div');
    box.classList.add('result__box');

    wrapper.appendChild(span);
    wrapper.appendChild(box);
    container.appendChild(wrapper);

    // Adiciona a classe "show" com atraso progressivo
    setTimeout(() => {
      wrapper.classList.add('show');
    }, index * 0); // 0.5s entre cada número
  });
}

// BUTTON RESET ////////////////////////////////////////
export function f_BtnResetPressed() {
  // Alterna a classe "hidden" entre as seções Aside
  component.btnReset.addEventListener('click', f_ToggleAside)

  function f_ToggleAside() {
    component.asideForm.classList.toggle('hidden')
    component.asideResult.classList.toggle('hidden')
  }
} f_BtnResetPressed()