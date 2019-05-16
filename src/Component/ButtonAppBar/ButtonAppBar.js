import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Language from '@material-ui/icons/Language';
import './ButtonAppBar.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component{
  constructor(props){
      super(props);
      this.state={
        scrolling:'',
        languageOpen:false,
        language:'EN'        
      }
    }
//checkin where the scrollY is and changing the opacity of the navbar
  handleScroll=(event)=> {
    if (window.scrollY < 200 && this.state.scrolling === true) {
      this.setState({scrolling: false})
    }
    else if (window.scrollY > 200 && this.state.scrolling !== true) {
      this.setState({scrolling: true})
    }
  }

  //drop down menu for the language check if the menu is open or close
  onLanguageMenu=()=>{    
    document.addEventListener('click', this.closeMenu);        
    if(!this.state.languageOpen){
      this.setState({languageOpen:true})
    }    
  }
  //selecting the language is the menu
  onLanguageChange=(lang)=>{ 
    this.setState({language:lang})
    this.setState({languageOpen:false})
    document.removeEventListener('click', this.closeMenu);
    this.props.langSelect(lang)
  }

  //close the menu when we click outside of it
  closeMenu=(event)=> {
    if (!this.dropdownMenu.contains(event.target)){
      this.setState({ languageOpen: false }) 
    document.removeEventListener('click', this.closeMenu);
    }    
  }

  componentDidMount(){
     window.addEventListener('scroll', this.handleScroll);
    }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
     const { classes } = this.props;
     const {languageOpen,scrolling}=this.state;
     ButtonAppBar.propTypes = {
        classes: PropTypes.object.isRequired,
        };      
        if(languageOpen){
          return (
            <div className={classes.root} >
              <AppBar style={{backgroundColor: scrolling ? '#000' : 'transparent'}} position="fixed">
                <Toolbar>         
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                   <Link className='linkStyleMain' to={`/`}>PORTFOLIO</Link>
                  </Typography>
                 <Link className='linkStyle' to={`/cv`}><Button color="inherit">CV</Button></Link>
                  <Link className='linkStyle' to={`/contact`}><Button color="inherit">contact</Button></Link>          
                  <Button onClick={()=>this.onLanguageMenu()} color="inherit"><Language classnames="material-icons "></Language></Button>
                  <div className="menu" ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                  <ul className='ulStyle'>
                    <li className='liStyle'><button onClick={()=>this.onLanguageChange('FR')}> FR </button></li>
                    <li className='liStyle'><button onClick={()=>this.onLanguageChange('EN')}> EN </button></li>
                  </ul>                              
                </div>
                </Toolbar>
              </AppBar>
            </div>
          );
        }else{
          return (
            <div className={classes.root} >
              <AppBar style={{backgroundColor: scrolling ? '#000' : 'transparent'}} position="fixed">
                <Toolbar>         
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                   <Link className='linkStyleMain' to={`/`}>PORTFOLIO</Link>
                  </Typography>
                 <Link className='linkStyle' to={`/cv`}><Button color="inherit">CV</Button></Link>
                  <Link className='linkStyle' to={`/contact`}><Button color="inherit">contact</Button></Link>          
                  <Button onClick={()=>this.onLanguageMenu()} color="inherit"><Language classnames="material-icons "></Language></Button>
                </Toolbar>
              </AppBar>             
            </div>
          );
        }        
      }
}
export default withStyles(styles)(ButtonAppBar);