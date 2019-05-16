import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PaperSheetContact.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:'auto',
    marginTop:'-60px',
    borderRadius:'8px',    
    height:'400px'
  },
});
class PaperSheetContact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      message:'',
      name:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  onMessageChange=(event)=>{
    this.setState({message:event.target.value})
  }

  componentDidMount(){   
        this.props.ScrollDownCheck(false);        
    }

  onSubmit=()=>{
    const sendMaillErr=document.getElementById('sendMaillErr');
      if(this.state.email==='' || this.state.message==='' || this.state.name==='' ){
         sendMaillErr.style.color="red"
         if(this.props.lang==='EN'){         
          sendMaillErr.innerHTML="You must complete all the fields !"
        }else{
          sendMaillErr.innerHTML="Vous devez complèter tous les champs !"
        }        
      }else{                
        fetch('https://maxferr-api.herokuapp.com/sendmail',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:this.state.email,
            message:this.state.message,
            name:this.state.name
          })
        })
        .then(response=>{       
          return response.json()
        })
        .then(resp=>{
          if(this.props.lang==='EN'){
          if(resp==='email sent'){
            sendMaillErr.style.color="green"          
            sendMaillErr.innerHTML="Email sent !"
          }else {
            sendMaillErr.style.color="red"
            sendMaillErr.innerHTML="Email could not be sent."
          }
        }else{
          if(resp==='email sent'){
            sendMaillErr.style.color="green"          
            sendMaillErr.innerHTML="Email envoyé !"
          }else {
            sendMaillErr.style.color="red"
            sendMaillErr.innerHTML="L'email n'a pas pu être envoyé."
            }
          }       
        })      
      }
    }

  render(){
    const { classes,lang } = this.props;
    if(lang==='EN'){
      return(
        <div style={{maxWidth:'700px',margin:'auto'}} >
        <Paper className={classes.root} id='paperStyle' elevation={1}>
          <Typography className='typoStyle' variant="h5" component="h3">
          <div style={{marginTop: '10px'}}>
              <h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">CONTACT</h3>
              <hr data-aos="fade-left" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800"/>
              <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">Have a question or want to work together?</p> 
                <div data-aos="fade-left" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">                
                  <input className='iptStyle' type="text" name="name" placeholder='Name' 
                    onChange={this.onNameChange}
                  /><br/>
                  <input style={{marginTop:'-30px'}} className='iptStyle' type="text" name="mail" placeholder='Email'
                    onChange={this.onEmailChange}
                  /><br/>
                  <textarea
                  onChange={this.onMessageChange}                
                  id="myText" 
                  placeholder='Your Message'
                  rows="5" 
                  cols="45" 
                  style={{height:'70px',marginTop:'-30px'}}              
                  >
                  </textarea>                
                  <input className='iptStyle2' type="submit" value="Send"
                    onClick={this.onSubmit}
                  />                  
                </div>
                <span id='sendMaillErr'></span>              
              </div>                  
          </Typography>
        </Paper>
      </div>
      )
    }else{
      return(
          <div style={{maxWidth:'700px',margin:'auto'}}>
        <Paper className={classes.root} id='paperStyle' elevation={1}>
          <Typography className='typoStyle' variant="h5" component="h3">
          <div style={{marginTop: '10px'}}>
              <h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">CONTACT</h3>
              <hr data-aos="fade-left" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800"/>
              <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">Une question ? Vous voulez que l'on travaille ensemble ? </p> 
                <div data-aos="fade-left" data-aos-delay="350" data-aos-offset="350" data-aos-duration="800">                
                  <input className='iptStyle' type="text" name="name" placeholder='Nom' 
                  onChange={this.onNameChange}
                  /><br/>
                  <input style={{marginTop:'-30px'}} className='iptStyle' type="text" name="mail" placeholder='Email'
                  onChange={this.onEmailChange}
                  /><br/>
                  <textarea 
                  onChange={this.onMessageChange}                     
                  id="myText" 
                  placeholder='Votre Message'
                  rows="5" 
                  cols="45" 
                  style={{height:'70px',marginTop:'-30px'}}              
                  >
                  </textarea>                
                  <input className='iptStyle2' type="submit" value="Envoyer"
                   onClick={this.onSubmit}
                  />                  
                </div>
                <span id='sendMaillErr'></span>                  
              </div>                  
          </Typography>
        </Paper>
      </div>
      )
    }   
  }
}
PaperSheetContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheetContact);