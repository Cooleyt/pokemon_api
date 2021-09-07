

const DisplayPokemon = (props) => {
    const { pokemons } = props
    console.log(pokemons)
    return(
        <div class = "names">
            {    
            pokemons.map( (pokemon, i)=> (
                <p key={ i }>{ pokemon.name }</p>
            ))}
        </div>
    ); 
}

export default DisplayPokemon;