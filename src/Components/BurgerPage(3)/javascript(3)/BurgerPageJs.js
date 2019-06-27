

import Hlogtype1 from '../img(3)/psychx-86-logo.svg';
import Hlogtype2 from '../img(3)/hlogo2.png';


///////////// functions //////////////////////////*/
function mouseout1()
{
    this.style.color='#fff';
};
function mouseout()
{
    this.style.color='black';
};
function onhover1()
{
    this.style.color='coral';
    this.addEventListener('mouseout',mouseout1);
};
function onhover()
{
    this.style.color='coral';
    this.addEventListener('mouseout',mouseout);
};
function onhoverBurger()
{
 
    b_line_1.style.width='15px';

    b_line_2.style.left='-10px';

    b_line_3.style.left='-5px';
    b_line_3.style.width='20px';
};
function offhoverBurger()
{
    b_line_1.style.width='25px';

    b_line_2.style.left='0px';

    b_line_3.style.left='0px';
    b_line_3.style.width='25px';
};

function ColorsAnimationTimer(){

    var rect = animCoolorVols.getBoundingClientRect();
    var Color2Position = animcolorvol_2.getBoundingClientRect();
    var Color3Position = animcolorvol_3.getBoundingClientRect();
    var Color4Position = animcolorvol_4.getBoundingClientRect();
    if(Color4Position.x===3000){

       clearInterval(ColorsAnimInterval);
       ColorsAnimInterval = null;
       animCoolorVols.style.opacity='0';
       animcolorvol_2.style.left='380px';
       animcolorvol_3.style.left='740px';
       animcolorvol_4.style.left='1100px';
       animCoolorVols.style.left='0px';
    }
    else{
        animCoolorVols.style.left=rect.x+100+'px';
        animcolorvol_2.style.left=Color2Position.x+100+'px';
        animcolorvol_3.style.left=Color3Position.x+100+'px';
        animcolorvol_4.style.left=Color4Position.x+100+'px';
    
    }

}
function AnimationClick(event){
    event.preventDefault();

    
    animCoolorVols.style.opacity='1';
    ColorsAnimInterval= setInterval(ColorsAnimationTimer,30);
    setTimeout(function(){
        document.location = "/services";
    },200)
}
/////////////////////// Vars //////////////////////////////////////

//intervals
var ColorsAnimInterval = null;
//colors animation
var animCoolorVols = document.querySelector('.vols');
var animcolorvol_2 = document.querySelector('.vol_2');
var animcolorvol_3 = document.querySelector('.vol_3');
var animcolorvol_4 = document.querySelector('.vol_4');
var AnimLinks = document.querySelectorAll(".ColorLinks");

var b_line_1 = document.querySelector('.burg1');
var b_line_2 = document.querySelector('.burg-2');
var b_line_3 = document.querySelector('.burg-3');

var header = document.querySelector('header');
var header_image = document.querySelector('.Hlogo img');
var header_links = document.querySelectorAll('header a');
var header_logo_container= document.querySelector('header div.H_Logo_Container');
var burger_menu = document.querySelector('header .burger_menu');
var burger_menu_divs = document.querySelectorAll('header .nav-icon div');
var header_Menu = document.querySelector('header ul.Menu');
// var burgermlinks = document.querySelectorAll('.MenuTitles');

//z
var z=0;
//events
AnimLinks.forEach(element => {
    element.addEventListener('click',AnimationClick);
});
burger_menu.addEventListener('mouseover', onhoverBurger);
burger_menu.addEventListener('mouseout',offhoverBurger);
//////////////////// Scrolling event /////////////////
window.addEventListener("scroll", function() 
{
    var scrolledTop = window.pageYOffset || document.documentElement.scrollTop;
   
 
    if(z<scrolledTop)
    {
        z=scrolledTop;
        header.style.top = "-100px";
        header.style.height='7%';
        header.style.backgroundColor='#fff';
    } 
    else if(z<=200)
    {    
        header_logo_container.style.marginTop ='35px';
        header_image.src=Hlogtype1;
        header_Menu.style.top='30px';    
        header.style.border='transparent';

        burger_menu.style.top='25px';
        header.style.height='10%';
        header.style.backgroundColor='#03003F';

        header_links.forEach(element => {
            element.removeEventListener('mouseover',onhover);
            element.removeEventListener('mouseout',mouseout);
         
        });
        header_links.forEach(element => 
        {
            element.style.color='#fff';
            element.addEventListener('mouseover',onhover1);
        });
        burger_menu_divs.forEach(element => {
            element.style.backgroundColor='#fff';
        });
    }
    else 
    {  
        header.style.top = "0px";
        header.style.borderBottom='1px solid #E1E1E1';
        header_Menu.style.top='15px';
        header_logo_container.style.marginTop ='25px';
        header.style.height='6%';
        burger_menu.style.top='10px';
        header_image.src=Hlogtype2;
        z=scrolledTop; 

 

        header_links.forEach(element => {
            element.style.color='black';
            element.removeEventListener('mouseover',onhover1);
            element.removeEventListener('mouseout',mouseout1);
            element.addEventListener('mouseover',onhover);
         
        });
        burger_menu_divs.forEach(element => {
            element.style.backgroundColor='black';

        });
    }
});






/////////////////////////////0//////////////////////////////
function OnMouseOver0(){
    this.style.color='coral';
    var lineEnter0 = document.querySelector('.line0');
    lineEnter0.style.opacity='1';
    lineEnter0.style.width='80px';
    var OpisaineEnter0 = document.querySelector('.Opisanie0');
    OpisaineEnter0.style.opacity='1';
    
}

function OnMouseOut0(){
this.style.color='#fff';
var lineOut0 = document.querySelector('.line0');
lineOut0.style.opacity='0';
lineOut0.style.width='1px';
var OpisaineOut0 = document.querySelector('.Opisanie0');
OpisaineOut0.style.opacity='0';
}
var MyBurkerMenuLinks0 = document.querySelector('.linket0');
MyBurkerMenuLinks0.addEventListener('mouseover',OnMouseOver0);
MyBurkerMenuLinks0.addEventListener('mouseout',OnMouseOut0);
////////////////////  /////////////////


/////////////////////////////1//////////////////////////////
function OnMouseOver1(){
    this.style.color='coral';
    var lineEnter1 = document.querySelector('.line1');
    lineEnter1.style.opacity='1';
    lineEnter1.style.width='80px';
    var OpisaineEnter1 = document.querySelector('.Opisanie1');
    OpisaineEnter1.style.opacity='1';
    
}
function OnMouseOut1(){
this.style.color='#fff';
var lineOut1 = document.querySelector('.line1');
lineOut1.style.opacity='0';
lineOut1.style.width='1px';
var OpisaineOut0 = document.querySelector('.Opisanie1');
OpisaineOut0.style.opacity='0';
}
var MyBurkerMenuLinks1 = document.querySelector('.linket1');
MyBurkerMenuLinks1.addEventListener('mouseover',OnMouseOver1);
MyBurkerMenuLinks1.addEventListener('mouseout',OnMouseOut1);
////////////////////  /////////////////

/////////////////////////////2//////////////////////////////
function OnMouseOver2(){
    this.style.color='coral';
    var lineEnter2 = document.querySelector('.line2');
    lineEnter2.style.opacity='1';
    lineEnter2.style.width='80px';
    var OpisaineEnter2 = document.querySelector('.Opisanie2');
    OpisaineEnter2.style.opacity='1';
    
}
function OnMouseOut2(){
this.style.color='#fff';
var lineOut0 = document.querySelector('.line2');
lineOut0.style.opacity='0';
lineOut0.style.width='1px';
var OpisaineOut0 = document.querySelector('.Opisanie2');
OpisaineOut0.style.opacity='0';
}
var MyBurkerMenuLinks2 = document.querySelector('.linket2');
MyBurkerMenuLinks2.addEventListener('mouseover',OnMouseOver2);
MyBurkerMenuLinks2.addEventListener('mouseout',OnMouseOut2);
////////////////////  /////////////////

/////////////////////////////3//////////////////////////////
function OnMouseOver3(){
    this.style.color='coral';
    var lineEnter3 = document.querySelector('.line3');
    lineEnter3.style.opacity='1';
    lineEnter3.style.width='80px';
    var OpisaineEnter3 = document.querySelector('.Opisanie3');
    OpisaineEnter3.style.opacity='1';
    
}
function OnMouseOut3(){
this.style.color='#fff';
var lineOut3 = document.querySelector('.line3');
lineOut3.style.opacity='0';
lineOut3.style.width='1px';
var OpisaineOut3 = document.querySelector('.Opisanie3');
OpisaineOut3.style.opacity='0';
}
var MyBurkerMenuLinks3  = document.querySelector('.linket3');
MyBurkerMenuLinks3.addEventListener('mouseover',OnMouseOver3);
MyBurkerMenuLinks3.addEventListener('mouseout',OnMouseOut3);
////////////////////  /////////////////
