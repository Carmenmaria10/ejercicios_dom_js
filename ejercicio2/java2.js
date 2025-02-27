//2.1
let nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//2.2
const nuevoDiv2= document.createElement("div");
const nuevoP2 = document.createElement("p");
nuevoDiv2.appendChild(nuevoParrafo);
document.body.appendChild(nuevoDiv2);

//2.3
const nuevoDiv3 = document.createElement("div");

for (let i = 1; i <= 6; i++) {
    const nuevoP3 = document.createElement("p");
    nuevoDiv3.appendChild(nuevoP3);
}

document.body.appendChild(nuevoDiv3);

//2.4
const NuevoP4 = document.createElement("p");
NuevoP4.textContent= "Soy dinámico!";
document.body.appendChild(NuevoP4);

//2.5
const h2_5 = document.querySelector('.fn-insert-here');
h2_5.textContent= "Wubba Lubba dub dub";

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);

//2.7
const removeMe = document.querySelectorAll(".fn-remove-me");
removeMe.forEach(element => element.remove());

//2.8
const nuevoP8 = document.createElement('p');
nuevoP8.textContent = 'Voy dentro!';

const DivExistente1 = document.querySelector(".fn-insert-here");
const DivExistente2 = document.querySelectorAll(".fn-insert-here")[1];

DivExistente1.parentNode.insertBefore(nuevoP8, DivExistente2);

//2.9
const nuevoP9 = document.createElement('p');
nuevoP9.textContent = 'Voy dentro!';

const divs = document.querySelectorAll('.fn-insert-here');

divs.forEach(div => {
  div.appendChild(nuevoP9.cloneNode(true));
});