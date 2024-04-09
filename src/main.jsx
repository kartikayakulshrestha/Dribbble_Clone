import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./pages/Login.jsx"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Notfound from './pages/notfound.jsx'
import Step2 from './pages/Step2.jsx'
import Verify from './pages/Verif.jsx'
import Step3 from './pages/Step3.jsx'
import store from './redux/Store.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route path="/signup/step2" element={<Step2 />}></Route>
        <Route path="/signup/step3" element={<Step3 />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
    
      
    </Provider>
  </React.StrictMode>,
)
