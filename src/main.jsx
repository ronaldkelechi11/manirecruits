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
import Home from './screens/Home/Home'
import AdminMain from './screens/Admin/AdminMain'
import Settings from './screens/Settings/Settings'
import Messages from './screens/Messages/Messages'
import Notifications from './screens/Notifications/Notifications'


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

      {/* Login Route */}
      <Route path='/login'>
        <Route index element={<LoginMain />} />
      </Route>

      {/* Home Route */}
      <Route path='/home'>
        <Route index element={<Home />} />
        <Route path=":number" element={<Home />} />
      </Route>

      {/* Setting(Settings and User profile) */}
      <Route path='/settings'>
        <Route index element={<Settings />} />
      </Route>

      <Route path='/messages'>
        <Route index element={<Messages />} />
      </Route>

      <Route path='/notifications'>
        <Route index element={<Notifications />} />
      </Route>


      {/* Admin Route */}
      <Route path='/admin'>
        <Route index element={<AdminMain />} />
      </Route>


    </Routes>
  </BrowserRouter>
)
