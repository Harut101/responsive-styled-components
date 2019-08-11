import styled from 'styled-components';
import Icon from './Icon';
import Text from './Text';

const Wrapper = styled.div`
    width: ${props=> props.width ? props.width : ''}%;
    display: flex;
    align-items: ${props=> props.align ? props.align : 'center'};
    flex-wrap: ${props=> props.wrap ? props.wrap : ''};
    justify-content:${props=> props.justifyContent ? props.justifyContent : 'center'};
    flex-direction: ${props=> props.direction ? props.direction : 'row'};
    border-bottom: ${props => props.borderBtm ? props.borderBtm : ''};
    border-top: ${props => props.borderT ? props.borderT : ''};
    background: ${props => (props.bgColor ? props.bgColor : '')};


    padding-top: ${props => (props.paddingT ? props.paddingT : '')};
    padding-right:  ${props => (props.paddingR ? props.paddingR : '')}; 
    padding-left:  ${props => (props.paddingL ? props.paddingL : '')};
    padding-bottom:  ${props => (props.paddingB ? props.paddingB : '')};

    margin-top: ${props => (props.marginT ? props.marginT : '')};
    margin-right: ${props => (props.marginR ? props.marginR : '')};
    margin-left: ${props => (props.marginL ? props.marginL : '')};
    margin-bottom: ${props => (props.marginB ? props.marginB : '')};

    .nav-icon1{
        display: none;
    }

    @media only screen and (min-width: 520px) {
        ${props => props.hide ? `display: none` : ''}; 
    };


    @media only screen and (max-width: 553px) {
        ${props => props.show ? `display: flex` : ''}; 
        justify-content:  ${props => (props.changedContent ? props.changedContent : '')};
        ${props=> props.smHidden ? 
            `${props.smHidden}{
                display: none;
            } 
            ${Icon}{
                margin: 0;
            }
            ${Text}{
                font-size: 16px;
            }
            ` 
        
        : ''};  
    };

    @media only screen and (max-width: 698px) {
        justify-content:  ${props => (props.changedContent ? props.changedContent : '')};
        ${props => props.show ? `display: flex` : ''}; 
        ${props=> props.smHidden ? 
            `${props.smHidden}{
                display: none;
            }
            ` 
        
        : ''};

        ${props=> props.smHiddenSecond ? 
            `${props.smHiddenSecond}{
                display: none;
            }
            ` 
        
        : ''};
        
    };

    @media only screen and (max-width: 873px) {
        ${props=> props.hidden ? `${props.hidden}{
            display: none;
        }` : ''};  
    };

    @media only screen and (max-width: 1092px) {
        ${props=> props.mdHidden ? `${props.mdHidden}{
            display: none;
        }` : ''}; 

        ${props=> props.resetStyleComponent ? `${props.resetStyleComponent}{
           flex-grow: 0;
        }` : ''}; 
        
        ${props=> props.mdShow ? `${props.mdShow}{
            display: block;
        }` : ''};
    };

`;

Wrapper.displayName = 'Wrapper';

export default Wrapper;