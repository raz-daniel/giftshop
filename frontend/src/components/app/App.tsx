import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Auth from '../auth/auth/Auth'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

export default function App(): JSX.Element {

  return (
    <div className='App'>
      <BrowserRouter>
        <Provider store={store}>
          <Auth>
            <Layout />
          </Auth>
        </Provider>
      </BrowserRouter>
    </div>
  )
}