import './App.css';
import { Home, Payment, Profile, Register, Chat, LandingPage, Favorites } from './Views';
import GameDetail from './Components/GameDetail/GameDetail';
import GamePosts from './Components/GamePosts/GamePosts';
import {Routes, Route, useLocation, redirect} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ProtectedRoutes from './router/ProctectedRoutes';


function App() {
  const location= useLocation();
  return (
    <div className="App">
        {location.pathname !== '/' && location.pathname !== '/register' && <NavBar />}
          <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route exact path='/register' element={ <Register/> }/>
            <Route element={<ProtectedRoutes />}>
              <Route path='/home' element={  <Home/> }/>
              <Route path='/games/:detail' element={<GameDetail />} />
              <Route path='/post' element={<GamePosts />} />
              <Route path='/favorites' element={<Favorites/>} />
              <Route exact path='/payment' element={ <Payment/> }/>
              <Route exact path='/profile/:id' element={ <Profile/> }/>
              <Route exact path='/chat' element={ <Chat/> }/> 
            </Route>
          </Routes>
    </div>
  );
}

export default App;
