'use strict';

function calcBmi(e) {
    e.preventDefault();
   const resBMI = document.querySelector('#result');
   
   resBMI.innerText = (weight.value / (height.value/100 * height.value/100)).toFixed(1);
  
   if(weight.value == 0 || height.value == 0) {
    resBMI.innerText = 'Nieprawidłowe dane';
}else if(resBMI.innerText >=40.0) {
    resBMI.innerText += '  otyłość III stopnia';
  }else if(resBMI.innerText >=35.0 && resBMI.innerText <=39.9) {
    resBMI.innerText += '  otyłość II stopnia';
  }else if(resBMI.innerText >=30.0 && resBMI.innerText <=34.9) {
    resBMI.innerText += '  otyłość I stopnia';
  }else if (resBMI.innerText >=25.0 && resBMI.innerText <=29.9) {
    resBMI.innerText += '  nadwaga';
  }else if(resBMI.innerText >=18.5 && resBMI.innerText <=24.9) {
    resBMI.innerText += '  waga prawidłowa';
  }else if(resBMI.innerText >=17.0 && resBMI.innerText <=18.5) {
    resBMI.innerText += '  niedowaga';
  }else if(resBMI.innerText >=16.0 && resBMI.innerText <=16.9) {
    resBMI.innerText += '  wychudzenie';
  }else{
    resBMI.innerText += '  wygłodzenie';
  }
}
   
const button = document.querySelector('.submit-btn');
button.addEventListener('click', calcBmi);
