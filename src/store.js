import {createStore} from 'redux';

const initialState = {
    burgerOpen: true,
    showContactManager: true,
    showProfileSlide: false,
    profileSlideContent: [],
    currentPage: "Overview"
}

const reducer = (state = initialState, action) => {

    if (action.type === "openBurgerMenu") {
        return {...state, burgerOpen: action.payload}
    }

    if (action.type === "closeBurgerMenu") {
        return {...state, burgerOpen: action.payload}
    }

    if (action.type === "showProfileSlide") {
        return {...state, showProfileSlide: action.payload}
    }

    if (action.type === "updateProfileSlideContent") {
        return {...state, profileSlideContent: action.payload}
    }

    if (action.type === "changePage") {
        return {...state, currentPage: action.payload}
    }

    

    

    return state;

}

export const store = createStore(reducer);