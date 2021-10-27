import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from './styles/globalCss'
import { schemaLight, schemaDark } from './styles/schema'
import { connect } from 'react-redux'
import NavigationMenu from './components/NavigationMenu'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Logo from './components/Logo'
import LoadingIndicator from './components/LoadingIndicator'
import { setDarkModeFromStorage as darkModeSet } from './redux/actions/darkMode'
import { setLanguage } from './redux/actions/langSwitch'
const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio'))
const Main = React.lazy(() => import('./pages/main/Main'))
const Contact = React.lazy(() => import('./pages/contact/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))


const storage = localStorage.getItem('darkmode')
const storageLang = localStorage.getItem('lang')

function App({ darkMode, darkModeSet, setLanguage }) {
  const [themeSwitch, setThemeSwitch] = useState(false)

  useEffect(() => {
    setThemeSwitch(darkMode)
    if (storage === 'true' || storage === 'false') {
      darkModeSet();
    }
    if (storageLang) {
      setLanguage()
    }

  }, [darkMode, darkModeSet, setLanguage])




  return (
    <Router basename='/new-portfolio'>
      <ThemeProvider theme={themeSwitch ? schemaDark : schemaLight}>
        {themeSwitch === false ? <LightTheme /> : <DarkTheme />}
        <Logo />
        <NavigationMenu />

        <Suspense fallback={<LoadingIndicator />}>
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
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default connect(state => ({
  darkMode: state.darkModeReducer.darkMode
}), { darkModeSet, setLanguage })(App);
