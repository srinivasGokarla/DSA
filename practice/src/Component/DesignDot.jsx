import "./styles.css";
import {useState} from 'react'

export default function DesignDot() {
  const arr = [1,2,3,4,5];
  const [set, setSet] = useState(arr);

  const handleDelete = (index) => {


const array = set.filter((el,ind) =>  ind!== index)
setSet(array)
  }
 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{
        set.map((item,index) => <p key={index} onClick={() => handleDelete(index)} >
        {item} </p>)
      }</h3>
    </div>
  );
}
