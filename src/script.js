/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import './style.scss';
import Header from './header/header.js';
import Footer from './Footer/footer.js';

const footer = document.getElementById('footer');
const header = document.getElementById('header');

header.append(Header);
footer.append(Footer);
