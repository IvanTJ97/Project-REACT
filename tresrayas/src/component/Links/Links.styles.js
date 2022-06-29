import styled from 'styled-components';

export const Test = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    ul{list-style:none}
    li{margin:50px}
    a{
        text-decoration:none;
        background-color:#f0c;
        padding:30px;
        display:inline-block;
        min-width:100px;
        text-align:center;
        &:hover{
            background-color:#c1179f;
            color:#fff;
        }
    }
`;