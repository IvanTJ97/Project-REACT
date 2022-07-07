import styled from 'styled-components';

export const Test = styled.div`
form{margin-left:10px}
    input[type="text"]{
        border-bottom:1px solid #0cf;
        margin:10px 0;
        &:focus{
            outline:0;
        }
    }
    textarea{
        resize:none;
        border:1px solid #000;
    }
    input[type="button"]{
        margin-left:5px;
        padding:1px;
        background-color:#0cf;
        color:#000;
        cursor: pointer;
        &:hover{
            background-color:#00f;
            color:#fff;
        }
    }
    button{
        margin:10px 0;
        padding:10px;
        background-color:#f0c;
        cursor: pointer;
        &:hover{
            color:#fff;
        }
    }
    input[type="date"]{
        margin:10px 0;
    }
`;