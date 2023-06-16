import './App.css';
import { Home, Login, Payment, Profile, Register, Chat, LandingPage, Favorites } from './Views';
import GamePosts from './Components/GamePosts/GamePosts';
import {Routes, Route, useLocation} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';


function App() {
  const location= useLocation()
  return (
    <div className="App">
        {location.pathname !== '/' && <NavBar />}
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={  <Home/> }/>
            <Route path='/games/:id' element={<GamePosts />} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route exact path='/login' element={ <Login/> }/>
            <Route exact path='/payment' element={ <Payment/> }/>
            <Route exact path='/profile/:id' element={ <Profile/> }/>
            <Route exact path='/register' element={ <Register/> }/>
            <Route exact path='/chat' element={ <Chat/> }/>
            
          </Routes>
    </div>
  );
}

export default App;
