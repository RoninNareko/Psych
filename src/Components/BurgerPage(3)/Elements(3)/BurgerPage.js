import React from 'react';
//wow
import WOW from 'wowjs';
//styles
import '../Styles(3)/BurgerPage.css';
import logo from '../img(3)/psychx-86-logo.svg'; 

function Header() {
  return(
    <header>
    <nav className='hnav_1'>
          <div className="H_Logo_Container">
          <div className='Hlogo'>
            <img src={logo} alt='logo'/>
          </div>
          </div>
    </nav>
    <nav className='hnav_2'>
        <ul className='Menu'>
          <li><a href='/Work' className='ColorLinks'>Work</a></li>
          <li><a href='/services' className='ColorLinks'>Services</a></li>
          <li><a href='/Contracts' className='ColorLinks'>Contracts</a></li>
        </ul>
        <div className='burger_menu'>
        <div className="nav-icon">
        <div className='burg1'></div>
        <div className='burg1 burg-2'></div>
        <div className='burg1 burg-3'></div>
        </div>
      </div>
    </nav>
</header>

  )
}
function Menus(){

    return(
      <ul className='menusserv'>
        <li><span className='Opisanie Opisanie0'>Our work speaks for our<br/> value</span><div className='hoverline line0'></div><a className='MenuTitles linket0' href='#read'>WORK</a></li>
        <li><span className='Opisanie Opisanie1' >Our work speaks for our<br/> value</span><div className='hoverline line1'></div><a className='MenuTitles linket1' href='#read'>SERVICES</a></li>
        <li><span className='Opisanie Opisanie2'>Our work speaks for our<br/> value</span><div className='hoverline line2'></div><a className='MenuTitles linket2' href='#read'>CONTRACT</a></li>
        <li><span className='Opisanie Opisanie3'>Our work speaks for our<br/> value</span><div className='hoverline line3'></div><a className='MenuTitles linket3' href='#read'>ABOUT</a></li>
      </ul>
      
    )
} 
function AnimateColors(){
  return(
    <div className='vols'>
    <div className='animated_blue'></div>
    <div className='animated_blue vol_2'></div>
    <div className='animated_blue vol_3'></div>
    <div className='animated_blue vol_4'></div>
    </div>
  )
}
function Socale(){
 return(
      <ul className='social'>
        <li>
          <a href='#read'> <i class="fab fa-facebook-square"></i></a>
        </li>
        <li>
          <a href='#read'> <i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href='#read'> <i class="fab fa-linkedin-in"></i></a>
        </li>
        <li>
          <a href='#read'> <i class="fab fa-github"></i></a>
        </li>
        <li>
          <a href='#read' id='soclick'> <i class="fab fa-twitter"></i></a>
        </li>
        </ul>
 )
}
class App extends React.Component{
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    require('../javascript(3)/BurgerPageJs');
  }
  render(){
   return (
          <main>
           <Header/>
           <AnimateColors/>
           <Menus/>
           <Socale/>

          </main>
    );
  }
}

export default App;
