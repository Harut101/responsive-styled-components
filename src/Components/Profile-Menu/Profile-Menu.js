import React from 'react'
import Text from '../../UI-Components/Text';
import Wrapper from '../../UI-Components/Wrapper';
import Icon from '../../UI-Components/Icon';
import '../Profile-Menu/Profile-Menu.css'

let menu = [
    {
        icon: "../../../images/8.png",
        text: "Мои ставки"
    },
    {
        icon: "../../../images/3.png",
        text: "Пополнить баланс"
    },
    {
        icon: "../../../images/Shape1918.png",
        text: "Вывести средства"
    },
    {
        icon: "../../../images/4.png",
        text: "История операций"
    },
    {
        icon: "../../../images/5.png",
        text: "Ввести промо-код"
    },
    {
        icon: "../../../images/6.png",
        text: "Настройки аккаунта"
    },
];


const ProfileMenu = (props) => (
    <div className='ProfileMenu'>
        <Wrapper justifyContent='center' wrap='wrap' direction='column' marginT='10px' borderBtm='1px solid #dedede' hide={true} show={true}>
                <Text color='black' fontWeight='bold' fontSize='16'>Harut Aydinyan</Text>
                <Text color='green'  fontSize='16'>8 608.50P</Text>
        </Wrapper>
        { menu.map((item, index) => {
            return (
                <Wrapper 
                    borderBtm='1px solid #dedede'
                    justifyContent='flex-start' 
                    paddingT='10px' 
                    paddingR='50px' 
                    paddingL='20px' 
                    paddingB='10px'
                    key={index}
                    >
                        <Icon 
                            width='20'
                            height='20'
                            url={item.icon}
                            size='20px 20px'
                            marginR='10'
                        />
                        <Text color='black' fontWeight='bold' fontSize='12'>{item.text}</Text>
                </Wrapper>
            )
        })
        }
        <Wrapper
              justifyContent='flex-start' 
              paddingT='10px' 
              paddingR='50px' 
              paddingL='20px' 
              paddingB='10px'
              bgColor='black'
             >
                <Icon 
                        width='20'
                        height='20'
                        url='../../../images/7.png'
                        size='20px 17px'
                        marginR='10'
                    />
                    <Text color='white' fontWeight='bold' fontSize='12'>Выйти из аккаунта</Text>
        </Wrapper>
    </div>
)


export default ProfileMenu;