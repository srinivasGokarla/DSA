

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
import Taskadded from './Component/Taskadded';
import React, { useState } from 'react';
import ResizableLayout from "./Component/ResizableLayout"
import TaskUpdateForm from './Component/TaskUpdateForm';
import Fetch from './Component/Sayali';
import Todo from "./Component/Todo";
import WordSearch from './Component/WordSearch';


function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleUpdateClick = (taskId, currentTitle) => {
    setSelectedTask({ taskId, currentTitle });
  };

  const handleUpdateComplete = () => {
    setSelectedTask(null);
  };

  return (
    <div className="App">
    {/* < ProgressBar/>
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
    </BrowserRouter> */}
    {/* <Taskadded/>
    <Todo/> */}
    {/* <ResizableLayout /> */}
    {/* <WordSearch/> */}
    <Fetch/>
    </div>
  );
}

export default App;
