import styled from 'styled-components';
export const Container=styled.div`
  display: ${({visible})=>visible?"flex":"grid"};
  justify-content: space-evenly;
  place-items:center;
  margin-top: 1%;
  @media screen and (max-width: 800px) {
  flex-direction:column;
  .teclado{
    margin-top:50px;
  }
}
.inicio{
    display:${({visible})=>visible?"none":"grid"};
    place-items:center;
    height:100vh;
    width:100vh;
}
input{
    padding:25px;
    background-color:#f0c;
    cursor: pointer;
    display:${({visible2})=>visible2?"none":"block"};
}
h1{
  display:${({visible2})=>visible2?"block":"none"};
}
.teclado,.tablero{
  display: ${({visible})=>visible?"grid":"none"};
  gap: 10px;
  width: 45%;
  grid-template-columns: repeat(5, 17%);
  grid-template-rows: repeat(6, 80px);
}
.tablero div,.teclado div:not(.blanco) {
  border: 1px solid #000;
  display: grid;
  place-items: center;
}
.teclado div:hover:not(.blanco) {
  cursor: pointer;
  background: #ccc;
}
.green{
  background-color: #0f0;
}
.red{
  background-color: #f00;
}
.yellow{
  background-color: #ff0;
}
`