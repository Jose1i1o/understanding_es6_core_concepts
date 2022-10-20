import heroes, { owners } from '../data/heroes.js';

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

// console.log(getHeroeById(2));

const getHeroesByBrand = (brand) => heroes.filter(heroe => heroe.owner === brand);
const DCHeroes = getHeroesByBrand('DC');
// console.log(DCHeroes);

const MarvelHeroes = getHeroesByBrand('Marvel');
// console.log(MarvelHeroes);

// console.log(owners);