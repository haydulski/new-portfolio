import { SWITCH_THEME, SET_DARK_MODE_FROM_STORAGE } from "../enums"
export const switchToDark = () => (dispatch) => {

    dispatch({
        type: SWITCH_THEME
    })
}
export const setDarkModeFromStorage = () => (dispatch) => {
    const value = localStorage.getItem('darkmode') === 'false' ? false : true
    dispatch({
        type: SET_DARK_MODE_FROM_STORAGE,
        payload: value
    })
}