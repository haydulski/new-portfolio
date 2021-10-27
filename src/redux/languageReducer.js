import { SWITCH_LANG, SET_LANG_FROM_STORAGE } from './enums'
const intialState = {
    language: 'pl'
}

export default function languageStore(state = intialState, action) {
    switch (action.type) {
        case SWITCH_LANG:
            localStorage.setItem('lang', state.language === 'pl' ? 'ang' : 'pl')
            return {
                ...state,
                language: state.language === 'pl' ? 'ang' : 'pl'
            }
        case SET_LANG_FROM_STORAGE:

            return {
                ...state,
                language: action.payload
            }

        default:
            return state;
    }
}