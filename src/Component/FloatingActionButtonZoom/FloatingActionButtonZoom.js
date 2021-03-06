import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import AdvancedGridList from '../AdvancedGridList/AdvancedGridList.js';
import PaletteIcon from '@material-ui/icons/Palette';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AdvancedGridListFav from '../AdvancedGridListFav/AdvancedGridListFav.js';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',    
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',    
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme,lang,onMoreInfoUpdate } = this.props;
    const {value}=this.state;

    if(lang==='EN'){
      return (
      <div className={classes.root} >
        <AppBar position="static" color="default" style={{maxWidth:'500px',display: 'block',marginLeft: 'auto',  marginRight: 'auto'}}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"            
          >
           <Tab icon={<PaletteIcon />} label="Work"/>
          <Tab  icon={<FavoriteIcon />} label="Favorite" />            
          </Tabs>
        </AppBar>
        <SwipeableViews
          style={{maxWidth:'700px',display: 'block',marginLeft: 'auto',  marginRight: 'auto'}}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
         <AdvancedGridList onMoreInfoUpdate={onMoreInfoUpdate}/>
         </TabContainer>
          <TabContainer dir={theme.direction}>
          <AdvancedGridListFav onMoreInfoUpdate={onMoreInfoUpdate}/>
          </TabContainer>          
        </SwipeableViews>        
      </div>
    );
    } else{
      return (
      <div className={classes.root} >
        <AppBar position="static" color="default" style={{maxWidth:'500px',display: 'block',marginLeft: 'auto',  marginRight: 'auto'}}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"            
          >
           <Tab icon={<PaletteIcon />} label=" Mon travail"/>
          <Tab  icon={<FavoriteIcon />} label="Mes préférés" />            
          </Tabs>
        </AppBar>
        <SwipeableViews
          style={{maxWidth:'700px',display: 'block',marginLeft: 'auto',  marginRight: 'auto'}}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
         <AdvancedGridList onMoreInfoUpdate={onMoreInfoUpdate}/>
         </TabContainer>
          <TabContainer dir={theme.direction}>
          <AdvancedGridListFav onMoreInfoUpdate={onMoreInfoUpdate}/>
          </TabContainer>          
        </SwipeableViews>        
      </div>
      );
    } 
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);