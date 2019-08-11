import styled from 'styled-components';

const Icon = styled.div`
    width: ${props=> props.width ? props.width : ''}px;
    height: ${props=> props.height ? props.height : ''}px;
    background-image: url(${props=> props.url ? props.url : ''});
    background-color: ${props=> props.bgColor ? props.bgColor : ''};
    background-size: ${props=> props.size ? props.size : ''};
    background-repeat: ${props => props.repeat ? props.repeat : 'no-repeat'};
    margin-right: ${props => props.marginR ? props.marginR : ''}px;
    margin-left: ${props => props.marginL ? props.marginL : ''}px;
`;

Icon.displayName = 'Icon';

export default Icon;