import React from 'react';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Paper from '@material-ui/core/Paper';
import './CommentCard.css';
import Moment from 'react-moment';
AOS.init({disable: 'mobile'});


const CommentCard=({comment,username,date,id})=>{
	return (
		<div> 
				<Paper data-aos="fade-right" data-aos-delay="300" data-aos-offset="100" data-aos-duration="800" style={{borderRadius:'8px',maxWidth:'750px',margin:'auto',minHeight:'100px'}} elevation={1}>
					<Typography className='typoStyle' variant="h5" component="h3">
						<div>
							<div>
								<p className='alignComOne'><strong>{username}</strong></p>
								<div className='backrndP'>
								<p className='alignComTwo'><em>{comment}</em></p>
								<p className='alignComTwo' style={{opacity:'0.8',marginTop:'-15px'}}><em><Moment fromNow>{date}</Moment></em></p>
								</div>								
							</div>
						</div>		
					</Typography>
				</Paper>
			</div>
		)	
}

export default CommentCard;