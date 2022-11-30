import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvidder } from './context/ConfigContext'
import {UserProvider} from './context/UserContext'
import App from './pages/App'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvidder>
      <UserProvider>
        <GlobalStyle/>
        <App />
      </UserProvider>
    </ConfigProvidder>
  </React.StrictMode>
)
