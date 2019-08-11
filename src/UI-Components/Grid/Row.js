import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content:${props=> props.justifyContent ? props.justifyContent : 'center'};
`;

Row.displayName = 'Row';

export default Row;