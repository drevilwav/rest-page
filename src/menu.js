import bibimbapImg from "./img/bibimbap.png"
import tteokbokkiImg from "./img/tteokbokki.png"
import samgyeopsalImg from "./img/samgyeopsal.png"
import kimchiImg from "./img/kimchi.png"
import haemul_pajeonImg from "./img/haemul_pajeon.png"
import bulgogiImg from "./img/bulgogi.png"

export function loadMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(addDish(bibimbapImg, "Bibimbap", "A mixed rice dish with vegetables, beef, and a fried egg."));
  menu.appendChild(addDish(tteokbokkiImg, "Tteokbokki", "Spicy stir-fried rice cakes in a rich gochujang sauce."));
  menu.appendChild(addDish(samgyeopsalImg, "Samgyeopsal", "Grilled pork belly slices served with dipping sauces and lettuce."));
  menu.appendChild(addDish(kimchiImg, "Kimchi", "Spicy fermented cabbage, a staple in Korean cuisine."));
  menu.appendChild(addDish(haemul_pajeonImg, "Haemul Pajeon", "Seafood and green onion pancake, crispy and savory."));
  menu.appendChild(addDish(bulgogiImg, "Bulgogi", "Grilled marinated beef slices with a savory-sweet flavor."));

  content.appendChild(menu);
}

function addDish(imageScr, title, description) {
  const dish = document.createElement("div");
  dish.classList.add("dish");

  const img = document.createElement("img");
  img.src = imageScr;
  img.alt = title;

  const dishTitle = document.createElement("h3");
  dishTitle.textContent = title;

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;

  dish.appendChild(img);
  dish.appendChild(dishTitle);
  dish.appendChild(dishDescription);

  return dish;
}

