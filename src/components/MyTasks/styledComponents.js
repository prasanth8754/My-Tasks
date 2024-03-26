import styled from 'styled-components'

// {BgCont,Heading,LeftCont,RightCont,Label,Input,Button,UlCont,TaskUlCont}

export const BgCont = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
`
export const LeftCont = styled.div`
    background-color:#131213;
    height:100vh;
    width:40%;
    padding:20px;
    padding-top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Heading = styled.h1`
    color:${props => (props.right ? '#ffffff' : '#f3aa4e')};
    font-size:${props => (props.right ? '25px' : '30px')};
    text-align:${props => (props.right ? 'start' : 'center')};
`
export const NoTaskHeading = styled(Heading)`
    font-weight:bold;
    text-align:center;
    margin-top:100px;
`

export const RightCont = styled.div`
    background-color:#000000;
    height:100vh;
    width:60%;
    padding:20px;
    padding-top:50px;
    overflow-y:scroll;
`
export const Label = styled.label`
    color:#ffffff;
    font-size:15px;
    align-self:flex-start;
`
export const Input = styled.input`
    background-color:#f8f8f8;
    border:0px;
    outline:none;
    border-radius:2px;
    width:100%;
    height:40px;
    padding-left:20px;
    margin-top:10px;
    margin-bottom:30px;
`
export const Button = styled.button`
    background-color:#f3aa4e;
    width:100px;
    height:40px;
    border:0px;
    outline:none;
    cursor:pointer;
    border-radius:6px;
    color:#ffffff;
`
export const UlCont = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    align-items:center;
    gap:15px;
    flex-wrap:wrap;
`
export const TaskUlCont = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    flex-direction:column;
    gap:15px;

`
