import React, { useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';



const boxStyle = {
  backgroundColor: '#ffffff',
  padding: '15px',
}

export default function Home() {
  const [choice, setChoice] = useState(false);
    return (
      <React.Fragment>
        
            <Grid container direction="column" spacing={40} justify="center" alignItems="center" style={{height: '87vh', backgroundColor: '#0796BE'}}>
                <Grid item xs='auto'>
                  <Fade in={choice === false} timeout={1000}  >
                   
                <Paper style={boxStyle} elevation={20}>
                    <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                    Junior Front End Developer
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    HTML | CSS | JavaScript
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    React | Material-UI | Bootstrap 
                    </Typography>
                </Paper>
               
                </Fade>
                <Slide direction="up" in={choice === false} timeout={1000}>
                
                <Button  href='/about' style={{color:'white', border:'1px solid white', marginTop:'20px'
              ,marginLeft:'72px'}} elevation={20}>Learn More About Me</Button>
            
              </Slide>
                </Grid>
                </Grid>
             
            </React.Fragment>
    );
  }
  
  