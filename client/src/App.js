import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import { Home, Login, Payment, Profile, Register } from './Views';
import NavBar from './Components/NavBar/NavBar';
import GamesBar from './Components/GamesBar/GamesBar';

function App() {
  const location= useLocation()
  return (
    <div className="App">
        <NavBar />
          {location.pathname !== ('/profile') && <GamesBar/>}
          <Routes>
            <Route path='/' element={  <Home/> }/>
            <Route exact path='/login' element={ <Login/> }/>
            <Route exact path='/payment' element={ <Payment/> }/>
            <Route exact path='/profile' element={ <Profile/> }/>
            <Route exact path='/register' element={ <Register/> }/>
          </Routes>
    </div>
  );
}

export default App;
