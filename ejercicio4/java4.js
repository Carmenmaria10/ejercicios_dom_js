//4.1
const button = document.querySelector("#btnToClick");
button.addEventListener("click", (event) => {
  console.log(event);
});

//4.2
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

//4.3
const inputInput = document.querySelector(".value");
inputInput.addEventListener("input", (event) => {
  console.log(event.target.value)
});

//4.4
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul4 = document.createElement("ul");

albums.forEach(album => {
  const li4 = document.createElement("li");
  li4.textContent = album;
  ul4.appendChild(li4);
})

document.body.appendChild(ul4);