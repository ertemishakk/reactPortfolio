import React, { useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from './me.png'
import { CardMedia } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

const boxStyle = {
  padding: '15px',
  margin:'20px'
}

const logoStyle={
  height:'100px',
  width:'100px',
  borderRadius:'50%',
  margin:'20px',


}

const btn={
  border:'1px black solid',
  marginTop:'30px',
}

export default function About() {
  const [choice, setChoice] = useState(false);
    return (
      <React.Fragment>
        
            <Grid container  direction="column" justify="center" alignItems="center" style={{height: '92vh', backgroundColor: '#0796BE'}}>
                <Grid  item xs={6} justify="center">
                <Zoom in={choice === false} timeout={1000}>
                  <Card elevation={20} style={boxStyle}>
                    <Grid container justify="center" >
                    <CardMedia style={logoStyle} image={logo}/>
                    </Grid>
                    
                    <CardContent>
                    <Typography variant="h5" align="center" style={{fontFamily: 'Playfair Display', padding: '5px 0px 10px 0px', fontSize: '1.75em'}}>
                    About Me
                    </Typography>
                    <Typography component="p" align="center" style={{fontFamily: 'Roboto Slab', padding: '5px 0px 5px 0px', fontSize: '1em'}}>
                    Hi! I am Ishak. I grew up in the beautiful city of
                    Istanbul. I graduated from CUNY-Baruch College, majored in
                    Computer Information Systems- Information Risk Management and Cyber Security. 
                    I currently live in Melbourne. Do you have a question? <br/>
                    <Button style={btn}>Contact Me</Button>
                    </Typography>
                    </CardContent>
                  </Card>
                  </Zoom>
                </Grid>
                </Grid>
             
            </React.Fragment>
    );
  }
  
  