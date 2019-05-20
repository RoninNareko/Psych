import React from 'react';

import '../Styles(1)/App.css';
import logo from '../img(1)/psychx-86-logo.svg'; 
import psych_banner from '../img(1)/psych_banner.png'; 
import Services from '../img(1)/Services.png';
import messengerIcon from '../img(1)/messengerIcon.png';
import servers_services from '../img(1)/psych-homepage-server-services-illustration.svg';
import Development_image from '../img(1)/psych-homepage-server-enterprise-illustration.svg';

function App() {
  return (
          <div className='block-2'>
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
                    <li><a href='/Work'>Work</a></li>
                    <li><a href='/Services'>Services</a></li>
                    <li><a href='/Contracts'>Contracts</a></li>
                  </ul>
                  <div className='burger_menu'>
                  <div class="nav-icon">
                  <div></div>
                  </div>
                </div>
              </nav>
          </header>
        
            <section className='Homepage_2_block'>
            <div className='info_container'>
              <div className='info'>
                <h1>WE TURN<br/>1DAES INTRO PRODUCTS.</h1>
                  <p>
                    At Psych, we endeavor to provide digital solutions<br/>
                    engineered to drive your growth and excellence.
                  </p>
                  <div className='Services_button_Container'>
                  <div className="round">
                    <img src={Services} alt='error'/>
                  </div>
                  </div>
                </div>
              </div>
              <div className='banner1'>  
                    <img src={psych_banner} alt='banner'/>
                    <div className='MessageCont'>
                      <img src={messengerIcon} alt='message'/>
                    </div>
                    </div>

                    <div className='headerblock_3'>
                      <div className='texter_Container'>
                          <h1>What defines us</h1>
                      </div>   
                      <div className='big_info_container'>
                        <div className='hinfo_image'>
                            <img src={servers_services} alt='server-services'/>
                            <p><h3>CLOUD SERVICE MANEGMENT</h3></p>
                            <p>We analyze cross-functional scenarios<br/>
                               to maneuver Space Optimization,<br/>
                                Performance, CPU, Memory and I / O<br/>
                                 Util to provide the ultimate solution to<br/>
                                  our clients given the upcoming<br/>
                                   technological advancements./
                              </p>
                            <a href='#readmore'>Know more</a>
                          </div>
                          <div className='texter_Container'>
                   
                      </div>   

                      <div className='big_info_container_2'>
                        <div className='hinfo_image'>
                            <img src={Development_image} alt='server-services'/>
                            <p><h3>CLOUD SERVICE MANEGMENT</h3></p>
                            <p>We analyze cross-functional scenarios<br/>
                               to maneuver Space Optimization,<br/>
                                Performance, CPU, Memory and I / O<br/>
                                 Util to provide the ultimate solution to<br/>
                                  our clients given the upcoming<br/>
                                   technological advancements./</p>
                                <a href='#readmore'>Know more</a>
                            </div>
                          </div>  

                      </div>
                      
                </div>
              </section>
          </div>

  );
}

export default App;
