import React from 'react';
import { connect } from 'react-redux'

function Translator({ pl, eng, lang }) {

    return lang === 'pl' ? (
        <>
            {pl}
        </>
    ) : (
        <>
            {eng}
        </>
    )
}
export default connect(state => ({
    lang: state.languageReducer.language
}))(Translator)
