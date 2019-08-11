import styled from 'styled-components';

const Text = styled.span`
 color: ${props => props.color ? props.color : ''};
 font-weight: ${props=> props.fontWeight ? props.fontWeight : ''};
 font-size: ${props=> props.fontSize ? props.fontSize : ''}px;
 width: max-content;
 
`;

Text.displayName = 'Text';

export default Text;