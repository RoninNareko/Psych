import React from 'react';
//wow
import WOW from 'wowjs';
//styles
import '../Styles(1)/Home.css';
//
import logo from '../img(1)/psychx-86-logo.svg'; 
import psych_banner from '../img(1)/psych_banner.png'; 
import Services from '../img(1)/Services.png';
import messengerIcon from '../img(1)/messengerIcon.png';
import servers_services from '../img(1)/psych-homepage-server-services-illustration.svg';
import Development_image from '../img(1)/psych-homepage-server-enterprise-illustration.svg';
import notebook from '../img(1)/1.png';
import notebook2 from '../img(1)/1(1).png';
import img1 from '../img(1)/mventry.png';


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
function Block3(){
  return(
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
                    <a className='servicesl' href='#readmore'>Services</a>
                  </div>
                  <span className='top_line1'></span>
                  <span className='top_line2'></span>
                  <span className='top_line3'></span>
                  <span className='top_line4'></span>
                  <span className='top_line5'></span>
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
                            <p><span className='big_num'>01</span><h3>CLOUD SERVICE MANEGMENT</h3></p>
                            <p>We analyze cross-functional scenarios<br/>
                               to maneuver Space Optimization,<br/>
                                Performance, CPU, Memory and I / O<br/>
                                 Util to provide the ultimate solution to<br/>
                                  our clients given the upcoming<br/>
                                   technological advancements.
                              </p>
                            <a href='#readmore'>Know more</a>
                          </div>
                          <div className='texter_Container'>
                   
                      </div>   

                      <div className='big_info_container_2'>

                  
                        <div className="linkosBlock">
                        <img src={Services} alt='error'/>
                        <a className='servicesl' href='#readmore'>More</a>
                        </div>

                        <div className='hinfo_image2'>
                            <img src={Development_image} alt='server-services'/>
                            <p><span className='big_num_2'>02</span><h3>CLOUD SERVICE MANEGMENT</h3></p>
                            <p>We analyze cross-functional scenarios<br/>
                               to maneuver Space Optimization,<br/>
                                Performance, CPU, Memory and I / O<br/>
                                 Util to provide the ultimate solution to<br/>
                                  our clients given the upcoming<br/>
                                   technological advancements.</p>
                                <a href='#readmore'>Know more</a>
                            </div>
                          </div>  

                      </div>
                      
                </div>
              </section>
  )
}
function Block4(){
  return(
    <section className='Container-4'>
    <div className='cont_container'>

    <div className='containerAd_1 ados'>


      <span className='cnumbers'>01</span><h4 class="heading heading_text">TRATOII</h4>
      <p class="sub-heading-1 real_raid_paragraph">Based in Lower Manhattan, Accrete aims at addressing<br/>
      the problem of sparse training data to compound<br/>
      financial knowledge and making it user-friendly.</p>
      <p class="sub-heading-1 real_raid_paragraph">A tool that continuously read and understand vast<br/>
      volumes of information in specific contexts. The tool<br/>
      extracts and pushes key insights to users so that they<br/>
      can overcome bias and generate alpha in the digital era<br/>
      of markets.</p>
      <a class="btn-style-1 " href="/work/accrete">
      <span class="top-left"></span>
      <span class="top-right"></span>
      <span class="bottom-left"></span>
      <span class="bottom-right"></span>
      View Case Study</a>
      <span className='cnumbersb2'>02</span><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">M-Ventry</button>
      <span className='cnumbersb3'>03</span><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">View All Projects</button>

      </div>
      <div className='mybook2'>
      <img src={notebook2} alt='error'/>
      </div>

      </div>
  </section>
  )
}
function Block5(){
  return(
    <section className='container-5'>
        <div className='imagos_cont wow fadeInUp' >
            
      <h4 class="heading text-center noneleft">HAPPY CLIENTS</h4>
      <p class="font-playfair text-center sub-heading-4">Bonds formed with trust and responsibility</p>
          <ul>
            <li>
              <img src={img1} alt='error'></img>
              </li>
              <li>
              <img src={img1} alt='error'></img>
              </li>
              <li>
              <img src={img1} alt='error'></img>
              </li>
              <li>
              <img src={img1} alt='error'></img>
              </li>
              <li>
              <img src={img1} alt='error'></img>
              </li>
              <li>
              <img src={img1} alt='error'></img>
              </li>
              
              
              
          </ul>
          </div>
        </section>
  )
}
class Animate extends React.Component{

  render(){
    return(
      <section className='block-3'>
      <div className='containerAd_1 wow fadeInUp'>
        <h5>Our recent work</h5>
        <hr className='gcik_1'></hr>
        <h4 class="heading heading_text">ACCRETE.AI</h4>
        <p class="sub-heading-1 real_raid_paragraph">Based in Lower Manhattan, Accrete aims at addressing<br/>
         the problem of sparse training data to compound<br/>
        financial knowledge and making it user-friendly.</p>
        <p class="sub-heading-1 real_raid_paragraph">A tool that continuously read and understand vast<br/>
         volumes of information in specific contexts. The tool<br/>
        extracts and pushes key insights to users so that they<br/>
        can overcome bias and generate alpha in the digital era<br/>
        of markets.</p>
        <a class="btn-style-1 " href="/work/accrete">
          <span class="top-left"></span>
          <span class="top-right"></span>
          <span class="bottom-left"></span>
          <span class="bottom-right"></span>
          View Case Study</a>
      </div>
      <div className='mybook wow fadeInRight'>
        <img src={notebook} alt='error'/>
      </div>
    </section>
    )
  }
};

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

class App extends React.Component{
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    require('../javascript(1)/myscripts');
  }
  render(){
   return (
          <main>
            <Header/>
            <AnimateColors/>
             <Animate/>
             <Block3/>
             <Block4/>
            <Block5/>
            <FooterForm/>
          </main>
    );
  }
}

export default App;
