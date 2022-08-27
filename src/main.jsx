import React from 'react'
import ReactDOM from 'react-dom/client'
import {UserProvider} from './context/UserContext'
import App from './pages/App'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle/>
      <App />
    </UserProvider>
  </React.StrictMode>
)
