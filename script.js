// calculator layout work-on from js...

const body = document.querySelector("body");
const calculator = document.createElement("div");
calculator.setAttribute("id", "calculator");
body.appendChild(calculator);

const result = document.createElement("div");
result.setAttribute("class", "result");
const p = document.createElement("p");
calculator.appendChild(result);
result.appendChild(p);

const clear = document.createElement("span");
clear.setAttribute("class", "clear");
clear.textContent=`AC`
calculator.appendChild(clear);

const operator = document.createElement("span");
operator.setAttribute("class", "operator0");
operator.textContent=`+/-`
calculator.appendChild(operator);

const operator1 = document.createElement("span");
operator1.setAttribute("class", "operator0");
operator1.textContent=`%`
calculator.appendChild(operator1);

const operator2 = document.createElement("span");
operator2.setAttribute("class", "operator");
operator2.textContent=`÷`
calculator.appendChild(operator2);

const num7 = document.createElement("span");
num7.textContent=`7`
calculator.appendChild(num7);

const num8 = document.createElement("span");
num8.textContent=`8`
calculator.appendChild(num8);

const num9 = document.createElement("span");
num9.textContent=`9`
calculator.appendChild(num9);

const operator3 = document.createElement("span");
operator3.setAttribute("class", "operator");
operator3.textContent=`x`
calculator.appendChild(operator3);

const num4 = document.createElement("span");
num4.textContent=`4`
calculator.appendChild(num4);

const num5 = document.createElement("span");
num5.textContent=`5`
calculator.appendChild(num5);

const num6 = document.createElement("span");
num6.textContent=`6`
calculator.appendChild(num6);

const operator4 = document.createElement("span");
operator4.setAttribute("class", "operator");
operator4.textContent=`-`
calculator.appendChild(operator4);

const num1 = document.createElement("span");
num1.textContent=`1`
calculator.appendChild(num1);

const num2 = document.createElement("span");
num2.textContent=`2`
calculator.appendChild(num2);

const num3 = document.createElement("span");
num3.textContent=`3`
calculator.appendChild(num3);

const operator5 = document.createElement("span");
operator5.setAttribute("class", "operator");
operator5.textContent=`+`
calculator.appendChild(operator5);

const double = document.createElement("span");
double.setAttribute("class", "double");
double.textContent=`0`
calculator.appendChild(double); 

const dot = document.createElement("span");
dot.setAttribute("class", "dot");
dot.textContent=`.`
calculator.appendChild(dot);

const operator6 = document.createElement("span");
operator6.setAttribute("class", "operator");
operator6.textContent=`=`
calculator.appendChild(operator6);

// calculator working concept {working on Progress}

