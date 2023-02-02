
import './App.css';
import {Routes ,Route} from 'react-router-dom';
import SignUpPage from './pages/signUpPage/SignUpPage';
import SignInPage from './pages/signInPage/SignInPage';
import ForgottenPage from './pages/forgottenPage/ForgottenPage';
import HomePage from './pages/homePage/HomePage';
import Error from './pages/error/Error';
//ROUTER
import {ROUTER} from "./router/index"
const {HOME, SIGNIN, SIGNUP, FORGOTTEN, ERROR} = ROUTER;


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = {SIGNUP} element = {<SignUpPage/>}/>
      <Route path = {SIGNIN} element = {<SignInPage/>}/>
      <Route path = {FORGOTTEN} element = {<ForgottenPage/>}/>
      <Route path = {HOME} element = {<HomePage/>}/>
      <Route path = {ERROR} element = {<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
