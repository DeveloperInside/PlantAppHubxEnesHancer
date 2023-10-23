if (__DEV__) {
  import('./app/helpers/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react'
import Navigation from 'navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from 'services/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
