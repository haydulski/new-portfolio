import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from './styles/globalCss'
import { schemaLight, schemaDark } from './styles/schema'
import { connect } from 'react-redux'
import NavigationMenu from './components/NavigationMenu'
import LoadingIndicator from './components/LoadingIndicator'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Logo from './components/Logo'
import { setDarkModeFromStorage as darkModeSet } from './redux/actions/darkMode'
import { setLanguage } from './redux/actions/langSwitch'
import Main from './pages/main/Main'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio'))
// const Main = React.lazy(() => import('./pages/main/Main'))
const Contact = React.lazy(() => import('./pages/contact/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))


const storage = localStorage.getItem('darkmode')
const storageLang = localStorage.getItem('lang')

function App({ darkMode, darkModeSet, setLanguage }) {

  const [themeSwitch, setThemeSwitch] = useState(false)
  const [loaded, setLoaded] = useState(0)

  useEffect(() => {
    setLoaded(1)
    return () => {
      ScrollTrigger.kill()
    }
  }, [])

  useEffect(() => {
    setThemeSwitch(darkMode)
    if (storage === 'true' || storage === 'false') {
      darkModeSet();
    }
    if (storageLang) {
      setLanguage()
    }
  }, [darkMode, darkModeSet, setLanguage])

  return loaded === 0 ?
    <LoadingIndicator />
    : (
      <Router>
        <ThemeProvider theme={themeSwitch ? schemaDark : schemaLight} disableVendorPrefixes={process.env.NODE_ENV === 'production'}>
          {themeSwitch === false ? <LightTheme /> : <DarkTheme />}
          <Logo />
          <NavigationMenu />

          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact dark={darkMode} />
            </Route>
            <Route path="/">
              <Main />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>

          <Footer isDark={themeSwitch} />
        </ThemeProvider>
      </Router>
    );
}

export default connect(state => ({
  darkMode: state.darkModeReducer.darkMode
}), { darkModeSet, setLanguage })(App);
