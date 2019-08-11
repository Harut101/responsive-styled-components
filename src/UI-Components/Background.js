import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  align-items: center;
  width: ${props=> props.width ? props.width : ''};
  height: ${props=> props.height ? props.height : ''}px;
  background: ${props => (props.bgColor ? props.bgColor : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  justify-content:${props=> props.justifyContent ? props.justifyContent : 'center'};
  border: ${props => props.border ? props.border : 'none'};
  border-radius: ${props => props.radius ? props.radius : 'none'};

    margin-top: ${props => (props.marginT ? props.marginT : '')}px;
    margin-right: ${props => (props.marginR ? props.marginR : '')}px;
    margin-left: ${props => (props.marginL ? props.marginL : '')}px;
    margin-bottom: ${props => (props.marginB ? props.marginB : '')}px;
  
`;


Background.displayName = 'Background';

export default Background;