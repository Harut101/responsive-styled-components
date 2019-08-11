import React from 'react';
import Wrapper from '../../UI-Components/Wrapper';
import Icon from '../../UI-Components/Icon';

let Link = [
    {
        icon: "../../../images/normal.png",
        text: "Мои ставки"
    },
    {
        icon: "../../../images/1.png",
        text: "Пополнить баланс"
    },
    {
        icon: "../../../images/normal2.png",
        text: "Вывести средства"
    },
]


function Social() {
    
    return (    
        <Wrapper justifyContent='end' align='center' direction='row'>
            {
                Link.map((item, index) => {
                    return(
                        <Icon 
                            width='25'
                            height='25'
                            url={item.icon}
                            size='25px 20px'
                            marginR='30'
                            key={index}
                        />
                    )
                })
            }
        </Wrapper>

    )
  
}

export default Social;
