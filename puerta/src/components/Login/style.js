import styled from 'styled-components';
export const Container = styled.div`
    background:#000;
    display: grid;
    place-items:center;
    height: 100vh;
`
export const Sign=styled.div`
    width:100%;
    input,p{
        display:inline;
        padding:0;
    }
    .signup{
        border-radius:0;
        border:0;
        background:#166ace;
        padding:10px;
        color:#fff;
        margin:0;
        margin-left:15px;
        display:inline-block;
    }
`
export const Modal = styled.div`
    background:#fff;
    padding:50px 100px 25px ;
    input[type="text"],input[type="password"]{
        margin-bottom:20px;
        border:0;
        border-bottom:1px solid #ccc;
        display:inline-block;
        width:100%;
        &:focus{
            outline:0;
            border:0;
            border-bottom:1px solid #9becf3;
            transform:scale(1.25);
        }
    }
    a{
        color:#000;
        text-decoration:none;
        font-size:12px;
        text-align:center;
        display:block;
        margin-bottom:40px;
    }
    h2{
        margin-bottom:15px;
        margin-top:-10px;
        text-align:center;
    }
    .login{
        padding:10px;
        text-align:center;
        border-radius:0;
        background:#9becf3;
        border:0;
        width:100%;
        margin:10px 0 0;
    }
    input[type="checkbox"]{
        margin-bottom:10px;
    }
`

