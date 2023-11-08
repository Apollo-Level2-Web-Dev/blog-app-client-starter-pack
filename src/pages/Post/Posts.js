import React from 'react';
import PostCard from './PostCard';

const Posts = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-4 pb-4'>Posts</h1>
            <hr />
            <PostCard></PostCard>
        </div>
    );
};

export default Posts;