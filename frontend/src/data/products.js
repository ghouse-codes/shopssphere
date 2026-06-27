import iphone from '../assets/products/iphone.svg';
import samsung from '../assets/products/samsung.svg';
import macbook from '../assets/products/macbook.svg';
import ipad from '../assets/products/ipad.svg';

export const products = [
  {
    id: 1,
    name: 'iPhone 16',
    price: 79999,
    image: iphone,
    category: 'Mobiles',
    rating: 4.8,
    popularity: 92,
    newest: 1,
    description: 'A powerful all-day phone with a stunning display and pro-grade camera system.',
      inStock: true  
  },
  {
    id: 2,
    name: 'Samsung S25',
    price: 69999,
    image: samsung,
    category: 'Mobiles',
    rating: 4.7,
    popularity: 88,
    newest: 2,
    description: 'Flagship performance wrapped in a sleek design and vibrant AMOLED display.',
    inStock: false
  },
  {
    id: 3,
    name: 'MacBook Air',
    price: 99999,
    image: macbook,
    category: 'Laptops',
    rating: 4.9,
    popularity: 95,
    newest: 3,
    description: 'Thin, lightweight, and fast — designed for creators and focused work.',
    inStock: true
  },
  {
    id: 4,
    name: 'iPad Pro',
    price: 59999,
    image: ipad,
    category: 'Mobiles',
    rating: 4.6,
    popularity: 84,
    newest: 4,
    description: 'A versatile tablet crafted for entertainment, creativity, and productivity.',
    inStock: true
  },
];
