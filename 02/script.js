console.log('working');

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let emptyDiv = document.createElement('div');
document.querySelector('body').appendChild(emptyDiv);
console.log(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let pDiv = document.createElement('div');
pDiv.appendChild(document.createElement('p'));
document.querySelector('body').appendChild(pDiv);
console.log(pDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let pDiv6 = document.createElement('div');
pDiv.appendChild(document.createElement('p'));
for (let i = 0; i < 6; i++) {
	pDiv6.appendChild(document.createElement('p'));
}
document.querySelector('body').appendChild(pDiv6);
console.log(pDiv6);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let dinaDiv = document.createElement('p');
dinaDiv.innerText = 'Soy Dinámico!';
document.querySelector('body').appendChild(dinaDiv);
console.log(dinaDiv);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let H2 = document.createElement('h2');
H2.innerText = 'Wubba Lubba dub dub';
document.querySelector('body').appendChild(H2);
console.log(H2);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let listDiv = document.createElement('ul');

apps.forEach(function (items) {
	let Li = document.createElement('li');
	Li.innerText = items;
	listDiv.appendChild(Li);
});
document.body.appendChild(listDiv);
console.log(listDiv);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const main = document.querySelectorAll('[class=fn-remove-me]');
const second = Array.from(main);

second.forEach(function (main) {
	document.body.removeChild(main);
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
let midTxt = document.createElement('p');
midTxt.innerText = 'Voy en Medio!';
document.body.insertBefore(midTxt, document.querySelectorAll('div')[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const ins = document.querySelectorAll('div[class="fn-insert-here"]');
const ArrayAux = Array.from(ins);
console.log(ins);

ArrayAux.forEach(function (element) {
	let txt = document.createElement('p');
	txt.innerText = 'Voy Dentro!';
	element.appendChild(txt);
});
