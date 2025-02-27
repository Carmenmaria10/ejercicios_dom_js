//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul1 = document.createElement("ul");

countries.forEach(country => {
  const li1 = document.createElement("li");
  li1.textContent= country;
  ul1.appendChild(li1);
});

document.body.appendChild(ul1);

//3.2
const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();

//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const Div3 = document.querySelector('[data-function="printHere"]');

const ul3 = document.createElement("ul");

cars.forEach(car => {
  const li3 = document.createElement("li");
  li3.textContent = car;
  ul3.appendChild(li3);
})

Div3.appendChild(ul3);

//3.4 y 3.6
const countries4 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, 
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const divs4 = document.createElement("div");

countries4.forEach(country4 => {
  const div4 = document.createElement("div");
  const h44 = document.createElement("h4");
  const img4 = document.createElement("img");
  const deleteButton = document.createElement("button");

  h44.textContent = country4.title;
  img4.src = country4.imgUrl;
  deleteButton.textContent= "Delete this element"

  deleteButton.addEventListener("click", () => {
    div4.remove();
  });

  div4.appendChild(h44);
  div4.appendChild(img4);
  div4.appendChild(deleteButton);

  divs4.appendChild(div4);

  document.body.appendChild(divs4);
});

//3.5
// const deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";
// document.body.appendChild(deleteButton);

// deleteButton.addEventListener("click", () => {
//   const allDivs = divs4.querySelectorAll("div");
//   if (allDivs.length > 0) {
//     allDivs[allDivs.length - 1].remove();
//   }
// });
