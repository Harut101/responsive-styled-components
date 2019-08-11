import React from 'react';
import '../Navigation/Navigation.css';
import Text from '../../UI-Components/Text';
import Wrapper from '../../UI-Components/Wrapper';

let Link = [
    {to: '#', label: 'Ставки'},
    {to: '#', label: 'Новости'},
    {to: '#', label: 'Рейтинг'},
    {to: '#', label: 'Скидки'},
    {to: '#', label: 'Техподдержка'},
    {to: '#', label: 'Как это работает ?'},
]


function Nvigation(props) {
    
    return (

      <div className="Nvigation">
        <nav>
                <ul>
                   
                    <Wrapper justifyContent='start' align='center' direction='row'  wrap='wrap' mdHidden={'li'}>
                        {
                            Link.map((link, index) => {
                                return(
                                    <li key={index} >
                                        <a href={link.to}>
                                            <Text color='black' fontWeight='500' fontSize='14' >
                                                {link.label}
                                            </Text>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </Wrapper>
                </ul>
        </nav>
      </div>

    )
  
}

export default Nvigation;
