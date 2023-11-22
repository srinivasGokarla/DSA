import { useEffect } from "react"
import {  useNavigate } from "react-router-dom"


export const HomePage = () =>{
    const navigate = useNavigate()

    const ifLocalStorageExist = ()=>{
        // console.log(localStorage.getItem('user') === null)
        // console.log(window.location.href)
      if( localStorage.getItem('user') !== null) {
           navigate('/')
           localStorage.clear()
      }
    }

    useEffect(()=>{
      
        const check = () => {
          let homeCheck = window.location.href.split("/")
        if ( localStorage.getItem('user') === null && homeCheck[3] === "home"){
        navigate('/')
      } 

     
    }

    check()
    },[])
    return <div>
        <h1>welcome to home page</h1>
        <button onClick={ifLocalStorageExist}>Logout</button>
    </div>
}