

import Home from './pages/Home'
import Login from './pages/Login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<Login />} path="/login" />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
