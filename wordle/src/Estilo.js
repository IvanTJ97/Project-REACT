import styled from 'styled-components';
export const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
  font-size: 1.2rem;
  width:100%;
  height:90vh;
.inicio{
    display:${({visible})=>visible?"none":"grid"};
    place-items:center;
}
input{
    padding:25px;
    font-size: 1.5rem;
    background-color:#f0c;
    cursor: pointer;
}
.teclado,.tablero{
  display: ${({visible})=>visible?"grid":"none"};
  gap: 10px;
  width: 80%;
  margin:0 auto;
  grid-template-columns: repeat(5, 1fr);
}
.tablero{
  grid-template-rows: repeat(6, 40px);
}
.tablero div,.teclado div{
  display: grid;
  place-items: center;
}
.teclado div{
  border-radius:10px;
  background-color:#ccc;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
  padding:10px 0;
}
.tablero div{
  border:2px solid #000;
}
.teclado div:hover{
  cursor: pointer;
  background: #999;
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
@media screen and (min-width: 799px) {
    flex-direction:row;
    height:100vh;
    .teclado,.tablero{
      width:45%;
      height:80%;
    }
    .tablero{
      grid-template-rows: repeat(6, 67px);
    }
}
`