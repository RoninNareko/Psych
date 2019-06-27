import React from 'react';
// import ReactDOM from 'react-dom';
//wow
import WOW from 'wowjs';
//styles
//carusele
//
import '../Styles(4)/ContractsStyle(4).css';
import Truba from '../img(4)/contact-box.png';
import DoorImage from '../img(4)/outdoor.png';
import logo from '../img(4)/psychx-86-logo.svg'; 
import psych_banner from '../img(4)/contbanner.png';
import Services from '../img(4)/Services.png';
import TelePhone from '../img(4)/group-9.png';
import BookHndik from '../img(4)/bokkblack.png';
import hndikbook2 from '../img(4)/freestocks-org-570357-unsplash.jpg';
import Narek from '../img(4)/narek.jpg';
import OpticH from '../img(4)/hire3.png';


// import CloudSimg from '../img(4)/cloud_service_mgmt.png';
// import userexperensimg from '../img(4)/app_dev.png';
// import Development_image from '../img(2)/group-18.png';
// import WebDevelopler from '../img(2)/enterprise_web_dev.png';
// import hndik1 from '../img(2)/hire1.png';
// import hndik2 from '../img(2)/hire2.png';


function AnimateColors(){
    return(
      <section className='vols'>
      <div className='animated_blue'></div>
      <div className='animated_blue vol_2'></div>
      <div className='animated_blue vol_3'></div>
      <div className='animated_blue vol_4'></div>
      </section>
    )
  }
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
            <li><a href='/contract' className='ColorLinks'>Contracts</a></li>
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
  };
  function Block3(){
    return(
      <section className='Homepage_2_block '>
                
              <div className='info_container'>
                <div className='info'>
                  <h1>DEVELOPING<br/>ACROSS INDUSTRIES</h1>
                    <p>
                      At Psych, we endeavor to provide digital solutions<br/>
                      engineered to drive your growth and excellence.
                    </p>
                    <div className='Services_button_Container'>
                    <div className="round">
                      <img src={Services} alt='error'/>
                      <a className='servicesl' href='#readmore'>Services</a>
                    </div>
                    <span className='top_line1 LINOS1'></span>

                    </div>
  
                  </div>
  
                </div>
                <div className='banner1 banner2'>  
                      <img src={psych_banner} alt='banner'/>
                      
                      </div>
  
            
                </section>
    )
  };

function Block4(){
  return(
    <section className='page_erku_container1'>
      <div className='context'>
        <div className='scrollcontainer'>
          <h3>Scroll</h3>
          <div className='x_ScrollLine'>
            </div>
        </div>
        <div className='items_top'>
        <div className='text_contents wow fadeInUp'>
      <h4 class="heading lg-small">LET’S GET STARTED</h4>
      <div class="rowjan1"><div class="col-lg-8">
        <h5 class="sub-heading-2 mt-lg-2 mb-lg-3">Let us know what you are looking for, we will<br/> get back to you.</h5>
        <p class="sub-heading-1">Discovering what fits you the best, In case you require an<br/> NDA, we can provide one after an initial conversation.</p>
        </div>
          <div className='Formus'>
          <form action="/action_page.php" method="get">
            <input type="text" placeholder='Name' className='Big_Lines' name="fname"/><br/>
            <input type="text" placeholder="Email" name="lname" className='Mini_Lines'/> <input type="text" placeholder="Contracts" name="fname" className='Mini_Lines'/><br/>
            <input type="text" placeholder='Company' className='Big_Lines'  name="lname"/><br/>
            <h5 class="sub-heading-2 mt-4 mb-3">Psych'd about something?</h5>
            <div class="row">
              <div class="col-6">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" id="front-end" class="custom-control-input"/>
                    <label class="custom-control-label" for="front-end">Front end</label></div></div><div class="col-6"><div class="custom-control custom-checkbox"><input type="checkbox" id="mobile-app" class="custom-control-input"/><label class="custom-control-label" for="mobile-app">Mobile App</label></div></div><div class="col-6"><div class="custom-control custom-checkbox"><input type="checkbox" id="backend" class="custom-control-input"/><label class="custom-control-label" for="backend">Backend</label></div></div><div class="col-6"><div class="custom-control custom-checkbox"><input type="checkbox" id="design" class="custom-control-input"/><label class="custom-control-label" for="design">Design</label></div></div><div class="col-6"><div class="custom-control custom-checkbox"><input type="checkbox" id="web-app" class="custom-control-input"/><label class="custom-control-label" for="web-app">Web App</label></div></div></div>
                    <h5 class="sub-heading-2  mt-2">Want to inform something more?</h5>
            <input type="text" placeholder='About Projects'  className='Big_Lines'  name="lname"/><br/>
            <button type="submit" value="submit" id='button_contract_form' class="btn-style-1 sender "><span class="top-left"></span><span class="top-right"></span><span class="bottom-left"></span><span class="bottom-right"></span>Send</button>
          </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}
function Block5(){
  return(
    <section className='page_erku_container2'>
      <div className='context2'>
        <div className='items_top2'>
          <div className='her_content'>
          <h4 class="heading lg-small2">+91 9833427416</h4>
          <p class="font-playfair">Say us Namaste</p>
            </div>
            <div className="Phone_Block">
              <img src={TelePhone} alt='error'/>
            </div>
            <div className='her_content2'>
          <h4 class="heading lg-small2">hello@psychx86.com</h4>
          <p class="font-playfair">Say us Namaste</p>
            </div>
    
        </div>
      </div>
    </section>
  )
}
function Block6(){
  return(
    <section className='page_erku_container_block_name_5'>
    <div className='context_block_name_5'>
      <div className='items_top_block_name_5'>
        <div className='context_one_image wow fadeInUp'>
        <img src={BookHndik} alt='banner'/>
          </div>
          <div className='image_context wow fadeInDown'>
            <h4>WE ARE ALWAYS LISTENING</h4>
            <p class="d-none d-lg-block text-grey">We craft tailor-made<br/>
             solutions, for a range of<br/>
            different industries, each<br/>
            with a unique set of<br/>
            challenges.</p>
          </div>
          <div className='context_title2 wow fadeInUp'>
          <h4>WE ARE ALWAYS LISTENING</h4>
          <p class="d-none d-lg-block text-grey">We craft tailor-made<br/>
             solutions, for a range of<br/>
            different industries, each<br/>
            with a unique set of<br/>
            challenges.</p>
          </div>
          <div className='image_context nkar2 wow fadeInDown' >
            <img src={hndikbook2} alt='error'/>
          </div>
      </div>
    </div>
  </section>
  )
}
function Block7(){
  return(
    <section className='page_erku_container_block_7'>
    <div className='context_block_7'>
      <div className='items_top_block_7'>
      <div className='Developing_Table_Block wow fadeInUp'>
        <ul>
          <li className='developer_table_li'>
            <h4 class="heading lg-small developertext">
              <span class="number">01</span>
              <a href="https://angel.co/psych-x86-technologies-1/jobs/518508-php-developer" target="noopener">PHP DEVELOPER</a>
              </h4>
              <p>Navi Mumbai, India</p>
          </li>
          <li className='developer_table_li'>
            <h4 class="heading lg-small developertext">
              <span class="number">01</span>
              <a href="https://angel.co/psych-x86-technologies-1/jobs/518508-php-developer" target="noopener">PHP DEVELOPER</a>
              </h4>
              <p>Navi Mumbai, India</p>
          </li>
          <li className='developer_table_li'>
            <h4 class="heading lg-small developertext">
              <span class="number">01</span>
              <a href="https://angel.co/psych-x86-technologies-1/jobs/518508-php-developer" target="noopener">PHP DEVELOPER</a>
              </h4>
              <p>Navi Mumbai, India</p>
          </li>
          <li className='developer_table_li'>
            <h4 class="heading lg-small developertext">
              <span class="number">01</span>
              <a href="https://angel.co/psych-x86-technologies-1/jobs/518508-php-developer" target="noopener">PHP DEVELOPER</a>
              </h4>
              <p>Navi Mumbai, India</p>
          </li>
          <li className='developer_table_li'>
            <h4 class="heading lg-small developertext">
              <span class="number">01</span>
              <a href="https://angel.co/psych-x86-technologies-1/jobs/518508-php-developer" target="noopener">PHP DEVELOPER</a>
              </h4>
              <p>Navi Mumbai, India</p>
          </li>
        </ul>
      </div>
        <div className='Dorr_Content_Block wow fadeInDown' >
        <h4 class="sub-heading-4 font-playfair text_wrapper">Be the part of a <br/> exciting future. </h4>
        <img src={DoorImage} alt='sad'/>
        <h4 class="sub-heading-4 font-playfair text_wrapper">Be the part of a <br/> exciting future. </h4>
          </div>
      </div>
    </div>
  </section>
  )
}
function Block8(){
  return(

    <section className='page_erku_container_block_8'>
    <div className='context_block_8 wow fadeInUp'>
    <hgroup><h4 class="heading">JOIN OUR BEST MINDS</h4><p class="sub-heading-4 font-playfair">Make things that touch millions</p></hgroup>
    </div>
  </section>
  )
}
function Block9(){
  return(
    <section className='page_erku_container_block_9'>
    <div className='context_block_9'>
      <div className='items_top_block_9'>
      <div className='Big_Hndik_image_Context'>
      <img src={Narek} alt='banner'/>
        </div>
        <div className='offerspisok'>
        <hgroup>
          <h4 class="heading lg-small">THINGS WE OFFER</h4>
          <h5 class="sub-heading-2">Create products engineered to deliver growth</h5>
        </hgroup>
          <ul className='things_ul'>
            <li>
              <span class="number">01</span>
              <span class="font-playfair">Optimism</span>
            </li>
            <li>
              <span class="number">01</span>
              <span class="font-playfair">Optimism</span>
            </li>
            <li>
              <span class="number">01</span>
              <span class="font-playfair">Optimism</span>
            </li>
            <li>
              <span class="number">01</span>
              <span class="font-playfair">Optimism</span>
            </li>
            <li>
              <span class="number">01</span>
              <span class="font-playfair">Optimism</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
function Block10(){
  return(
    <section className='page_erku_container_block_10'>
      <div className='context_block_10'>
        <div className='items_top_block_10'>
        <div class="contentla wow fadeInUp">
          <h4 class="heading lg-small">GIVE US A VISIT</h4>
          <div class="row">
            <div class="col-lg-8">
              <h5 class="sub-heading-2 mt-lg-2 mb-lg-3">We would love to here the knock knock on our door.</h5>
              <address class="sub-heading-1">We Work, 10th Floor, Tower 1,<br/>Seawoods Grand Central,<br/>Navi Mumbai, Maharashtra 400706
              </address>
              </div>
              </div>
              </div>
              <div className='t_image'>
                <img src={Truba} alt='error'/>
              </div>
        </div>
      </div>
    </section>
  )
}
function Block11(){
  return(
    <section className='page_erku_container_block_11'>
    <div className='context_block_11 wow fadeInLeft'>
    <div className='Optycal_Hndik_Inage'>
      <img src={OpticH} alt='error'/>
      </div>
      <div className='op_hndik_context'>
      <p>Ensuring quality and<br/> perfection to make the<br/>
       collaboration fruitful<br/>
        and memorable.</p>
        </div>
    </div>
  </section>
  )
}
class FooterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name:'Name',
                  email:'Email',
                  contract:'Contract',
                  company:'Company',
                  project:'About Project'};
  
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContract = this.onChangeContract.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);  
  }
  
  onChangeName(event){
      this.setState({name: event.target.value});
    }
  onChangeEmail(event){
    this.setState({email: event.target.value});
  }  
  onChangeContract(event){
    this.setState({contract: event.target.vale});
  }
  onChangeCompany(event){
    this.setState({company: event.target.vale});
  }
  onChangeProject(event){
   this.setState({project: event.target.value});
  }
    render(){
    return (
      <footer className='footer positioning'>
          <div className='endurecontainer'>
            <ul className='ful'>
                    <li><a href='/Work'>Work</a></li>
                    <li><a href='/Services'>Services</a></li>
                    <li><a href='/Contracts'>Contracts</a></li>
                  </ul>

                  <h4 class="heading text-center noneleft">PROJECT ENQUIRY</h4>
                  <p class="font-playfair text-center mb-3 sub-heading-4">Let’s create something exciting together!</p>
              </div>
              <form action="/action_page.php" onSubmit={this.handleSubmit}>
              <br/>
              <input placeholder='asdsad' type="text" name="firstname" value={this.state.name} onChange={this.onChangeName}/>
              <br/>
             <br/>
              <input type="text" name="lastname" value={this.state.email} onChange={this.onChangeEmail} className='minform'/>
              <input className='minform' type="text" name="lastname" value={this.state.contract} onChange={this.onChangeContract}/>
              <br/><br/>
              <input type="text" name="lastname" value={this.state.company} onChange={this.onChangeCompany}/>
              <br/>
              <input type="text" name="lastname" value={this.state.project} onChange={this.onChangeProject}/>
              <br/>
              <button type="submit" value="submit" class="btn-style-1 sender "><span class="top-left"></span><span class="top-right"></span><span class="bottom-left"></span><span class="bottom-right"></span>Send</button>
            </form> 
            <ul className='menus'>
              <li><i class="fas fa-phone"></i>+919833427416</li>
              <li><i class="fas fa-envelope-open"></i>hello@psychx86.com</li>
              <li><i class="fas fa-map-marker-alt"></i>We Work, 10th Floor, Tower 1,<br/>
              Seawoods Grand Central,<br/>
              Navi Mumbai, Maharashtra 400706</li>

            </ul>
            <ul className='menus2'>
              <li>instagram<i class="fab fa-instagram"></i></li>
              <li>Facebook<i class="fab fa-facebook-square"></i></li>
              <li>Twitter<i class="fab fa-twitter"></i></li>
              <li>Linkedin<i class="fab fa-linkedin-in"></i></li>
              <li>Github<i class="fab fa-github"></i></li>
            </ul>
            </footer>
    );
  }
}
class ContractsPage extends React.Component{
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    require('../javascript(4)/ContractsScripts.js');
}
    render(){
        return(
            <main>
           <Header/>
           <AnimateColors/>
           <Block3/>
           <Block4/>
           <Block5/>
           <Block6/>
           <Block7/>
           <Block8/>
           <Block9/>
           <Block10/>
           <Block11/>
           <FooterForm/>
           </main>
        );
    }
};
export default ContractsPage;