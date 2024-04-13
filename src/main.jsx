import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Functional Component Importation
import Landing from './screens/Landing/Landing'
import Signupmain from './screens/Signup/Signupmain'


ReactDOM.createRoot(document.getElementById('root')).render(

  // ============ ROUTING FILE =============
  <BrowserRouter>
    <Routes>

      {/* Index Route */}
      <Route path='/' element={<Landing />} />

      {/* Signup Route */}
      <Route path='/signup'>
        <Route index element={<Signupmain />} />
      </Route>


    </Routes>
  </BrowserRouter>
)
