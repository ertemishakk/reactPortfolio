  import React, { useState} from 'react';
  import Toolbar from '@material-ui/core/Toolbar';
  import AppBar from '@material-ui/core/AppBar';
  import Typography from '@material-ui/core/Typography';
  import IconButton from '@material-ui/core/IconButton';
  import InputBase from '@material-ui/core/InputBase';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import CodeIcon from '@material-ui/icons/Code';
  import MenuList from '@material-ui/core/MenuList';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  import MoreVertIcon from '@material-ui/icons/MoreVert';
  import { createStyles, makeStyles } from '@material-ui/core/styles';






 

const textStyle = {
  color: 'black',
  flex: 1,
  fontSize: '1.3em',
  marginLeft:'25px',
};


const useStyles = makeStyles((theme) =>
  createStyles({
    inputInput: {
      border:'1px solid black',
      borderRadius:'20px',
      padding: theme.spacing(1, 1, 1, 1),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200
        }
      }}
  }))



  export default function NavigationBar() {
    const classes = useStyles();
    const [open, setOpen]= useState(null);

    const handleClick =(e)=>{
        setOpen(e.currentTarget)

    }
    const handleClose = () => {
      setOpen(null);
    };
    

    const menuStyle={
     marginTop:'35px',
    }

    const buttonStyle = {
      color: 'black',
      margin: "10px",
  }
  

    return (
    
        <div>

        <AppBar position="static" elevation={20} style={{backgroundColor: 'white'}} >
        <Toolbar>
              <Typography style={textStyle}><CodeIcon/></Typography>
              <InputBase placeholder="Search…" classes={{input:classes.inputInput}} />

              <Link to="/" style={buttonStyle}  >Home</Link>
              <Link to="/about" style={buttonStyle}>About</Link>
              <Link to="/portfolio" style={buttonStyle} >Portfolio</Link>
             
              <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon/>
               </IconButton>
              
              
              <Menu anchorEl={open} open={open} style={menuStyle}  onClose={handleClose}>
              <MenuList>
                <MenuItem><Link to="/news" style={buttonStyle}>Daily News</Link></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
              </MenuList>
              </Menu>
             
          </Toolbar>
      </AppBar>

          
        </div>
     
     
    );
  }
  

