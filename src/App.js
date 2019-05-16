import React, { Component } from 'react';
import ButtonAppBar from './Component/ButtonAppBar/ButtonAppBar.js';
import PaperSheet from './Component/PaperSheet/PaperSheet.js';
import Parallax from "./Component/Parallax/Parallax.js";
import Footer from "./Component/Footer/Footer.js";
import {Route,Switch,Link} from "react-router-dom";
import PaperSheetCv from "./Component/PaperSheetCv/PaperSheetCv.js";
import PaperSheetContact from "./Component/PaperSheetContact/PaperSheetContact.js";
import './App.css';
import {CSSTransition,TransitionGroup} from "react-transition-group";
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIos from '@material-ui/icons/ArrowBackIosRounded';
import Particles from 'react-particles-js';
import MoreInfo from "./Component/MoreInfo/MoreInfo.js";

const particlesOptions={
  "particles": {
          "number": {
              "value": 75,
              "density": {
                  "enable": true,
                  "value_area": 1500
              }
          },
          "line_linked": {
              "enable": false,
              "opacity": 0.02
          },
          "move": {
              "direction": "right",
              "speed": 0.05
          },
          "size": {
              "value": 1
          },
          "opacity": {
              "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
              }
          }
      },
      "interactivity": {
          "events": {
              "onclick": {
                  "enable": false,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "particles_nb": 1
              }
          }
      },
      "retina_detect": true

}


class App extends Component {
  constructor(props){
    super(props);
    this.state={     
      language:'EN',
      ScrollDown:true,
      moreinfosite:[]      
    }    
   }
  
  langSelect = (lang) => {
    this.setState({language:lang})
  }

  //check if the scroll down message should be displayed or not
  ScrollDownCheck = (scroll) => {
    this.setState({ScrollDown:scroll})
  }

  //selected site in the advanced grid list
  onMoreInfoUpdate=(site)=>{
    this.setState({moreinfosite:site})
  }
  
  //simple arrow link (don't forget to use history when it gets trickier)
  forward=()=>{
    if(this.props.location.pathname==='/'){    
      return '/cv'
    }else if(this.props.location.pathname==='/cv'){    
      return '/contact'
    }else if(this.props.location.pathname==='/contact'){    
      return '/'
    }if(this.props.location.pathname){
      return '/'
    }
  }   

  back=()=>{
    if(this.props.location.pathname==='/'){
      return '/contact'
    }else if(this.props.location.pathname==='/cv'){
      return '/'
    }else if(this.props.location.pathname==='/contact'){
      return '/cv'
    }if(this.props.location.pathname){
      return '/'
    }
  }   
  
  render() {
    const {ScrollDown,language,moreinfosite}=this.state;
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions} />      
      <ButtonAppBar langSelect={this.langSelect} />            
      <Parallax ScrollDown={ScrollDown} small filter image={require("./img/wpp.jpg")} />      
      <div className={`Fixed hide`}>
          <Link id='forwardA'  to={`${this.forward()}`}><ArrowForwardIos id='arrowStyle' classnames="material-icons "></ArrowForwardIos></Link>                  
      </div>
      <div className={`FixedSecond hide`}>
          <Link id='backA' to={`${this.back()}`}><ArrowBackIos id='arrowStyle' classnames="material-icons "></ArrowBackIos></Link> 
      </div>           
      <Route render={({location})=>(
        <TransitionGroup component={null} >
          <CSSTransition key={location.key} timeout={600} classNames="background">
            <Switch location={location} >
              <Route exact path="/" render={(props) => <PaperSheet lang={language} ScrollDownCheck={this.ScrollDownCheck} onMoreInfoUpdate={this.onMoreInfoUpdate} /> }/>
              <Route exact path="/cv"  render={(props) => <PaperSheetCv lang={language} ScrollDownCheck={this.ScrollDownCheck}/> }/>
              <Route exact path="/contact" render={(props) => <PaperSheetContact lang={language} ScrollDownCheck={this.ScrollDownCheck}/>} />
              <Route exact path="/moreinfo/:id" render={(props) => <MoreInfo {...props} lang={language} ScrollDownCheck={this.ScrollDownCheck} moreinfosite={moreinfosite} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
      <Footer/>    

      
      </div>
    );
  }
}

export default App;
