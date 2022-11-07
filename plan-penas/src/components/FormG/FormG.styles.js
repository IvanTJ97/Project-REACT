import styled from 'styled-components';
export const CreateContainer=styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    div *{
       text-align:center;
       width:100%;
       margin-bottom:10px;
    }
    div input[type="button"]{
        background-color:#0cf;
        border:0;
        padding:5px 0;
        &:hover{
            color:#fff;
            cursor: pointer;
            background-color:#00f;
        };
    }
`;