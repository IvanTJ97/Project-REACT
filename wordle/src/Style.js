import styled from 'styled-components';
export const Container=styled.div`
  display: ${({visible})=>visible?"flex":"grid"};
  justify-content: space-evenly;
  place-items:center;
  margin-top: 1%;
  font-size: 35px;
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
}
.teclado,.tablero{
  display: ${({visible})=>visible?"grid":"none"};
  gap: 10px;
  width: 45%;
  grid-template-columns: repeat(5, 17%);
  grid-template-rows: repeat(6, 80px);
}
.tablero div,.teclado div {
  display: grid;
  place-items: center;
}
.teclado div{
  border-radius:10px;
  background-color:#ccc;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
  margin:3px;
}
.tablero div{
  border:2px solid #000;
}
.teclado div:hover{
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
@media screen and (max-width: 799px) {
    width:100%;
    height:100vh;
    margin-top:0;
    flex-direction:column;
    .inicio{
      max-height:100vh;
    }
    .teclado,.tablero{
      justify-content:space-evenly;
      padding:10px;
      width:100%;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(6,48px);
    }
    .teclado{
      margin-top:-35px;
    }
}
`