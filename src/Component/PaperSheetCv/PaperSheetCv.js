import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './PaperSheetCv.css';
import Devices from '@material-ui/icons/DevicesRounded';
import Explore from '@material-ui/icons/Explore';
import Dns from '@material-ui/icons/DnsRounded';
import Wifi from '@material-ui/icons/WifiRounded';
import Love from '../../img/love.jpg';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,   
    marginTop:'-60px',
    borderRadius:'8px',
    textAlign: 'center',
  },
  iconStyle:{
    fontSize:'60px',
    fill:'white',
    marginTop:'20px'
  }
});

class PaperSheetCv extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
        this.props.ScrollDownCheck(true);
    }
  render(){
    const { classes,lang } = this.props;
    if(lang==='EN'){
      return(
      <Paper className={classes.root} id='paperStyle' elevation={1}>
        <div style={{maxWidth:'1000px',margin:'auto',marginBottom:'100px'}} >    
          <Typography  variant="h5" component="h3" style={{marginTop:'100px',marginLeft:'3%',marginRight:'3%',marginBottom:'125px'}} >
            <Grid container direction="row"  justify="center"  alignItems="center" spacing={8}>
              <Grid item zeroMinWidth md={3} xs={6} >
                <div className='dot flipper fadeIco '>
                <Devices className={classes.iconStyle} classnames="material-icons "></Devices>
                </div>
                <div className=' fade-in fade-in1'>
                <h5>Responsive</h5>
                <p className='pStyle'>My layouts will work on any device, big or small.</p>
                </div>           
              </Grid>
              <Grid item zeroMinWidth md={3}  xs={6}>
                <div className='dot flipper2 fadeIco'>
                <Wifi className={classes.iconStyle} classnames="material-icons "></Wifi>
                </div>
                <div className=' fade-in fade-in2'>
                <h5>Fast</h5>
                <p className='pStyle'>Fast load times and lag free interaction, my highest priority.</p> 
                </div>        
              </Grid>
              <Grid item zeroMinWidth md={3} xs={6}>
                <div className='dot flipper3 fadeIco'>
                <Dns  className={classes.iconStyle} classnames="material-icons "></Dns>
                </div>
                <div className=' fade-in fade-in3'>
                <h5>Dynamic</h5>
                <p className='pStyle'>I love working with servers, it makes the website alive !</p>
                </div>           
              </Grid>
              <Grid item zeroMinWidth md={3} xs={6}>
                <div className='dot flipper4 fadeIco'>
                <Explore className={classes.iconStyle} classnames="material-icons "></Explore>
                </div>
                <div className=' fade-in fade-in4'>
                <h5>Intuitive</h5>
                <p className='pStyle'>Always working on an easy to use UI.</p>
                </div> 
              </Grid>
            </Grid> 
          </Typography>
        <div>
        <Typography  variant="h5" component="h3" style={{marginTop:'100px',marginLeft:'3%',marginRight:'3%'}}>
          <Grid container spacing={24}>        
            <Grid item zeroMinWidth xs={12} md={6}>
            <div data-aos="fade-right"  data-aos-offset="350" data-aos-duration="800" style={{marginTop:'-75px'}} className='animated' >
            <img alt='img' src={`${Love}`} id='imgLove'></img>
            <p>Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
            <p>I possess excellent communication skills and can liaise effectively with both clients and work colleagues. Other strong points include and ability to work as part of a team or individually.</p>
            <p>I can be reached anytime via my <Link to={`/contact`}>email</Link>.</p>            
        </div>
            </Grid>
                <Grid item zeroMinWidth xs={12} md={6} data-aos="fade-left"  data-aos-offset="300" data-aos-duration="800" className='animated' >                  
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="300" > 
                    <div className='tag flex'>Html</div>             
                    </div> 
                    <span>80%</span>            
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill'data-aos="fill-anim3" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="200"> 
                    <div className='tag flex'>Css</div>             
                    </div> 
                    <span>70%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="200"> 
                    <div className='tag flex'>Javascript</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim2" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="100"> 
                    <div className='tag flex'>jQuery</div>             
                    </div> 
                    <span>60%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="100"> 
                    <div className='tag flex'>Reactjs</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="50"> 
                    <div className='tag flex'>Nodejs</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="25"> 
                    <div className='tag flex'>SQL</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                </Grid>
            </Grid>     
        </Typography>
        <Typography  variant="h5" component="h3" style={{marginTop:'50px',marginLeft:'3%',marginRight:'3%'}}>
          <Grid container spacing={24}>        
            <Grid item zeroMinWidth xs={12} md={6}>            
            <h5 data-aos="fade-left"  data-aos-offset="250" data-aos-duration="800" className='animated'>EDUCATION</h5>
            <hr data-aos="fade-right"  data-aos-offset="200" data-aos-duration="800" className='animated'/>
            <div data-aos="fade-right"  data-aos-offset="200" data-aos-duration="800" className='animated' style={{textAlign:'left'}}>
              <ul className='listStyle listStyle2'>
                <li><strong>2012-2017 </strong>: AESI Bachelor in Science at the High School of the City of Liège Teaching category.</li>
                <ul className='listStyle listStyle2'>
                  <li><strong>Title of the graduation work </strong>: <em>Does the use of audiovisual media such as Serious games facilitate the appropriation of fundamental concepts, models or principles, and thus the learning of high school students ?</em> </li>
                </ul>
                <li><strong>2008-2012 </strong>: Training at FDM as a Information Technology Consultant.</li>
                <ul className='listStyle listStyle2'>
                                  <li><strong>Title </strong>: <em>I.T Consultant.</em></li>
                                </ul>
                <li><strong>2007-2008 </strong>: First year of Bachelor in Biology at ULG.</li>
                <li><strong>2001-2007 </strong>: CESS at St-Benoit - St-Servais High School.</li>
              </ul>             
              </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left"  data-aos-offset="250" data-aos-duration="800" className='animated'>PROFESSIONAL EXPERIENCE</h5>
             <hr data-aos="fade-right"  data-aos-offset="200" data-aos-duration="800" className='animated'/>
             <div data-aos="fade-right"  data-aos-offset="200" data-aos-duration="800" className='animated' style={{textAlign:'left'}}>
              <ul className='listStyle listStyle2'>
                <li><strong>2017-2018 </strong>: Science teacher at "l'Institut Marie-Thérèse E.S.T."</li>
                <li><strong>January 2014 - April 2017 </strong>: 10 one-month internships in different schools in the "Liège" region.</li>
                <li><strong>2008-2012 </strong>: Work in England as a Information Technology Consultant.</li>
              </ul> 
            </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left"  data-aos-offset="40" data-aos-duration="800" className='animated'>LANGUAGES AND COMPUTERS</h5>
             <hr data-aos="fade-right"  data-aos-offset="40" data-aos-duration="800" className='animated'/>
             <div data-aos="fade-right"  data-aos-offset="35" data-aos-duration="800" className='animated' style={{textAlign:'left'}}>
             <ul className='listStyle listStyle2'>
                <li><strong>Languages </strong>: French - Mother tongue, English - Bilingual, Dutch - Very good notions.</li>
                <li><strong>Software/Programming languages </strong>: Html,Reactjs,Nodejs,jQuery,(C, C++), Javascript, CSS, Photoshop, Word, Excel, PowerPoint.</li>
             </ul>               
              </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left"  className='animated' data-aos-offset="40" data-aos-duration="800">OTHER INFORMATION</h5>
             <hr data-aos="fade-right"  className='animated' data-aos-offset="40" data-aos-duration="800"/>
             <div data-aos="fade-right"  className='animated' data-aos-offset="35" data-aos-duration="800">             
                <p><strong>Licence </strong>: Driving.</p>                
                </div>
             </Grid>
          </Grid>     
        </Typography>
        </div>
        </div>  
      </Paper>
    )

    }else{
      return(
      <Paper className={classes.root} id='paperStyle' elevation={1}>
        <div style={{maxWidth:'1000px',margin:'auto',marginBottom:'100px'}} >    
          <Typography  variant="h5" component="h3" style={{marginTop:'100px',marginLeft:'3%',marginRight:'3%',marginBottom:'125px'}} >
            <Grid container direction="row"  justify="center"  alignItems="center" spacing={8}>
              <Grid item zeroMinWidth md={3} xs={6} >
                <div className='dot flipper fadeIco '>
                <Devices className={classes.iconStyle} classnames="material-icons "></Devices>
                </div>
                <div className=' fade-in fade-in1'>
                <h5>Réactif</h5>
                <p className='pStyle'>Mes applications fonctionnent sur tous les appareils, grands ou petits.</p>
                </div>           
              </Grid>
              <Grid item zeroMinWidth md={3}  xs={6}>
                <div className='dot flipper2 fadeIco'>
                <Wifi className={classes.iconStyle} classnames="material-icons "></Wifi>
                </div>
                <div className=' fade-in fade-in2'>
                <h5>Rapide</h5>
                <p className='pStyle'>Des temps de chargement rapides et une interaction sans délai, ma plus haute priorité.</p> 
                </div>        
              </Grid>
              <Grid item zeroMinWidth md={3} xs={6}>
                <div className='dot flipper3 fadeIco'>
                <Dns  className={classes.iconStyle} classnames="material-icons "></Dns>
                </div>
                <div className=' fade-in fade-in3'>
                <h5>Dynamique</h5>
                <p className='pStyle'>J'adore travailler avec des serveurs, ça rend le site vivant!</p>
                </div>           
              </Grid>
              <Grid item zeroMinWidth md={3} xs={6}>
                <div className='dot flipper4 fadeIco'>
                <Explore className={classes.iconStyle} classnames="material-icons "></Explore>
                </div>
                <div className=' fade-in fade-in4'>
                <h5>Intuitif</h5>
                <p className='pStyle'>Je travaille toujours sur une interface utilisateur facile à utiliser.</p>
                </div> 
              </Grid>
            </Grid> 
          </Typography>
        <div>
        <Typography  variant="h5" component="h3" style={{marginTop:'100px',marginLeft:'3%',marginRight:'3%'}}>
          <Grid container spacing={24}>        
            <Grid item zeroMinWidth xs={12} md={6}>
            <div data-aos="fade-right"  className='animated' data-aos-offset="350" data-aos-duration="800" style={{marginTop:'-75px'}} >
            <img alt='img' src={`${Love}`} id='imgLove'></img>
            <p>Construire des sites Web et des applications à la pointe de la technologie, faciles à utiliser et conviviaux est une de mes passions et je suis convaincu que je serais un excellent ajout à votre organisation. En plus de ma base de connaissances, je recherche activement de nouvelles technologies et reste au courant des tendances et des progrès de l’industrie.</p>
            <p>Je possède d’excellentes aptitudes à la communication et je peux assurer une liaison efficace avec les clients et les collègues de travail. Parmi les autres points forts, citons la capacité à travailler en équipe ou individuellement.</p>
            <p>Je peux être contacté à tout moment via mon <Link to={`/contact`}>email</Link>.</p>            
        </div>
            </Grid>
                <Grid item zeroMinWidth xs={12} md={6} data-aos="fade-left" className='animated' data-aos-offset="300" data-aos-duration="800" >                  
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="300" > 
                    <div className='tag flex'>Html</div>             
                    </div> 
                    <span>80%</span>            
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill'data-aos="fill-anim3" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="200"> 
                    <div className='tag flex'>Css</div>             
                    </div> 
                    <span>70%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="200"> 
                    <div className='tag flex'>Javascript</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim2" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="100"> 
                    <div className='tag flex'>jQuery</div>             
                    </div> 
                    <span>60%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="100"> 
                    <div className='tag flex'>Reactjs</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="50"> 
                    <div className='tag flex'>Nodejs</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                  <div className='bar flex'>
                    <div className='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="25"> 
                    <div className='tag flex'>SQL</div>             
                    </div> 
                    <span>80%</span>        
                  </div>
                </Grid>
            </Grid>     
        </Typography>
        <Typography  variant="h5" component="h3" style={{marginTop:'50px',marginLeft:'3%',marginRight:'3%'}}>
          <Grid container spacing={24}>        
            <Grid item zeroMinWidth xs={12} md={6}>            
            <h5 data-aos="fade-left"  className='animated' data-aos-offset="250" data-aos-duration="800">FORMATION</h5>
            <hr data-aos="fade-right"  className='animated' data-aos-offset="200" data-aos-duration="800"/>
            <div data-aos="fade-right" className='animated' data-aos-offset="200" data-aos-duration="800" style={{textAlign:'left'}}>
              <ul className='listStyle listStyle2'>
                <li><strong>2012-2017 </strong>: Bachelier AESI en science à la Haute école de la ville de Liège catégorie Pédagogique.</li>
                <ul className='listStyle listStyle2'>
                  <li><strong>Titre du travail de fin d’études </strong>: <em>L'utilisation des moyens audiovisuels tels que les Serious games facilite-t-elle l'appropriation des concepts fondamentaux, des modèles ou des principes et donc de l’apprentissage des élèves du secondaire général dans le degré inférieur ?</em> </li>
                </ul>
                <li><strong>2008-2012 </strong>: Formation chez FDM en tant que consultant en informatique.</li>
                <ul className='listStyle listStyle2'>
                                  <li><strong>Titre </strong>: <em>Consultant en I.T.</em></li>
                                </ul>
                <li><strong>2007-2008 </strong>: Première année de Bachelier en Biologie à l’ULG.</li>
                <li><strong>2001-2007 </strong>: CESS à l’école secondaire St-Benois – St-Servais.</li>
              </ul>             
              </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left" className='animated' data-aos-offset="250" data-aos-duration="800">EXPERIENCE PROFESSIONNELLE</h5>
             <hr data-aos="fade-right" className='animated' data-aos-offset="200" data-aos-duration="800"/>
             <div data-aos="fade-right" className='animated' data-aos-offset="200" data-aos-duration="800" style={{textAlign:'left'}}>
              <ul className='listStyle listStyle2'>
                <li><strong>2017-2018 </strong>: Professeur de sciences à l'Institut Marie-Thérèse E.S.T.</li>
                <li><strong>Janvier 2014 - Avril 2017 </strong>: 10 stages de un mois dans différentes écoles de la région de Liège.</li>
                <li><strong>2008-2012 </strong>: Travail en Angleterre en tant que consultant en informatique.</li>
              </ul> 
            </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left" className='animated' data-aos-offset="40" data-aos-duration="800">LANGUES ET INFORMATIQUE</h5>
             <hr data-aos="fade-right" className='animated' data-aos-offset="40" data-aos-duration="800"/>
             <div data-aos="fade-right" className='animated' data-aos-offset="35" data-aos-duration="800" style={{textAlign:'left'}}>
             <ul className='listStyle listStyle2'>
                <li><strong>Langues </strong>: Français - Langue maternelle, Anglais - Bilingue, Néerlandais – Très bonnes notions.</li>
                <li><strong>Informatique </strong>: Html,Reactjs,Nodejs,jQuery,(C, C++), Javascript, CSS, Photoshop, Word, Excel, PowerPoint.</li>
             </ul>               
              </div>
             </Grid>
             <Grid item zeroMinWidth xs={12} md={6}>
            <h5 data-aos="fade-left" className='animated' data-aos-offset="40" data-aos-duration="800">AUTRES INFORMATIONS</h5>
             <hr data-aos="fade-right" className='animated' data-aos-offset="40" data-aos-duration="800"/>
             <div data-aos="fade-right" className='animated' data-aos-offset="35" data-aos-duration="800">             
                <p><strong>Permis </strong>: Voiture.</p>                
                </div>
             </Grid>
          </Grid>     
        </Typography>
        </div>
        </div>  
      </Paper>
      )
    }   
  }
} 

PaperSheetCv.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheetCv);