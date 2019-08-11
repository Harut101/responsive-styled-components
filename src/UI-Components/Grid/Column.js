import styled from 'styled-components';

function getWidth(columnSize){
    if(!columnSize) return;

    let width = columnSize / 12 * 100;
    return `width: ${width}%;`;
}


const Column = styled.div`
    display:flex;
    padding:  ${props => props.padding ? props.padding : '10px 10px 10px 10px'};
    margin-top: 10px;
    position:  ${props => props.position ? props.position : ''};
    border-right: ${props => props.borderRgh ? props.borderRgh : ''};
    border-bottom: ${props => props.borderBtm ? props.borderBtm : ''};
    align-items: ${props=> props.align ? props.align : 'center'};
    justify-content:${props=> props.justifyContent ? props.justifyContent : ''};

    ${({xs})=>(xs ? getWidth(xs) : 'width: 100%')};

    @media only screen and (max-width: 510px) {
        ${props => props.hide ? `display: none` : ''}; 
    };

    @media only screen and (min-width: 768px) {
        ${({sm})=> sm && getWidth(sm)};
    };

    @media only screen and (min-width: 992px) {
        ${({md})=> md && getWidth(md)};
    };

    @media only screen and (min-width: 1200px) {
        ${({lg})=> lg && getWidth(lg)};
    }

    @media only screen and (max-width: 1092px) {
     ${props => props.ColumnWidth ? `width : ${props.ColumnWidth} ` : '0'};
    };
`;

Column.displayName = 'Column';

export default Column;