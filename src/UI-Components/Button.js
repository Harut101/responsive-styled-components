import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${props => (props.color ? props.color : '')};
  background: ${props => (props.bgColor ? props.bgColor : '')};
  font-size: 16px;
  margin: 10px;
  padding: 10px 20px;
  border: ${props => props.border ? props.border : 'none'};
  border-radius: ${props => props.radius ? props.radius : 'none'}px;
`;


Button.displayName = 'Button';

export default Button;