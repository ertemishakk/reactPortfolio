import React from 'react'
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link'
import { Card, CardActionArea, CardContent } from '@material-ui/core';

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading</h2>
    }
    return (
      <Grid  style={{padding:'25px'}}>
          <Box textAlign='center' style={{color:'white'}}>
          <Typography variant="h3">
              Daily News
          </Typography>
          </Box>
          
           {posts.map(post=>(
          <Card style={{padding:'25px', margin:'25px'}}>
              <CardContent >
                  <Box  textAlign='center' >
              <Typography variant="h5" component="h2">
                {post.title}
          </Typography>
          </Box>
          <Box  textAlign='center' >
              <Typography variant="caption">
                Author: {post.author}
          </Typography>
          </Box>
              </CardContent>
              <CardActionArea>
              <CardMedia component="img"  
               image={post.urlToImage} style={{padding:'20px'}} >
              </CardMedia>
        <CardContent>
        <Box  textAlign='center' >
          <Typography variant="h6" component="h2">
         {post.description} 
          </Typography>
          </Box>
        </CardContent>
              </CardActionArea>
              <CardActions >
              <Link  href={post.url}>Read More</Link>
              </CardActions>
          </Card>
  
            ))}


     </Grid>  
    );
};
export default Posts;