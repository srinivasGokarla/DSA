import { useState } from "react";


function Senwell() {
	
	const [count, setCount] = useState(0);
	const[color,setColor] = useState('')
	const Increment = () => {
        setCount(count+1)
	}
	const Decrement = () => {

		setCount(count -1)
	}
	
	const handleSubmit = (e) => {
	       
        e.preventDefault()
		setColor('red')
	}

	return (
		<>
		<div style={{ backgroundColor: color }}>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
		</>
	);
}

export default Senwell;
