import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import halo from '../../img/halo_reach_wallpaper_1920x1080_by_hellhoundx666.jpg';
import './PaperSheet.css';
import github from './Github.png';
import FloatingActionButtonZoom from '../FloatingActionButtonZoom/FloatingActionButtonZoom.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
AOS.init();

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
    marginTop:'-60px',
    borderRadius:'8px'
  },
});

class PaperSheet extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
        this.props.ScrollDownCheck(true);
    }

  render(){
    const { classes } = this.props;
    if(this.props.lang==='EN'){
      return (
            <div>           
          <Paper className={classes.root} id='paperStyle' elevation={1}>        
            <img src={`${halo}`} className='imageStyle fade-in one'  alt="profileImage"/>
            <Typography className='typoStyle' variant="h5" component="h3">
              <div>
                <h3 className='nameStyle fade-in two'>Max Ferro</h3>
                <h6 className='fade-in three titleDev'>Full Stack Developer</h6>
                <a href='https://github.com/MaxFerr'><img className='fade-in four gitStyle' src={`${github}`} alt="githubIcon"/></a>
                  <div className='pStyle fade-in five'>
                    <p>Hi, my name is Max. 
                    I'm a full stack developer.The work I provide is of highest quality, 
                    fully responsive, and tested in a wide range of devices.
                    Building Web Apps individually or in a team is a passion. I hope we will work together !
                    </p>
                  </div>
                   <p className='pStyle fade-in five'><a href='https://patatap-1.herokuapp.com/' >Bonus</a></p>    
              </div>
              <div className='fade-in_scroll  breathe'> 
                <p>Scroll Down</p>                       
               </div>  
               <KeyboardArrowDownRounded className='fade-in_scroll  breathe' style={{color:'grey'}} ></KeyboardArrowDownRounded>              
            </Typography>
            <div style={{marginBottom:'100px'}} data-aos="fade-in"  data-aos-offset="350"  data-aos-duration='1000' >        
            <FloatingActionButtonZoom onMoreInfoUpdate={this.props.onMoreInfoUpdate} lang={this.props.lang}/>
            </div>        
          </Paper>
        </div>
      )
    }else{
      return (
            <div>           
          <Paper className={classes.root} id='paperStyle' elevation={1}>        
            <img src={`${halo}`} className='imageStyle fade-in one'  alt="profileImage"/>
            <Typography className='typoStyle' variant="h5" component="h3">
              <div>
                <h3 className='nameStyle fade-in two'>Max Ferro</h3>
                <h6 className='fade-in three titleDev'>Développeur full stack</h6>
                <a href='https://github.com/MaxFerr'><img className='fade-in four gitStyle' src={`${github}`} alt="githubIcon"/></a>
                  <div className='pStyle fade-in five'>
                    <p>Bonjour, je m'appelle Max.
                    Je suis un développeur full stack. Le travail que je fournis est de la plus haute qualité,
                    entièrement réactif et testé sur une large gamme d'appareils.
                    Construire des applications Web individuellement ou en équipe est une passion. 
                    J'espère avoir l'opportunité de travailler avec vous et votre compagnie !
                    </p>
                  </div>
                  <p className='pStyle fade-in five'><a href='https://patatap-1.herokuapp.com/' >Bonus</a></p>
              </div>
             <div className='fade-in_scroll  breathe'> 
                <p>Descendez</p>                       
               </div>  
               <KeyboardArrowDownRounded className='fade-in_scroll  breathe' style={{color:'grey'}} ></KeyboardArrowDownRounded>                
            </Typography>
            <div style={{marginBottom:'100px'}} data-aos="fade-in"  data-aos-offset="350"  data-aos-duration='1000' >        
            <FloatingActionButtonZoom onMoreInfoUpdate={this.props.onMoreInfoUpdate} lang={this.props.lang}/>     
            </div>
          </Paper>
        </div>
      )
    }
  }
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

