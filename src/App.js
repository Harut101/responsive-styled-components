import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import Navigation from './Components/Navigation/Navigation';
import Social from './Components/Social/Social';
import Wrapper from './UI-Components/Wrapper';
import Icon from './UI-Components/Icon';
import Background from './UI-Components/Background';
import Toggel from './/Components/Toggel/Toggel';


function App() {
   const [openMenu, setMenuState] = useState(false);

   const onToggelMenu = () => {
         setMenuState(!openMenu); 
   }
    
    return (

      <div className="App">
        <Header/>
        <Wrapper 
            marginT='20px' 
            changedContent='center' 
            justifyContent='space-between' 
            mdShow='.nav-icon1' 
            resetStyleComponent={'.Nvigation'} 
            mdHidden={'ul'} 
            smHidden={Wrapper} 
            smHiddenSecond={Background}
            wrap='wrap' 
            width='100' >
              <Background 
                bgColor='#6b7e9c'
                radius='50%'
                marginL='50'
                padding='5px'
              >
                  <Icon 
                          width='26'
                          height='28'
                          url='../../images/Shape2628.png'
                          size='25px 28px'
                  />
              </Background>
              <Navigation/>
              <Toggel isOpen={openMenu}  onToggelMenu={onToggelMenu}/>

              <Social/>
          
            </Wrapper>
        
        <SideMenu isOpen={openMenu}  onToggelMenu={onToggelMenu}/>
      </div>

    )
  
}

export default App;
