import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import {Link} from "react-router-dom";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,     
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.9) 70%, rgba(0,0,0,0) 100%)',
  },
  titleBarH: {
    '&:hover':{
      textDecoration:'underline'
    }    
  },
  icon: {
    color: 'white',
  },
});
 
 //quick check browser size
const resizeImg=window.innerWidth;    

 class AdvancedGridListFav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      big:'',
      tileData:[],
      updatedTileData:[]
    }    
  } 

  componentDidMount(){
    //fetching data(favorite sites)
    fetch('https://maxferr-api.herokuapp.com/favorite').then(response=>{
          return response.json()
        })
        .then(site=>{          
          this.setState({tileData:site})     
        }) 
        //check the size of the browser     
    if(resizeImg>600){
      this.setState({big:true})
    }else{
      this.setState({big:false})
    }
    //adding an event when the browser change size
    window.addEventListener("resize",function(event){
      const resizeImgSec=window.innerWidth;  
      if(resizeImgSec>600){
        this.setState({big:true})
      }else{
        this.setState({big:false})
      }
    }.bind(this))    
  }
//getting the corresponding site to display in list
  onMoreInfo=(id)=>{
    for (var i = 0; i < this.state.tileData.length; i++) {
        if(this.state.tileData[i].m_sites_id===id){
          this.setState({updatedTileData:this.state.updatedTileData.push(this.state.tileData[i])})        
        }      
    }
    this.props.onMoreInfoUpdate(this.state.updatedTileData)
  }
  
render(){
  const { classes } = this.props; 
  const {big,tileData}=this.state; 
  if(big){
  return (
      <div className={classes.root}>    
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={JSON.parse(tile.featured) ? 2 : 1} rows={JSON.parse(tile.featured) ? 2 : 1}>
              <img src={tile.img} alt={tile.title}/>
              <Link  style={{color:'white'}} to={`/moreinfo/${tile.m_sites_id}`}>
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={                  
                  <IconButton onClick={()=>this.onMoreInfo(tile.m_sites_id)} className={classes.icon}>
                    <AddCircleOutline />
                  </IconButton>                  
                }
                actionPosition="left"
                className={classes.titleBar && classes.titleBarH}
              /></Link>
            </GridListTile>
          ))}
        </GridList>      
      </div>
    );
}else{
  return (
      <div className={classes.root}>    
        <GridList cellHeight={100} spacing={1} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={JSON.parse(tile.featured) ? 2 : 1} rows={JSON.parse(tile.featured) ? 2 : 1}>
              <img src={tile.img} alt={tile.title}/>
              <Link  style={{color:'white'}} to={`/moreinfo/${tile.m_sites_id}`}>
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={                  
                  <IconButton onClick={()=>this.onMoreInfo(tile.m_sites_id)} className={classes.icon}>
                    <AddCircleOutline />
                  </IconButton>                  
                }
                actionPosition="left"
                className={classes.titleBar && classes.titleBarH}
              /></Link>
            </GridListTile>
          ))}
        </GridList>      
      </div>
      );
    }
  }   
}
AdvancedGridListFav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridListFav);