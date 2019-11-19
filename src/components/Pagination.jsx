import React from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
const Pagination = ({postsPerPage,totalPosts, paginate}) => {

    const pageNumbers=[];
    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }




    return (
        <div  className='mx-2 py-4   text-center'>
            {pageNumbers.map(number=>(
                
                 <a  href="#" className='mx-2 border p-3' style={{color:'white', marginleft:'50%'}} onClick={()=> paginate(number)}>{number}</a>
 
            ))}
        </div>
    )
}
export default Pagination;