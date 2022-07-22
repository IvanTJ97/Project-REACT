import styled from 'styled-components';

export const Test = styled.div`
    margin:auto;
    display: grid;
    grid-template-columns:repeat(7,100px);
    .C1{grid-column:4/5}
    .C2{grid-column:3/4}
    .C3{grid-column:5/6}
    .C4{grid-column:2/3}
    .C5{grid-column:4/5}
    .C6{grid-column:6/7}
    .C7{grid-column:1/2}
    .C8{grid-column:3/4}
    .C9{grid-column:5/6}
    .C10{grid-column:7/8}
    .C11{
        display:grid;
        place-items:center;
        grid-column:3/6;
        img{transform:rotate(90deg);}
    }
    div{
        height:150px;
    }
`;
export const Container=styled.div`
    display:grid;
    place-items:center;
`