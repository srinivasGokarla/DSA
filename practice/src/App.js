

import './App.css';
import ProgressBar from './Component/ProgressBar';
import CheckboxList from './Component/CheckBox';
import FixSyntex from "./Component/FixSyntaxError";
import StyledButton from "./Component/StyledButton";
import Counter from "./Component/Counter";
import Tabs from "./Component/TabBar";
import SignUpForm from "./Component/ValidateSignUp";
import Senwell from "./Component/Senwell";
import LoginForm from './Component/LoginForm';
import { HomePage } from './Component/HomePage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';




function App() {
  return (
    <div className="App">
    < ProgressBar/>
    <CheckboxList/>
    <FixSyntex/>
    <StyledButton />
    <Counter />
    <Tabs />
    <SignUpForm />
    <Senwell />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginForm  />}/>
        <Route path="/Homepage" element={ <HomePage />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
