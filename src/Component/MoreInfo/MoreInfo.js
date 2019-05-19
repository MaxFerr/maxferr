import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './MoreInfo.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NewComment from '../NewComment/NewComment.js';
import github from '../PaperSheet/Github.png';
import '../AdvancedGridList/AdvancedGridList.css';
 
AOS.init();

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,    
    marginTop:'-60px',
    borderRadius:'8px',
    maxWidth:'700px',
    margin:'auto',
    minHeight:'500px'
  },
});

class MoreInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
    	param:this.props.match.params.id,
    	moreInfoS:this.props.moreinfosite,    	
    	comment:null,
    	username:null,
    	updatedComment:[],
    	updatedSite:[]
    }
  }
  //getting data with sites id in the url
  componentDidMount(){  		
        this.props.ScrollDownCheck(true);
        fetch(`https://maxferr-api.herokuapp.com/moreinfo/${this.props.match.params.id}`).then(response=>{
          return response.json()
        })
        .then(updatedSite=>{          
          this.setState({updatedSite:updatedSite})             
        })                
        fetch(`https://maxferr-api.herokuapp.com/allComment/${this.props.match.params.id}`).then(response=>{
          return response.json()
        })
        .then(updatedComment=>{          
          this.setState({updatedComment:updatedComment})             
        })        
    }

    onCommentChange=(event)=>{
    	this.setState({comment:event.target.value})
    }
    onUsernameChange=(event)=>{
    	this.setState({username:event.target.value})
    }

    onSubmitComment=()=>{
    	fetch('https://maxferr-api.herokuapp.com/newComment',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				comment_text:this.state.comment,
				username:this.state.username,
				sites_id:this.props.match.params.id,				
				comment_added:new Date()
			})
		}).then(response=>{
			return response.json()
		}).then(commentId=>{
			const error=document.getElementById('errorComment');
			if(this.props.lang==='EN'){
				//if we have a reponse with a comment's id, refresh the updatedComment state (we can see the comment without refreshing the page)
					if(commentId.m_comment_id){
				const resetField=document.getElementsByTagName('textarea')[0];
				resetField.value='';
				fetch(`https://maxferr-api.herokuapp.com/allComment/${this.props.match.params.id}`)
				.then(response=>{			
					return response.json()
				})
				.then(data=>{			
					this.setState({updatedComment:data})				
				})				
					error.style.color="green"
					error.textContent='Comment sent !'
					const nameComment=document.getElementById('nameComment');
					nameComment.value='';

				}else{				
					error.style.color="red"
					error.textContent='Cannot send that comment : comment over 255 char or fields are not filled.'				
				}
			}else{
				//same thing for french erro message (should make a function)
				if(commentId.m_comment_id){
				const resetField=document.getElementsByTagName('textarea')[0];
				resetField.value='';
				fetch(`https://maxferr-api.herokuapp.com/allComment/${this.props.match.params.id}`)
				.then(response=>{			
					return response.json()
				})
				.then(data=>{			
					this.setState({updatedComment:data})				
				})				
					error.style.color="green"
					error.textContent='Commentaire envoyé !'
					const nameComment=document.getElementById('nameComment');
					nameComment.value='';

				}else{				
					error.style.color="red"
					error.textContent=`Impossible d'envoyer ce commentaire : commentaire trop long et/ou les champs ne sont pas completés.`
				}
			}			
		})	
    }
// Faire la meme chose avec this.props.match.params.id et le loading pour yelpcamp, {...props}in the route to use props.params
  render(){  	
    const { classes,lang } = this.props;
    const {updatedComment,updatedSite}=this.state;    
    //hide and show the comment textarea    
    function displayDIV() {
			const x = document.getElementById("myDIV");
			const y = document.getElementById("secondDiv");
			if (x.style.display === "none") {
				x.style.display = "block";
				y.style.marginTop = "0";
			} else {
				x.style.display = "none";
				y.style.marginTop = "0px";
			}
		}
		if(lang==="EN"){
				if(updatedSite.length===0){
					return(
						<div>
						<Paper className={classes.root} elevation={1}>            
				            <Typography className='typoStyle' variant="h5" component="h3">
					              <div>
					              	<p>Loading<span className='loadingDot'>.</span><span className='loadingDot'>.</span><span className='loadingDot'>.</span></p>
					              </div>
				              </Typography>
			             </Paper>
		              	</div>
						) 					
				} else{
					return (
		            <div>           
		          <Paper className={classes.root} elevation={1}>            
		            <Typography className='typoStyle' variant="h5" component="h3">
		              <div>
		              <h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">{updatedSite[0].title} </h3>
		              <img data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800" alt='website' src={updatedSite[0].img} className='imgMoreIStyle' />
		              <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">{updatedSite[0].descritpion} </p>
		              <a id='aStyle' className='animated' style={{display:'block',marginBottom:'10px',marginTop:'40px'}} href={updatedSite[0].link} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><p style={{color:'blue'}}>Try the demo here !</p></a>
		              
		              {updatedSite[0].link_server!==null ?
		              	<div style={{display:'inline-block'}}>		              	
		              	<a id='aStyle' className='animated' href={updatedSite[0].link_git} style={{display:'inline-block',marginRight:'10px'}} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Front-end code</p></a>
		              	<a id='aStyle' className='animated' style={{display:'inline-block'}} data-aos="fade-left" href={updatedSite[0].link_server} data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Back-end code</p></a>
		                </div>
		              :
		              	<a id='aStyle' className='animated' href={updatedSite[0].link_git} style={{display:'inline-block',marginRight:'10px'}} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Front-end code</p></a>
		              }
		                               
		              </div>        
		            </Typography>
		            <hr data-aos="fade-right" className='animated' data-aos-delay="350" data-aos-offset="100" data-aos-duration="800" style={{marginTop:'22px'}}/>
		            <div className='divCommentStyle'>					
								<h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800" className='h3Style animated'>Comments</h3>
								<button className='commentBtn animated'  style={{float:'right',display:'inline-block',marginTop:'22px'}} 
								onClick={displayDIV}
								data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"
								>Add a new comment</button>						
								<div id='myDIV' style={{height:'200px',display:'none'}} >
								<br/>								
									<input
									id='nameComment' 
									type='text' 
									placeholder=' Name'
									className='inputNameComment'									
									onChange={this.onUsernameChange}		
									/>						
									<textarea 
									rows="5" 
									cols="70" 
									style={{height:'80px'}}
									placeholder='Your comment'
									onChange={this.onCommentChange}							
									>
									</textarea>									
									<input
									className='commentBtn' 															
									type='submit'
									value='Submit'
									onClick={this.onSubmitComment}
									/><br/>
									<span id='errorComment'></span>													
									<hr style={{marginTop:'22px'}}/>
								</div>	
							</div>
		               
		          </Paper>
		          <div id='secondDiv'></div>
		          <NewComment param={this.state.param} updatedComment={updatedComment}/>
		        </div>
		      )
			}
		}else{
			if(updatedSite.length===0){
					return <h1>Chargement...</h1>
				} else{
					return (
		            <div>           
		          <Paper className={classes.root} elevation={1}>            
		            <Typography className='typoStyle' variant="h5" component="h3">
		              <div>
		              <h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">{updatedSite[0].title} </h3>
		              <img data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800" alt='website' src={updatedSite[0].img} className='imgMoreIStyle' />
		              <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">{updatedSite[0].description_fr} </p>
		              <a id='aStyle' className='animated' style={{display:'block',marginBottom:'10px',marginTop:'40px'}} href={updatedSite[0].link} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><p style={{color:'blue'}}>Essayer la démo ici !</p></a>
		              
		              {updatedSite[0].link_server!==null ?
		              	<div style={{display:'inline-block'}}>		              	
		              	<a id='aStyle' className='animated' href={updatedSite[0].link_git} style={{display:'inline-block',marginRight:'10px'}} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Front-end code</p></a>
		              	<a id='aStyle' className='animated' style={{display:'inline-block'}} data-aos="fade-left" href={updatedSite[0].link_server} data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Back-end code</p></a>
		                </div>
		              :
		              	<a id='aStyle' className='animated' href={updatedSite[0].link_git} style={{display:'inline-block',marginRight:'10px'}} data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"><img style={{marginBottom:'-25px'}} src={`${github}`} alt="githubIcon"/> <p  style={{color:'blue'}} className='animated' data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800">Front-end code</p></a>
		              }                    
		              </div>        
		            </Typography>
		            <hr data-aos="fade-right" className='animated' data-aos-delay="350" data-aos-offset="100" data-aos-duration="800" style={{marginTop:'22px'}}/>
		            <div className='divCommentStyle'>					
								<h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"  className='h3Style animated'>Commentaires</h3>
								<button className='commentBtn animated '  style={{float:'right',display:'inline-block',marginTop:'22px'}} 
								onClick={displayDIV}								
								data-aos="fade-left" data-aos-delay="350" data-aos-offset="100" data-aos-duration="800"
								>Ajouter un commentaire</button>						
								<div id='myDIV' style={{height:'200px',display:'none'}} >
								<br/>
									<input
									id='nameComment' 
									type='text' 
									placeholder=' Nom' 
									className='inputNameComment'		
									onChange={this.onUsernameChange}		
									/>						
									<textarea 
									rows="5" 
									cols="70" 
									style={{height:'80px'}}
									placeholder='Votre commentaire'
									onChange={this.onCommentChange}							
									>
									</textarea>
									<input
									className='commentBtn' 															
									type='submit'
									value='Envoyer'
									onClick={this.onSubmitComment}
									/><br/>
									<span id='errorComment'></span>													
									<hr style={{marginTop:'22px'}}/>
								</div>	
							</div>
		          </Paper>
		          <div id='secondDiv'></div>
		          <NewComment param={this.state.param} updatedComment={updatedComment}/>
		        </div>
		      )
			}
		}
		
  }
}
MoreInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MoreInfo);




