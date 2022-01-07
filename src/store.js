import {createStore} from 'redux';

const initialState = {
    burgerOpen: true
}

const reducer = (state = initialState, action) => {

    if (action.type === "openBurgerMenu") {
        return {...state, burgerOpen: action.payload}
    }

    if (action.type === "closeBurgerMenu") {
        return {...state, burgerOpen: action.payload}
    }

    return state;

}

export const store = createStore(reducer);