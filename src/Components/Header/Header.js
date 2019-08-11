import React, { useState } from 'react';
import Header from '../../UI-Components/Header';
import Column from '../../UI-Components/Grid/Column';
import Text from '../../UI-Components/Text';
import Wrapper from '../../UI-Components/Wrapper';
import Button from '../../UI-Components/Button';
import Icon from '../../UI-Components/Icon';
import Background from '../../UI-Components/Background';
import ProfileMenufrom from '../Profile-Menu/Profile-Menu';




function Heder() {
  const [openProfileMenu, setProfileMenuState] = useState(false);

   const onToggelProfileMenu = () => {
     setProfileMenuState(!openProfileMenu); 
   }

  return (
    <div className="Heder">
      <Header>
          <Column borderRgh='1px solid #dedede' borderBtm='1px solid #dedede'  xs='6' sm='2' md='2'>
            <Wrapper align='flex-end' justifyContent='space-around' wrap='wrap' width='100' smHidden={Wrapper} changedContent='center'>
              <Icon 
                width='60'
                height='40'
                url='../../../images/csgo1.png'
                size='74px 60px'
               
              />
              <Text color='black' fontWeight='bold' fontSize='20'>CSGO.BET</Text>
            </Wrapper>
          </Column>
          <Column  padding='0' borderRgh='1px solid #dedede' borderBtm='1px solid #dedede'  xs='1' sm='1' md='1' hide={true}>
            <Wrapper justifyContent='space-around' wrap='wrap' width='100'>
            <Background
               bgColor='black'
               width='100%'
               height='100'
            >
                <Icon 
                  width='40'
                  height='40'
                  url='../../../images/9.png'
                  size='40px 40px'
                />
            </Background>
              </Wrapper>
          </Column>
          <Column borderRgh='1px solid #dedede' borderBtm='1px solid #dedede'  xs='6' sm='2' md='2'>
              <Wrapper justifyContent='center' wrap='wrap' width='100' smHidden={Wrapper} changedContent='center'>
                <Background
                  bgColor='#3bc5f7'
                  radius='50%'
                  padding='10px'
                  marginR='10'
                >
                  <Icon 
                      width='27'
                      height='26'
                      url='../../../images/icon.png'
                      size='25px 23px'
                    />
                </Background>
                
                  <Wrapper justifyContent='center' align='start' direction='column'  wrap='wrap'>
                    <Text color='#3bc5f7' fontWeight='bold' fontSize='16'>Бонусы</Text>
                    <Text color='#3bc5f7'  fontSize='10'>Ежедневные раздачи</Text>
                  </Wrapper>
              </Wrapper>
          </Column>
          <Column borderRgh='1px solid #dedede' borderBtm='1px solid #dedede'  xs='6' sm='2' md='2'>
              <Wrapper justifyContent='center' wrap='wrap' width='100' smHidden={Wrapper} changedContent='center'>
              <Background
                  bgColor='#0056c7'
                  radius='50%'
                  padding='10px'
                  marginR='10'
                >
                  <Icon 
                      width='27'
                      height='26'
                      url='../../../images/icon1.png'
                      size='25px 26px'
                    />
                </Background>
                  <Wrapper justifyContent='center' align='start' direction='column'  wrap='wrap'>
                    <Text color='#0056c7' fontWeight='bold' fontSize='16'>Интуиция</Text>
                    <Text color='#0056c7'  fontSize='10'>Угадывай события &nbsp;</Text>
                  </Wrapper>
              </Wrapper>
          </Column>
          <Column borderBtm='1px solid #dedede'  xs='10' sm='6' md='6' position='relative'>
            {openProfileMenu ? <ProfileMenufrom /> : null}
            <Wrapper justifyContent='flex-end' wrap='wrap' width='100' hidden={Button} smHidden={Wrapper} changedContent='center'>
              <Button color='white' bgColor='#6b7e9c' radius='20'>
              <Icon 
                      width='15'
                      height='15'
                      url='../../../images/2.png'
                      size='15px 15px'
                      marginR='10'
              />
                <Text color='white' fontWeight='bold' fontSize='12'>Мои ставки</Text>
              </Button>
              <Icon 
                      onClick={onToggelProfileMenu}
                      width='60'
                      height='60'
                      url='../../../images/Snapseed.jpg'
                      size='60px 60px'
                      marginR='10'
              />
              <Wrapper justifyContent='center' wrap='wrap' direction='column'>
                <Text color='black' fontWeight='bold' fontSize='16'>Harut Aydinyan</Text>
                <Text color='green'  fontSize='16'>8 608.50P</Text>
               </Wrapper>
            </Wrapper>
          </Column>
      </Header>
    </div>
  );

}

export default Heder;
