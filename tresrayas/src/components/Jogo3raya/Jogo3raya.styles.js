import styled from 'styled-components';

export const Test = styled.div`
h1{margin:0}
display:grid;
place-items:center;
.container{
    display:grid;
    grid-template-columns:repeat(3,150px);
    grid-template-rows:repeat(3,150px);
    div{
        border:1px solid #000;
        display:grid;
        place-items:center;
        font-size:100px;
    }
}
.playerX{
    background-color:#00f;
}
.playerO{
    background-color:#f00;
}
`;