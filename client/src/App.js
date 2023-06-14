import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Login, Payment, Profile, Register } from './Views';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={  <Home/> }/>
            <Route exact path='/login' element={ <Login/> }/>
            <Route exact path='/payment' element={ <Payment/> }/>
            <Route exact path='/profile' element={ <Profile/> }/>
            <Route exact path='/register' element={ <Register/> }/>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
