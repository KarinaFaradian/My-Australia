import './style.scss';
import Header from './Header/header.js';
import Footer from './Footer/footer.js';

const footer = document.getElementById('footer');
const header = document.getElementById('header');

header.append(Header);
footer.append(Footer);
