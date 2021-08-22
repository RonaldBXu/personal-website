import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routing'
import { store } from './store'

const App: React.FC = () => {  

  return (
    <div className="App">
      <Provider store={store}>
          <AppRouter />
      </Provider>
    </div>
  )
}

export { App }
