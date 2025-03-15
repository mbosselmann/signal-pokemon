import { fetchAllPokemons } from "./pokemon/pokemon.service";
import { Pokemon } from "./pokemon/types";
import { createEffect, Signal } from "./signal/signal";
import "./style.css";

const list = document.querySelector<HTMLDivElement>("#list")!;
const info = document.querySelector<HTMLDivElement>("#info")!;
const pageTitle = document.querySelector<HTMLTitleElement>("#page-title")!;

//
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

const pokemonList = new Signal<Pokemon[]>([]);
const selectedPokemon = new Signal<Pokemon | null>(null);

createEffect(() => {
  list.innerHTML = pokemonList
    .get()
    .map(
      (pokemon) =>
        `<div class="flex items-center cursor-pointer hover:bg-red-100" id="${pokemon.name}">
    <img class="w-24" src="${pokemon.sprites.back_default}" alt="${pokemon.name}" />
    <div class="text-xs capitalize">${pokemon.name}</div>
  </div>
`
    )
    .join("");

  pokemonList.get().forEach((pokemon) => {
    document.getElementById(pokemon.name)?.addEventListener("click", () => {
      selectedPokemon.set(pokemon);
    });
  });
});

createEffect(() => {
  if (selectedPokemon.get()) {
    info.innerHTML = `
  <img class="w-32" src="${
    selectedPokemon.get()?.sprites.front_default
  }" alt="${selectedPokemon.get()?.name}" />
  <h2 class="text-xl font-bold h-12 capitalize">${
    selectedPokemon.get()?.name
  }</h2>
  <div>Height - ${selectedPokemon.get()?.height}</div>
  <div>Weight - ${selectedPokemon.get()?.weight}</div>
 `;

    const name = selectedPokemon.get()?.name;

    pageTitle.innerText =
      "Pokemons 🔥 - " + name?.charAt(0).toUpperCase() + name?.slice(1);
  }
});

function init() {
  // Start your code here

  fetchAllPokemons().then((pokemons) => pokemonList.set(pokemons));
}

init();
