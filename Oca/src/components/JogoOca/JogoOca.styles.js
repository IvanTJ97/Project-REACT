import styled from 'styled-components';

export const Test = styled.div`
    *{
        box-sizing: border-box;
        font-family: 'Kumbh Sans',sans-serif;
        font-size: 20px;
    }
    .tablero{
        margin: 10px auto;
        width:85%;
        display: grid;
        grid-template-columns: repeat(10,10%);
        grid-template-rows: repeat(9,60px);
        position:relative; 
    }
    .tablero div:not(.blanco,.centro){border:1px solid #000;}
    .centro{grid-column: 3/9;grid-row: 3/7;}
    .blanco{grid-column:6/9;}
    .inicio{grid-column: 1/3;}
`;
export const Chip=styled.div`
    background:${({color})=>color};
    width:2.5%;
    height:5%;
    border-radius: 50%;
    top: ${({y})=>y}%;
    left: ${({x})=>x}%;
    position:absolute;
    transition:all 1s;
    display:grid;
    place-items:center;
`
export const Res=styled.div`
    display:flex;
    text-align:center;
    *:not(.btn){width:50%;}
    .btn{
        position:absolute;
        top:0;
        left:0;
        width:5%;
        height:100%;
    }
`