import React, { useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import Zoom from '@material-ui/core/Zoom';
import PG from './pg.png'
import PG1 from './pg1.png'
import PG2 from './pg2.png'




const cardStyle = {
  margin: '25px',
  padding:'10px'
}


export default function Portfolio() {
    const [choice, setChoice] = useState(false);

    return (
  
      <Grid xs="auto" container justify="center" alignItems="center" direction="row" id='projects' style={{backgroundColor: '#0796BE' }}>
      <Grid item xs={12}>
          <Typography variant="h3" component="h3" align="center" style={{fontFamily: 'Roboto Slab', fontSize: "2em", padding: "20px 0px 20px 0px", color: '#ffffff'}}>
          <span>Projects</span><br/>
         
          </Typography>
      </Grid>
      <Zoom in={choice === false} timeout={500} >
      <Grid item xs='auto' style={cardStyle}>
          <Card elevation={20} style={{width: '250px', height: '250px'}}>
              <CardActionArea href="https://ertemishakk.github.io/passwordGeneratorUsingJS/" target="_blank" rel="noreferrer">
                  <CardMedia
                  // style={{ height: '100px', width: '100%'}}
                  // image={bootstrapImage}
                  // title="Bootstrap"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Old portfolio
                  </Typography>
                  <Typography component="p">
                  My first portfolio website using Bootstrap
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions >
                  <Button  style={{marginTop:'80px',marginLeft:'80px', color:'black'}} size="small" color="primary" href="https://ertemishakk.github.io/resume/" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                  </Button>
              </CardActions>
          </Card>
      </Grid>
      </Zoom>
      <Zoom in={choice === false} timeout={500} style={{ transitionDelay:'200ms'}}>
      <Grid item xs='auto' style={cardStyle} >
          <Card elevation={20} style={{width: '250px', height: '250px'}}>
              <CardActionArea href="https://ertemishakk.github.io/passwordGeneratorUsingJS/" target="_blank">
                  <CardMedia
                   style={{ height: '100px', width: '100%', index:'1'}}
                   image={PG}
                  />
                  <CardContent  >
                  <Typography gutterBottom variant="h5" component="h2">
                     PassWord Generator  
                  </Typography>
                  <Typography component="p">
                      Random password generator created using Vanilla JS
                  </Typography>
                
                  </CardContent>
              </CardActionArea>
             
          </Card>
      </Grid>
      </Zoom>

      <Zoom in={choice === false} timeout={500} style={{ transitionDelay:'300ms'}}>
      <Grid item xs='auto' style={cardStyle}>
          <Card elevation={20} style={{width: '250px', height: '250px'}}>
              <CardActionArea href="https://ertemishakk.github.io/snowflake/" target="_blank">
                  <CardMedia
                style={{ height: '100px', width: '100%'}}
                image={PG1}
              
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Snow Flake
                  </Typography>
                  <Typography component="p">
                      Christmas Clock
                  </Typography>
                  </CardContent>
              </CardActionArea>
         
          </Card>
      </Grid>

      </Zoom>


  <Zoom in={choice === false} timeout={500} style={{ transitionDelay:'400ms'}}>
      <Grid item xs='auto' style={cardStyle}>
          <Card elevation={20} style={{width: '250px', height: '250px'}}>
              <CardActionArea href="https://ertemishakk.github.io/weight-converter-bootstrap/" target="_blank">
                  <CardMedia
                  style={{ height: '100px', width: '100%'}}
                  image={PG2}
                
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Weight Converter
                  </Typography>
                  <Typography component="p">
                     Convert weight using JS, designed by Bootstrap
                  </Typography>
                  </CardContent>
              </CardActionArea>
             
          </Card>
      </Grid>
</Zoom>

<Zoom in={choice === false} timeout={500} style={{ transitionDelay:'500ms'}}>
      <Grid item xs='auto' style={cardStyle}>
          <Card elevation={20} style={{width: '250px', height: '250px'}}>
              <CardActionArea href="https://github.com/ertemishakk/frozie" target="_blank">
                  <CardMedia
                  // style={{ height: '100px', width: '100%'}}
                  // image={reactImage}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Frozie
                  </Typography>
                  <Typography component="p">
                      Organic Frozen Fruits and Vegetables Website
                  </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
              <Button  style={{marginTop:'80px',marginLeft:'80px', color:'black'}} size="small" color="primary" href="https://github.com/ertemishakk/frozie" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                  </Button>
              </CardActions>
          </Card>
      </Grid>
</Zoom>


      
     
  </Grid>
);
}

  
  