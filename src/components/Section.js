import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg, firstSection }) {


 return (

  <Wrap backgroundImg={backgroundImg} >
   {/* <Fade top appear> */}
   <ItemText>
    <h1>{title}</h1>
    <p>{description}</p>
   </ItemText>
   {/* </Fade> */}
   {/* <Fade top delay={300} appear> */}
   <ButtonsWrapper>
    <ButtonGroup>
     <LeftButton>{leftBtnText}</LeftButton>
     {
      rightBtnText &&
      <RightButton>
       {rightBtnText}
      </RightButton>
     }
    </ButtonGroup>
    {
     firstSection ?
      <DownArrow src='/images/down-arrow.svg'></DownArrow> : null
    }

   </ButtonsWrapper>
   {/* </Fade> */}
  </Wrap>

 )
}

export default Section

// align-items is for vertical alignments
// justify-content is for horizontal alignments
// BUT if we use flex-direction: column then the above flips (becomes vice-versa)
const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: ${(props) => `url("images/${props.backgroundImg}")`};
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`

const ItemText = styled.div`
 padding-top: 15vh;
 text-align: center;
 font-size: 30px;
`

const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column
`

const ButtonGroup = styled.div`
 display: flex;
 margin-bottom: 30px;
 justify-content:center;

 @media (max-width: 768px) {
     flex-direction: column;
 }
`

const LeftButton = styled.div`
 background-color: rgba(23,26,32,0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 cursor: pointer;
 margin: 8px;
`

const RightButton = styled(LeftButton)`
 background-color: white;
 opacity: 0.65;
 color: black;
`

const DownArrow = styled.img`
 height: 40px;
 animation: animateDown infinite 1.5s;
 overflow-x: hidden;
`
