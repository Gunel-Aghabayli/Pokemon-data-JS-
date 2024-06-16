const pokemonData = document.querySelector(".pokemonData");
const container = document.querySelector(".container");
const clickBtn1 = document.querySelector(".clickBtn1");
const clickBtn2 = document.querySelector(".clickBtn2");
const clickBtn3 = document.querySelector(".clickBtn3");
const clickBtn4 = document.querySelector(".clickBtn4");
const clickBtn5 = document.querySelector(".clickBtn5");
const clickBtn6 = document.querySelector(".clickBtn6");
const clickBtn7 = document.querySelector(".clickBtn7");
const clickBtn8 = document.querySelector(".clickBtn8");
const clickBtn9 = document.querySelector(".clickBtn9");

const getPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw "Error cixdi";
      }
    })
    .then((data) => {
      console.log(data);
      const dataPokemon = data;
      const html = `<article class="pokemon">
   <h3 class="name">Name:${dataPokemon.name}</h3>
   <h4 class="id">ID:${dataPokemon.id}</h4>
   <p class="weight">Weight:${dataPokemon.weight}</p>
   <p class="moves">Moves:${data.moves[0].move.name}</p>
   
 </article>`;

      pokemonData.insertAdjacentHTML("beforeend", html);
    });
};

clickBtn1.addEventListener("click", () => {
  getPokemon("pikachu");
});
clickBtn2.addEventListener("click", () => {
  getPokemon("charmander");
});
clickBtn3.addEventListener("click", () => {
  getPokemon("bulbasaur");
});
clickBtn4.addEventListener("click", () => {
  getPokemon("squirtle");
});
clickBtn5.addEventListener("click", () => {
  getPokemon("eevee");
});
clickBtn6.addEventListener("click", () => {
  getPokemon("jigglypuff");
});
clickBtn7.addEventListener("click", () => {
  getPokemon("snorlax");
});
clickBtn8.addEventListener("click", () => {
  getPokemon("mewtwo");
});
clickBtn9.addEventListener("click", () => {
  getPokemon("gyarados");
});
