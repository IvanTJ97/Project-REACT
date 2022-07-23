import styled from 'styled-components';

export const Test = styled.div`
    margin:auto;
    display: grid;
    grid-template-columns:repeat(8,50px);
    .C1{grid-column:4/6}
    .C2{grid-column:3/5}
    .C3{grid-column:5/7}
    .C4{grid-column:2/4}
    .C5{grid-column:4/6}
    .C6{grid-column:6/8}
    .C7{grid-column:1/3}
    .C8{grid-column:3/5}
    .C9{grid-column:5/7}
    .C10{grid-column:7/9}
    .C11{
        display:grid;
        place-items:center;
        grid-column:3/7;
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