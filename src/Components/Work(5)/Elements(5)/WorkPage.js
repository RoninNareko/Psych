import React from 'react';
//
import notebook2 from '../img(5)/1(1).png';
//carusele
import hndik1 from '../img(5)/hire1.png';
import hndik2 from '../img(5)/hire2.png';
//
import Slider from "react-slick";
//wow
import WOW from 'wowjs';
//css
import '../Styles(5)/SlickStyles/slick.css';
import '../Styles(5)/SlickStyles/slick-theme.css';
import '../Styles(5)/WorkStyle.css';
import impuls_note from '../img(5)/1.png';
import AdBoard from '../img(5)/Artboard_1.png'; 
//
import BookHndik from '../img(5)/5(1).png';
import hndikbook2 from '../img(5)/4 (1).png';
import Narek from '../img(5)/feature.png';
import Narek2 from '../img(5)/7(1).png';
import logo from '../img(5)/psychx-86-logo.svg'; 
import BigBook from '../img(5)/banner (1).png';




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
  function Block2(){
    return(
      <section className='page_erku_container_block_2'>
      <div className='context_block_2'>
        <div className='items_top_block_2'>
        <div className='Context_left'>
          <div className='left_text_content'>
          <h1 class="heading">M Ventry</h1>
          <p class="sub-heading-1">Get real-time meaningful business insights for your store.</p>
          <div class="lineorange"></div>
          </div>
          <div className='note_image'>
            <img src={impuls_note} alt='error'/>
            </div>
        </div>
        <div className='Context_right'>
          <h4 className='banner_text'>Crafted with Intelligence</h4>
          <ul className='Big_Menu'>
          <li className='NoActive'>
            <a className='Big_Links' href='#hrefus'>
              <img src={AdBoard} alt='error'/>
              <hr className='Line_Orabge'></hr>
              <div className='Blocked'>
              <span class="numbertitle">1</span>
              </div>
              <span class="title">Tratoli</span>
            </a>
          </li>
          <li className='NoActive bigolo'>
            <a className='mini_Big_Links' href='#hrefus'>
              <img src={AdBoard} alt='error'/>
              <hr className='Line_Orabge2'></hr>
              <div className='Blocked2'>
              <span class="numbertitle2">1</span>
              </div>
              <span class="title2 title">Tratoli</span>
            </a>
          </li>
          <li className='NoActive'>
            <a className='mini_Big_Links' href='#hrefus'>
              <img src={AdBoard} alt='error'/>
              <hr className='Line_Orabge2'></hr>
              <div className='Blocked2'>
              <span class="numbertitle2">1</span>
              </div>
              <span class="title2 title">Tratoli</span>
            </a>
          </li>
          
         
          </ul>
        </div>
        </div>
      </div>
    </section>
    )
  };

  function Block33(){
    return(
      <section className='page_erku_container_block_33'>
        <div className='context_block_33'>
          <div className='items_top_block_33'>
          <div className='context_text33'>
          <h4>DEFINE THE PROBLEM</h4>
          <p class="sub-heading-1">Tratoli Tours Pvt. Ltd. had the path-breaking<br/>
           vision to take the travel-planning process to a<br/>
            digital platform. At Psych, we endeavored to<br/>
             assist them to make most of the internet boom<br/>
              and capture the digital market space.</p>
          </div>
          <div className='Offset_container'>
            <ul className='offeset_spisok'>
              <li>
              <span class="number">01</span><span className='textero'>
              We had to provide a user-friendly website to their customers that highlights the<br/>
               wide range of exotic locations that Tratoli has to offer.
              </span></li>
              <li>
              <span class="number">01</span><span className='textero'>
              We had to provide a user-friendly website to their customers that highlights the<br/>
               wide range of exotic locations that Tratoli has to offer.
              </span></li>
              <li>
              <span class="number">01</span><span className='textero'>
              We had to provide a user-friendly website to their customers that highlights the<br/>
               wide range of exotic locations that Tratoli has to offer.
              </span></li>
              <li>
              <span class="number">01</span><span className='textero'>
              We had to provide a user-friendly website to their customers that highlights the<br/>
               wide range of exotic locations that Tratoli has to offer.
              </span></li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    )
  } 
  function Block99(){
    return(
      <section className='page_erku_container_block_9'>
      <div className='context_block_9'>
        <div className='items_top_block_9'>
        <div className='Big_Hndik_image_Context' id='hindinote'>
        <img src={Narek} alt='banner'/>
          </div>
          <div className='offerspisok'>
          <hgroup>
            <h4 class="heading lg-small">THINGS WE OFFER</h4>
            <h5 class="sub-heading-2">Create products engineered to deliver growth</h5>
            <p class="sub-heading-1">A conscious effort has been made to keep the website<br/>
             interface as simple as possible. The potential users<br/>
              include a section of the population that could feel<br/>
               burdened by unnecessary complications. We have used<br/>
                hues of blues and greens – to signify that travel is a<br/>
                 wonderful way to connect to nature.</p>
          </hgroup>

          </div>
        </div>
      </div>
    </section>
    )
  }
 class Block44 extends React.Component{
    render(){
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
      <section className='page_erku_container_block_44'>
        <div className='context_block_44'>
          <div className='items_top_block_44'>
            <div className='texterdo2'>
            <h4>Building Itineraries at<br/> par with preferences</h4>
            <h5 class="sub-heading-2 mt-lg-2 mb-lg-3">Holistic holiday booking experience</h5>
            <p class="sub-heading-1">Tratoli enhances users awareness, galvanize your<br/>
             traveling interest, brings in interesting updates,<br/>
              discover the culture &amp; cuisines of cities around<br/>
              the world and convert users ‘dreams to explore’<br/>
               into reality. Tratolir Researchers, executive and<br/>
                content writers are creatively adroit in finding all<br/>
                 about the travel destinations of India and all<br/>
                other tourist places around the world, create<br/>
                 detailed and interesting blogs &amp; articles to help<br/>
                visitors know more about it.</p>
                <ul className='optime_spisok'>
                  <li>
                  - Mobile Friendly
                  </li>
                  <li>
                  - Mobile Friendly
                  </li>
                  <li>
                  - Mobile Friendly
                  </li>
                  <li>
                  - Mobile Friendly
                  </li>
                </ul>
            </div>
            <div className='mini_slider_container'>
          
           
                <Slider {...settings}>
                  <div>
                    <img  src={Narek} alt='error'/>
                  </div>
                  <div>
                  <img  src={Narek} alt='error'/>
                  </div>
                  <div>
                  <img  src={Narek} alt='error'/>
                  </div>
   
                </Slider>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
function Block555(){
  return(
    <section className='page_erku_container_block_name_5'>
    <div className='context_block_name_5'>
      <div className='items_top_block_name_5'>
        <div className='context_one_image wow fadeInUp normimage'>
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
class Block66 extends React.Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return(
    <section className='page_erku_container_block_44'>
      <div className='context_block_44'>
        <div className='items_top_block_44'>
          <div className='texterdo2'>
          <h4>FEATURES</h4>
          <h5 class="sub-heading-2 mt-lg-2 mb-lg-3">Holistic holiday booking experience</h5>
          <p class="sub-heading-1">Tratoli enhances users awareness, galvanize your<br/>
           traveling interest, brings in interesting updates,<br/>
            discover the culture &amp; cuisines of cities around<br/>
            the world and convert users ‘dreams to explore’<br/>
             into reality. Tratolir Researchers, executive and<br/>
              content writers are creatively adroit in finding all<br/>
               about the travel destinations of India and all<br/>
              other tourist places around the world, create<br/>
               detailed and interesting blogs &amp; articles to help<br/>
              visitors know more about it.</p>
              <ul className='optime_spisok'>
                <li>
                - Mobile Friendly
                </li>
                <li>
                - Mobile Friendly
                </li>
                <li>
                - Mobile Friendly
                </li>
                <li>
                - Mobile Friendly
                </li>
              </ul>
          </div>
          <div className='mini_slider_container'>
        
         
              <Slider {...settings}>
                <div>
                  <img  src={Narek2} alt='error'/>
                </div>
                <div>
                <img  src={Narek2} alt='error'/>
                </div>
                <div>
                <img  src={Narek2} alt='error'/>
                </div>
 
              </Slider>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
function Block777(){
  return(
    <section className='page_erku_container_block_777'>
      <div className='context_block_777'>
        <div className='items_top_block_777'>
        <img src={BigBook} alt='error'/>
    
        </div>
      </div>
    </section>
  )
}
function Block888(){
  return(
    <section className='page_erku_container_block_888'>
      <div className='context_block_888'>
        <div className='items_top_block_888'>
        <div className='Text_top'>
        <blockquote class="blockquote dark mt-4">
          <p class="mb-0">Working with Psych has been a wonderful<br/>
           experience. I have rarely seen a team more<br/>
          dedicated and passionate about their work.<br/>
           From working on the tiniest details to ensuring<br/>
          smooth daily functioning, Psych has delivered<br/>
          what it promised.</p>
          <footer class="blockq-footer">Kranthi Kumar<br/>
          <span class="founder">Co-Founder</span>
          </footer>
          </blockquote>
        </div>
        </div>
      </div>
    </section>
  )
}
function Block999(){
  return(
    <section className='page_erku_container_block_999'>
      <div className='context_block_999'>
        <div className='items_top_block_999'>
        <div className='SectorsBlock'>
        <hgroup >
          <h4>RESULTS</h4>
          <p>How did we help them</p>
          </hgroup>
        </div>
        <div className='sectors'>
        <div className='col_lg'>
            <h4 className='smallh4'>User friendly planning</h4>
            <p>Smart algorithm will make it easy and<br/>
            convincing for the traveller to plan<br/>
            their journey the way they like.</p>
          </div>
          <div className='col_lg'>
            <h4 className='smallh4'>User friendly planning</h4>
            <p>Smart algorithm will make it easy and<br/>
            convincing for the traveller to plan<br/>
            their journey the way they like.</p>
          </div>
          <div className='col_lg'>
            <h4 className='smallh4'>User friendly planning</h4>
            <p>Smart algorithm will make it easy and<br/>
            convincing for the traveller to plan<br/>
            their journey the way they like.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
function Block1111(){
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
function Block1222(){
  return(
      <section className='Container4 conts9' id='endurehndik'>
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
class EndFooterForm extends React.Component{
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
        require('../javascript(5)/WorkScripts');
    }
    render(){
        return(
            <main>
            <Header/>
            <Block2/>
            <Block33/>
            <Block99/>
            <Block44/>
            <Block555/>
            <Block66/>
            <Block777/>
            <Block888/>
            <Block999/>
            <Block1111/>
            <Block1222/>
            <EndFooterForm/>
            <AnimateColors/>
            </main>
            
        )   
    }
}
export default ServicesPage;