import styled from 'styled-components';

export const Test = styled.div`
h1,h2{margin:0}
h2{
    text-align:center;
    font-size:125px;
}
display:grid;
place-items:center;
.container{
    display:grid;
    grid-template-columns:repeat(3,150px);
    grid-template-rows:repeat(3,150px);
    div{
        border:1px solid #000;
    }
}
.playerX{
    background-color:red;
}
.playerO{
    background-color:blue;
}
`;