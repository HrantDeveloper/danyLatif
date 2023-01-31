
import './App.css';
import {Routes ,Route} from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';
import Forgotten from './pages/forgotten/Forgotten';
import Home from './pages/home/Home';

import "./pages/signUp/SignUp.css"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<SignUp/>}/>
      <Route path = "sign-in" element = {<SignIn/>}/>
      <Route path = "forgotten" element = {<Forgotten/>}/>
      <Route path = "home" element = {<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
