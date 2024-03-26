import styled from 'styled-components'

// {ListCont, TagBtn}

export const TagBtn = styled.button`
    background:${props =>
      props.isActive === 'active' ? '#f3aa4e' : 'transparent'};
    border:1px solid #f3aa4e;
    outline:none;
    cursor:pointer;
    border-radius:20px;
    width:auto;
    height:30px;
    color:#f8fafc;
    padding-left:15px;
    padding-right:15px;
`
