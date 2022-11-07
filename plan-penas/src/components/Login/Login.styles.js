import styled from 'styled-components';
export const LoginContainer=styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    div *{
       text-align:center;
       width:100%;
       margin-bottom:10px;
    }
    div input[type="text"]{
        border:0;
        border-bottom:1px solid #ddd;
        &:focus{
            border-bottom:2px solid #000;
            outline:0;
        };
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