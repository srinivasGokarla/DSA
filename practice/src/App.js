import logo from './logo.svg';
import './App.css';
import ProgressBar from './Component/ProgressBar';
import CheckboxList from './Component/CheckBox';
import FixSyntex from "./Component/FixSyntaxError";
import StyledButton from "./Component/StyledButton"

function App() {
  return (
    <div className="App">
    < ProgressBar/>
    <CheckboxList/>
    <FixSyntex/>
    <StyledButton />
    </div>
  );
}

export default App;
