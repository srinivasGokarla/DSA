import React from 'react'
import styled from 'styled-components'

const StyledButton = () => {
	// Write your code here
   
    
    return(
        <Button>
           Click me!
           

        </Button>
    )
}

export default StyledButton

const Button = styled.button`
font-size : 16px;
padding : 10px 20px;
border-radius : 5px;
cursor : pointer;
color : #fff;
background-color : blue;

&:hover {
    background-color: #ADD8E6;
    color: #000;
  }
`
