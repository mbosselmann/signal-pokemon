import './style.css'
// import { Pokemon } from "./pokemon/types.ts";
// import { fetchAllPokemons } from "./pokemon/pokemon.service.ts";

// const list = document.querySelector<HTMLDivElement>('#list')!
// const info = document.querySelector<HTMLDivElement>('#info')!
// const pageTitle = document.querySelector<HTMLTitleElement>('#page-title')!

/** @First
`<div class="flex items-center cursor-pointer hover:bg-red-100" id="${pokemon.name}">
    <img class="w-8" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <div class="text-xs capitalize">${pokemon.name}</div>
  </div>
`
***/

/** @Second
  `
  <img src="${selectedPokemon.get()?.sprites.front_default}" alt="${selectedPokemon.get()?.name}" />
  <h2 class="text-xl font-bold h-10">${selectedPokemon.get()?.name}</h2>
  <div>Height - ${selectedPokemon.get()?.height}</div>
  <div>Weight - ${selectedPokemon.get()?.weight}</div>
 `
 * ***/

function init() {
    // Start your code here
}

init()