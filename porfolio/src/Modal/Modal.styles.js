import styled from 'styled-components';

export const Style = styled.div`
    background-color:#0009;
    color:#fff;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100vw;
    height: 100%;
    display:${({display})=>display?"grid":"none"};
    place-items:center;
    z-index: 1;
    div{
        background-color:#fff;
        color:#000;
        padding:10px 50px 35px;
    }
    h2{text-align:center;margin-bottom:10px;}
    input[type="button"]{
        padding:5px 10px;
        margin-top:10px;
        background-color:#f1f;
        width:100%;
        color:#fff;
        font-size:20px;
    }
    input[type="text"],input[type="email"]{
        border-bottom:1px solid #0000cc;
        width:100%;
        margin-bottom:10px;
    }
    textarea{
        resize:none;
        border:1px solid #ccc;
    }
    input:focus,textarea:focus{
        outline:0;
    }
    p{text-align:right;}
    span,input[type="button"]:hover{
        cursor: pointer;
    }
`;
