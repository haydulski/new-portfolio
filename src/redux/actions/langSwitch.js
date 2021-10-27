import { SWITCH_LANG, SET_LANG_FROM_STORAGE } from "../enums"
export const switchLanguage = () => (dispatch) => {

    dispatch({
        type: SWITCH_LANG
    })
}
export const setLanguage = () => (dispatch) => {

    dispatch({
        type: SET_LANG_FROM_STORAGE,
        payload: localStorage.getItem('lang')
    })
}