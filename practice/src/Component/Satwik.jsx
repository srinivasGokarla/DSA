import React, {useState,useEffect} from "react"

const Satwik = () => {
    const[data, setData] = useState(null);
    const getData = () => 
      fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
      .then((res)=> res.json())
    
    useEffect(() => {
      getData().then((data) => 
      setData(data.data))
     // console.log(data.data))
    }, [])
  return (
    <div>

         <h1>Fetch</h1>
         {data?.map((item) =>
        <div key={item.id}>
           
<img src={item.image} alt="" style={{width: "20%"}} />
<p> Brand: {item.brand}</p>
           <p> Category : {item.category}</p>
           <p> Title : {item.title}</p>
           <p> Price : {item.price}Rs/-</p>
        
           
        </div>)} 
       
       
    </div>
  )
}

export default Satwik
