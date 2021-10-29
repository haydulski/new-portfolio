import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import LoadingIndicator from './components/LoadingIndicator'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingIndicator />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


