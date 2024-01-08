import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
 
 const navigate=useNavigate();
 const usertoken=localStorage.getItem('token');
 const [newPost,setNewPost]=useState({
  image: null,
  description:'',
 })


 const handleInputChange=(e)=>{
  const {name,value}=e.target;
  setNewPost((prev)=>({
    image:prev.image,
    description:value,
  }))
 }

 const handleFileChange=(e)=>{
  const file=e.target.files[0];
  setNewPost((prev)=>({
    description:prev.description,
    image:file,
  }));
 }
 console.log(newPost);

 const handleCreatePost=async()=>{
      if(!usertoken){
         alert('Please signuin/signup to create a post');
         navigate('/signin');
         return;
      }
      if(!newPost.description || !newPost.image){
        alert('Please provide both text and image');
        return;
      }

      try{
        const formData=new FormData();
        formData.append('description',newPost.description);
        formData.append('image',newPost.image);

        const response=await axios.get('http://localhost:3000/auth/current-user',{
          Authorization:`Bearer ${usertoken}`,
        })
        const username=response.data.username;
        formData.append('username',username);

        const resp=await axios.post('http://localhost:3000/protected/posts',formData,{
          headers:{
          'Content-Type':'multipart/form-data',
           Authorization:`Bearer ${usertoken}`,
          }
        });
        console.log(resp);
        alert("post saved successfully");

        setNewPost({
          image:null,
          description:'',
        })
      }catch(err){
          console.error('error creating post',err);
          alert("an error occured while creating post");
      }
 };

  return (
    <div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

  
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Upload image url</label>
  <br></br><input type="file" name='image' accept='image/*' onChange={handleFileChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter the description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleInputChange}></textarea>
</div>
 <div><button onClick={handleCreatePost}>Submit</button></div>
    </div>
  )
}

export default CreatePost