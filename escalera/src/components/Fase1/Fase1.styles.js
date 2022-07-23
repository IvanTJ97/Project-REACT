import styled from 'styled-components';

export const Test = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    gap:10px;
`;
export const TestL = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    gap:10px;
    border-right:2px dashed #000;
`;
export const Container=styled.div`
    text-align:center;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    h2,button{grid-column:1/3}
    button{
        padding:20px;
    }
`