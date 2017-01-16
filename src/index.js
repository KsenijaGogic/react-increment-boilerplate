import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store'

const App = () => (
  <div>
    <Provider store={store}>
      {routes}
    </Provider>
  </div>
)

render(<App />, document.getElementById('app'))