import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './Redux/ReduxStore/ReduxStore'
import LanguageProvider from './Provider/LanguageProvider.jsx'
import AuthenticationProvider from './Provider/AuthenticationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <LanguageProvider>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </LanguageProvider>
    </Provider>
  </BrowserRouter>,
)
