const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')
 
listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click',() =>{
 
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')
 
        const idPokemonSelecionado = pokemon.attributes.id.value
 
        const idCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')
 
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
 
        const pokemonSelecionadoNaListagem = document.querySelector(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
 
    })
 
});