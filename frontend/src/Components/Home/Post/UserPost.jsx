import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom';
import PostCard from './PostCard';

const UserPost = () => {
 
  useEffect(()=>{
    fetchYourPost();
  },[]);

  const [yourPost,setYourPost]=useState([]);
  const usertoken=localStorage.getItem('token');

  const fetchYourPost=async()=>{
    try{
      const userResponse=await axios.get('http://localhost:3000/auth/current-user',{
        headers:{
        Authorization:`Bearer ${usertoken}`,
        }
      });
      const username=userResponse.data.username;

      const response=await axios.get(`http://localhost:3000/protected/posts/user/${username}`,{
        headers:{
          Authorization:`Bearer ${usertoken}`,
        }
      });

      setYourPost(response.data);
    }catch(err){
      console.error("error fetching user posts",err);
    }
  }

  const handleDeletePost = async (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');

    if (!confirmDelete) {
      return; 
    }

    try {
      const response = await axios.delete(`http://localhost:3000/protected/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 204) {
        await fetchYourPosts();
      } else {
        console.error('Error deleting post. Unexpected response:', response);
        alert('An unexpected error occurred while deleting the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('An error occurred while deleting the post.');
    }
  };

  return (
    <div>
    <div>
    {yourPost.map((post)=>{
      <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
            <Link key={post._id} to={`/post/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <PostImage image={post.image} altText={`Post ${post._id}`} />
            <p>{post.description}</p>
            </Link>
            <button onClick={() => handleDeletePost(post._id)}>Delete Post</button>
          </div>
    })}</div>
    </div>
  )
}

export default UserPost