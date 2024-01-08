import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostImage from './PostImage';
const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/protected/posts/${postId}`);
        const fetchedPost = response.data;
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post details:', error.message);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <div>
      <h1>Post Details</h1>
      {post ? (
        <div>
          <PostImage image={post.image} altText={`Post ${post._id}`} />
                <p>{post.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;