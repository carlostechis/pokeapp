const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ''
}

const PokemonMutipleReducer = (state= DefaultState, action) => {
    switch (action.type) {
        case 'POKEMON_MULTIPLE_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: ''
            }
        case 'POKEMON_MULTIPLE_SUCCESS':
            return {
                ...state,
                loading: false,
                errorMsg: '',
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }
        case 'POKEMON_MULTIPLE_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'unable to find Pokèmon'
            }
        default:
            return state
    }
}

export default PokemonMutipleReducer