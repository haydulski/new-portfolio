import { SWITCH_THEME, SET_DARK_MODE_FROM_STORAGE } from './enums'
const intialState = {
    darkMode: false,
    loading: null
}

export default function darkModeStore(state = intialState, action) {
    switch (action.type) {
        case SWITCH_THEME:
            localStorage.setItem('darkmode', !state.darkMode);
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case SET_DARK_MODE_FROM_STORAGE:
            return {
                ...state,
                darkMode: action.payload
            }

        default:
            return state;
    }
}