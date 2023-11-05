import logo from './logo.svg';
import './App.css';
import ProgressBar from './Component/ProgressBar';
import CheckboxList from './Component/CheckBox';
import FixSyntex from "./Component/FixSyntaxError";
import StyledButton from "./Component/StyledButton";
import Counter from "./Component/Counter";
import Tabs from "./Component/TabBar";
import SignUpForm from "./Component/ValidateSignUp";
import Senwell from "./Component/Senwell";


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
    {/* <Senwell /> */}
    </div>
  );
}

export default App;
