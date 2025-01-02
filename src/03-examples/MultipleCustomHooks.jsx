import { useCounter, useFetch } from "../hooks"
import { LoadingMsg } from "./LoadingMsg";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1)
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>Pokemon info</h1>
      <hr />

      { 
        isLoading 
        ? <LoadingMsg /> 
        : (
          <PokemonCard 
            id={data.id} 
            name={data.name} 
            sprites={ [
              data.sprites.front_default,
              data.sprites.back_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
            ] }
          />
        )
      }

      <button 
        onClick={ () => counter > 1 && decrement() }
        className="btn btn-primary mt-2"
      > 
        Anterior 
      </button>
      <button 
        onClick={ () => increment() }
        className="btn btn-primary mt-2"
      > 
        Siguiente 
      </button>
    </>
  )
}
