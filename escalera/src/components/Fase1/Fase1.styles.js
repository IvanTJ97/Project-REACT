import styled from 'styled-components';

export const Test = styled.div`
    display: flex;
    flex-direction:row;
    gap:10px;
    div{
        border:1px solid #000;
    }
`;
export const Container=styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
`