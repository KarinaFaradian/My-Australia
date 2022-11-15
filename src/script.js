/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import './style.scss';
import Header from './header/header.js';
import Footer from './Footer/footer.js';
import Carousel from './carousel/carousel.js';

const footer = document.getElementById('footer');
const header = document.getElementById('header');
const carousel = document.getElementById('carousel');

header.append(Header);
footer.append(Footer);
carousel.append(Carousel);

let offset = 0;
const carouselLine = document.querySelector('.carousel__list');
const next = document.querySelector('.carousel__next');
const prev = document.querySelector('.carousel__prev');

next.addEventListener('click', () => {
  offset += 612;
  if (offset > 1836) {
    offset = 0;
  }
  carouselLine.style.left = `${-offset}px`;
});

prev.addEventListener('click', () => {
  offset -= 612;
  if (offset < 0) {
    offset = 1836;
  }
  carouselLine.style.left = `${-offset}px`;
});
