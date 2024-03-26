import styled from 'styled-components'
import {Heading} from '../MyTasks/styledComponents'

// {
//   ListItem, Heading, Button
// }

export const ListItem = styled.li`
    background-color:#1a171d;
    width:100%;
    display:flex;
    padding:10px;
    justify-content:space-between;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
`
export const Para = styled(Heading)`
    font-size:20px;
    margin:0;
`
export const Tag = styled.button`
    background-color:#f3aa4e;
    width:auto;
    padding-left:20px;
    padding-right:20px;
    height:30px;
    border-radius:20px;
    color:#323f4b;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    margin:0;
`
