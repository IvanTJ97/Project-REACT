import styled from 'styled-components';
export const Test = styled.div`
    li{
        padding:10px;
        background-color:${({state})=>state?"#f00":"#0f0"};
    }
`;
