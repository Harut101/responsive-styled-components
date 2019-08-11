import React, {Component} from 'react'
import './SideMenu.css'
import Layer from '../Layer/Layer';
import Social from '../Social/Social'
import Icon from '../../UI-Components/Icon';
import Background from '../../UI-Components/Background'
import Wrapper from '../../UI-Components/Wrapper'

let Link = [
    {to: '#', label: 'Ставки'},
    {to: '#', label: 'Новости'},
    {to: '#', label: 'Рейтинг'},
    {to: '#', label: 'Скидки'},
    {to: '#', label: 'Техподдержка'},
    {to: '#', label: 'Как это работает ?'},
]

class SideMenu extends Component{
    render(){
        let cls = ''
        if(!this.props.isOpen){
             cls = 'close'
        }
        return(
            <>
                <nav className={`SideMenu ${cls}`}>
                    <h3>MENU</h3>
                    <ul>
                        {
                            Link.map((link, index) => {
                                return(
                                    <li key={index} onClick={this.props.onToggelMenu}>
                                        <a href={link.to}>
                                            {link.label}
                                        </a>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Wrapper 
                        marginT='20px' 
                        changedContent='center' 
                        justifyContent='space-between' 
                        mdShow='.nav-icon1' 
                        resetStyleComponent={'.Nvigation'} 
                        mdHidden={'ul'} 
                        wrap='wrap' 
                        width='100' >
                            <Background 
                                bgColor='#6b7e9c'
                                radius='50%'
                                marginL='10'
                                marginR='25'
                                padding='5px'
                            >
                                <Icon 
                                        width='26'
                                        height='28'
                                        url='../../images/Shape2628.png'
                                        size='25px 28px'
                                />
                            </Background>

                            <Social/>
                    
                     </Wrapper>
                </nav>
                {this.props.isOpen ? <Layer toggelMenu={this.props.onToggelMenu}/> : null}
            </>
        )
    }
}


export default SideMenu;