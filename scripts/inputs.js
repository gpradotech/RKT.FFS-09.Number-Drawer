import { inputQuantity, inputMin, inputMax } from "./_components.js";

// GLOBAL
const regexNumber = /[^0-9]/g
inputQuantity.value = 1
inputMin.value = 1
inputMax.value = 100

// INPUT QUANTITY
export function f_InputQuantity() {
  // limita o número mínimo para 1 e máximo para 15
  function f_InputQuantityLimiter() {
    inputQuantity.addEventListener('input', f_InputQuantityLimiter)
    
    if(inputQuantity.value > 15) {
      inputQuantity.value = 15
    } else if(inputQuantity.value < 1 && inputQuantity.value != '') {
      inputQuantity.value = 1
    }
  }
  f_InputQuantityLimiter()

  // não permite digitar caracteres não-numéricos
  function f_InputQuantityRegex() {
    inputQuantity.addEventListener('input', f_InputQuantityRegex)
    inputQuantity.value = inputQuantity.value.replace(regexNumber, '');
  }
  f_InputQuantityRegex()

}
f_InputQuantity()

// INPUT MIN
export function f_InputMin() {
  // limita o número mínimo para 1 e máximo para 100
  function f_InputMinLimiter() {
    inputMin.addEventListener('input', f_InputMinLimiter)
    
    if(inputMin.value > 100) {
      inputMin.value = 100
    } else if(inputMin.value < 1 && inputMin.value != '') {
      inputMin.value = 1
    }
  }
  f_InputMinLimiter()

  // não permite digitar caracteres não-numéricos
  function f_InputMinRegex() {
    inputMin.addEventListener('input', f_InputMinRegex)
    inputMin.value = inputMin.value.replace(regexNumber, '');
  }
  f_InputMinRegex()
}
f_InputMin()

// INPUT MAX
export function f_InputMax() {
  // limita o número mínimo para 1 e máximo para 100
  function f_InputMaxLimiter() {
    inputMax.addEventListener('input', f_InputMaxLimiter)
    
    if(inputMax.value > 100) {
      inputMax.value = 100
    } else if(inputMax.value < 1 && inputMax.value != '') {
      inputMax.value = 1
    }
  }
  f_InputMaxLimiter()

  // não permite digitar caracteres não-numéricos
  function f_InputMaxRegex() {
    inputMax.addEventListener('input', f_InputMaxRegex)
    inputMax.value = inputMax.value.replace(regexNumber, '');
  }
  f_InputMaxRegex()
}
f_InputMax()