import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

function clearContent() {
  content.innerHTML = ``;
}

homeButton.addEventListener('click', () => {
  clearContent();
  loadHome();
});

menuButton.addEventListener('click', () => {
  clearContent();
  loadMenu();
});

aboutButton.addEventListener('click', () => {
  clearContent();
  loadAbout();
});