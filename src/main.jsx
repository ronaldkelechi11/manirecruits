import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Functional Component Importation
import Landing from './screens/Landing/Landing'
import Signupmain from './screens/Signup/Signupmain'
import SignUpTwo from './screens/Signup/SignUpTwo'
import SignUpThree from './screens/Signup/SignUpThree'
import VerifyEmail from './screens/Signup/VerifyEmail'
import LoginMain from './screens/Login/LoginMain'


ReactDOM.createRoot(document.getElementById('root')).render(

  // ============ ROUTING FILE =============
  <BrowserRouter>
    <Routes>

      {/* Index Route */}
      <Route path='/' element={<Landing />} />

      {/* Signup Route */}
      <Route path='/signup'>
        <Route index element={<Signupmain />} />
        <Route path='2' element={<SignUpTwo />} />
        <Route path='3' element={<SignUpThree />} />
        <Route path='verifyemail' element={<VerifyEmail />} />
      </Route>

      <Route path='/login'>
        <Route index element={<LoginMain />} />
      </Route>


    </Routes>
  </BrowserRouter>
)
