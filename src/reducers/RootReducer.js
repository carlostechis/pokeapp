import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMutipleReducer from "./PokemonMutipleReducer"

const RootReducer = combineReducers( {
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMutipleReducer,

})

export default RootReducer;
