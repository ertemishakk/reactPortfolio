import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
const Data=() =>{
    const [posts,setPosts]= useState([]);
    const [loading, setLoading]= useState(false);
    const[currentPage, setCurrentPage]= useState(1);
    const [postsPerPage,setPerPage]= useState(5);

    useEffect(()=>{
        const fetchPosts= async ()=>{
            setLoading(true);
            const res= await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=032a0e3b07624eec81a5556013d9b392');
            setPosts(res.data.articles);
            setLoading(false);
           
          
        }
        fetchPosts();
    },[]);

    
   
    const indexOfLastPost= currentPage * postsPerPage;
    const indexOfFirstPost= indexOfLastPost- postsPerPage;
    const currentPosts= posts.slice(indexOfFirstPost, indexOfLastPost)


    const paginate=(pageNumber)=> setCurrentPage(pageNumber);



    return (
        <div>
            <Posts posts={currentPosts} loading={loading}></Posts> 
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )

}
export default Data;