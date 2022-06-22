import styled from 'styled-components';
export const Container = styled.div`
    background:#000;
    display: grid;
    place-items:center;
    height: 100vh;
`
export const Modal = styled.div`
display:"";
    background:#fff;
    padding:50px 100px 25px ;
    input{
        margin-bottom:20px;
        border:0;
        border-bottom:1px solid #ccc;
        display:inline-block;
        width:100%;
        &:invalid{
            outline:0;
            border:0;
            border-bottom:1px solid #ff0000;
        }
        &:focus{
            outline:0;
            border:0;
            border-bottom:1px solid #9becf3;
        }
    }
    .enviar{
        color:#000;
        text-decoration:none;
        text-align:center;
        display:block;
        background:#166ace;
        padding:10px;
        &:hover{
            cursor:pointer;
        }
    }
    h2{
        margin-bottom:15px;
        margin-top:-10px;
        text-align:center;
    }
    p{
        text-align:center;
    }
`

