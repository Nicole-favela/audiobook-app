

import Home from './pages/Home'
import Login from './pages/Login'
import { auth } from './config/firebase'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/user/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'

import './App.css';

function App() {

  return (
    <div className="app">
      <>
        <BrowserRouter>


          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />} path='/' exact />
            </Route>

            <Route element={<Login />} path="/login" />
            {/* <AuthListener /> */}
          </Routes>

        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
