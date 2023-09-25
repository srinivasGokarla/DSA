import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {
    const percentage = Math.min(Math.max(0,percent),100)
	return (
		<Wrapper data-testid="wrapper" >
			<Progress data-testid="progress" percent ={percentage} />
		</Wrapper>
	)
}

export default ProgressBar

const Wrapper = styled.div`
height : 20px;
border-radius : 5px;
width : 100%;
background-color : lightgrey;
`

const Progress = styled.div`
width: ${(props) => props.percent}%;
height : 20px;
border-radius : 5px;
background-color : green;
`

