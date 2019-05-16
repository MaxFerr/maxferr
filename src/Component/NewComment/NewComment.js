import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommentCard from '../CommentCard/CommentCard.js'

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

class NewComment extends React.Component{  
// Faire la meme chose avec this.props.match.params.id et le loading pour yelpcamp, {...props}in the route to use props.params
//loop threw updatedComment and give commentCard props to display those comment
  render(){  	    
    const comLoop=this.props.updatedComment.map((data,i)=>{
    	return (
    			<CommentCard
    			key={i}
				comment={data.comment}
				username={data.username}
				date={data.comment_added}				
				id={data.m_comment_id}
    			/>
    		)
    })    
			return (
				<div>
				{comLoop}
				</div>				
      )	
  }
}
NewComment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewComment);
