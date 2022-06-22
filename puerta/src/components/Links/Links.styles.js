import styled from 'styled-components';

export const Test = styled.ul`
margin:0;
padding:0;
display: flex;
list-style:none;
text-align:center;
li{
    flex-grow:1;
}
a{
    text-decoration:none;
    color:#000;
    display:block;
    padding:15px;
    background-color:#99c0fa;
    transition:background-color .5s;
    &:hover{
        background-color:#5275ba;
        color:#fff;
    }
}
`;