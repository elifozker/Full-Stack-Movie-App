import React from 'react'
import { ToggleButton } from '@material-ui/lab';
import {ToggleButtonGroup} from '@material-ui/lab';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"white",   
    borderRadius: 3,
    color: 'black',
    height: 38,
    width:'100%',
    margintop: '1000px',
  },
  toggle:{
    fontfamily: 'Courier New',
    border:"3",
    borderRadius: 3,
    borderColor:"black",
    color: 'black',
    marginbottom: '100px',
    padding: '15px 10px !important',
  }
});


const MainCategory = ({options, value, selectToggle,FilteronClick}) => {
  const classes = useStyles();

  return (
    <ToggleButtonGroup onClick={FilteronClick} className={classes.root} value={value} onChange={selectToggle}  exclusive>
      {options.map(({genreTitle, idgenre}) => <ToggleButton  className={classes.toggle} value={genreTitle} key={idgenre}>{genreTitle}</ToggleButton>)}
      <ToggleButton className={classes.toggle} value="all" key="y">All</ToggleButton>
      
    </ToggleButtonGroup>
  )
}

export default MainCategory
