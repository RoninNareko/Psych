import React from 'react';
//
//wow
import WOW from 'wowjs';
//css
import '../Styles(2)/Services.css';
//
import logo from '../img(2)/psychx-86-logo.svg'; 
import psych_banner from '../img(2)/HeadBanner.png'; 
import Services from '../img(2)/Services.png';
import messengerIcon from '../img(2)/messengerIcon.png';
import CloudSimg from '../img(2)/cloud_service_mgmt.png';
import userexperensimg from '../img(2)/app_dev.png';
import Development_image from '../img(2)/group-18.png';
import WebDevelopler from '../img(2)/enterprise_web_dev.png';
import hndik1 from '../img(2)/hire1.png';
import hndik2 from '../img(2)/hire2.png';


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
                      <div className='MessageCont'>
                        <img src={messengerIcon} alt='message'/>
                      </div>
                      </div>
  
            
                </section>
    )
  };

function Block4(){
    return(
        <section className='Container4 '>
            
            <div className='Content wow fadeInUp'>
            <div className='topcontents'>
            <div class="heading_section"><h4 class="heading heading_text lg-small">ENTERPRISE WEB
            DEVELOPMENT</h4><div class="hiddden_line"></div></div>
            <p class="sub-heading-1jan content_text">Our time-tested methodologies in API<br/> 
            integrations aid us in evaluating<br/>
             alternatives in methods of product<br/>
              creation. To optimize user satisfaction,<br/>
               we assimilate a robust front-end<br/>
                architecture with seamless<br/>
                communication with the back-end.</p>
            </div>
            <div className='topimg'>
                <img src={WebDevelopler} alt='error'/>
            </div>
            <ul class="nav nav-pills mb-3 section_one_pills" id="s-1-tab" role="tablist"><li class="nav-item "><a class="nav-link optimization_text" href="#s-1-tab-one">React JS</a></li><li class="nav-item "><a class="nav-link performance_text" href="#s-1-tab-two">Angular JS</a></li><li class="nav-item"><a class="nav-link util_text" href="#s-1-tab-three">VUE JS</a></li></ul>
            </div>
        </section>
    )
}

function Block5(){
    return(
        <section className='Container4 conts2'>
            <div className='Content wow fadeInUp'>
            <div className='topcontents'>
            <div class="heading_section"><h4 class="heading heading_text lg-small">ENTERPRISE WEB
            DEVELOPMENT</h4><div class="hiddden_line"></div></div>
            <p class="sub-heading-1jan content_text">Our time-tested methodologies in API<br/> 
            integrations aid us in evaluating<br/>
             alternatives in methods of product<br/>
              creation. To optimize user satisfaction,<br/>
               we assimilate a robust front-end<br/>
                architecture with seamless<br/>
                communication with the back-end.</p>
            </div>
            <div className='topimg'>
                <img src={WebDevelopler} alt='error'/>
            </div>
            <ul class="nav nav-pills mb-3 section_one_pills" id="s-1-tab" role="tablist"><li class="nav-item "><a class="nav-link optimization_text" href="#s-1-tab-one">React JS</a></li><li class="nav-item "><a class="nav-link performance_text" href="#s-1-tab-two">Angular JS</a></li><li class="nav-item"><a class="nav-link util_text" href="#s-1-tab-three">VUE JS</a></li></ul>
            </div>
        </section>
    )
}

function Block6(){
    return(
        <section className='Container4 conts3'>
            <div className='Content content2'>
            <div className='topcontents nark2'>
            <p class="quote quote-left  wow fadeInUp">We research,<br/>
             design and<br/>
            validate your<br/> 
            product<br/>
            extensively.</p>
            <p class="quote quote-right wow fadeInUp">We research,<br/>
             design and<br/>
            validate your<br/> 
            product<br/>
            extensively.</p>
            <div className='topimg'>
                <img src={Development_image} alt='error'/>
            </div>
            </div>
            </div>
        </section>
    )
}

function Block7(){
    return(
        <section className='Container4 block7'>
            <div className='Content  wow fadeInUp'>
            <div className='topcontents'>
            <div class="heading_section"><h4 class="heading heading_text lg-small">ENTERPRISE WEB
            DEVELOPMENT</h4><div class="hiddden_line"></div></div>
            <p class="sub-heading-1jan content_text">Our time-tested methodologies in API<br/> 
            integrations aid us in evaluating<br/>
             alternatives in methods of product<br/>
              creation. To optimize user satisfaction,<br/>
               we assimilate a robust front-end<br/>
                architecture with seamless<br/>
                communication with the back-end.</p>
            </div>
            <div className='topimg'>
                <img src={CloudSimg} alt='error'/>
            </div>
            <ul class="nav nav-pills mb-3 section_one_pills" id="s-1-tab" role="tablist"><li class="nav-item "><a class="nav-link optimization_text" href="#s-1-tab-one">React JS</a></li><li class="nav-item "><a class="nav-link performance_text" href="#s-1-tab-two">Angular JS</a></li><li class="nav-item"><a class="nav-link util_text" href="#s-1-tab-three">VUE JS</a></li></ul>
            </div>
        </section>
    )
}

function Block8(){
    return(
        <section className='Container4 conts2'>
            <div className='Content wow fadeInUp'>
            <div className='topcontents'>
            <div class="heading_section"><h4 class="heading heading_text lg-small">ENTERPRISE WEB
            DEVELOPMENT</h4><div class="hiddden_line"></div></div>
            <p class="sub-heading-1jan content_text">Our time-tested methodologies in API<br/> 
            integrations aid us in evaluating<br/>
             alternatives in methods of product<br/>
              creation. To optimize user satisfaction,<br/>
               we assimilate a robust front-end<br/>
                architecture with seamless<br/>
                communication with the back-end.</p>
            </div>
            <div className='topimg'>
                <img src={userexperensimg} alt='error'/>
            </div>
            <ul class="nav nav-pills mb-3 section_one_pills" id="s-1-tab" role="tablist"><li class="nav-item "><a class="nav-link optimization_text" href="#s-1-tab-one">React JS</a></li><li class="nav-item "><a class="nav-link performance_text" href="#s-1-tab-two">Angular JS</a></li><li class="nav-item"><a class="nav-link util_text" href="#s-1-tab-three">VUE JS</a></li></ul>
            </div>
        </section>
    )
}
function Block9(){
    return(
        <section className='Container4 conts9'>
            <div className='Content block9cont9'>
            <div className='topcontents block9cont'>
                <div className='hndblock'>
                    <img src={hndik1} alt='eror'/> 
                    <div class="hire-content"><p>We exactly know<br/>
                     what your system<br/>
                    needs.</p></div>   
                </div>
                <div class="containerhndik"><article class="text-center mt-5 mb-5 mb-lg-0 pl-3 pr-3 col-lg-6 offset-lg-3"><div class="hire_us_heading_section"><h4 class="heading hire_us_text">HIRE US</h4><div class="hire_us_hiddden_line"></div></div><div class="hire_us_title_section"><p class="font-playfair hire_us_title_text">Once you hire us, there is no looking back. <br/>We work hard to ensure quality and perfection to make<br/>
                the collaboration fruitful and memorable.</p><div class="hire_us_title_hiddden_line"></div></div><a class="btn-style-1 " href="/contact"><span class="top-left"></span><span class="top-right"></span><span class="bottom-left"></span><span class="bottom-right"></span>Contact us</a></article></div>
            </div>
            <div className='hndblock2'>
            <img src={hndik2} alt='eror'/> 
                    <div class="hire-content htect2"><p>We exactly know<br/>
                     what your system<br/>
                    needs.</p></div>   
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
        <footer className='footer'>
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
class ServicesPage extends React.Component{
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        require('../javascript(2)/ServicesScripts');
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
            <FooterForm/>
            
            </main>
            
        )   
    }
}
export default ServicesPage;