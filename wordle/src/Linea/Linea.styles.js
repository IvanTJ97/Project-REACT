import styled from 'styled-components';

export const Tablero = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 17%);
    grid-template-rows: 80px;
    margin-bottom:10px;
    div{
        border:1px solid #000;
        display:grid;
        place-items:center;
    }
`;
