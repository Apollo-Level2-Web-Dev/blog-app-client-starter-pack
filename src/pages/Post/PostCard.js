import React from 'react';
import './PostCard.css'

const PostCard = () => {
    return (
        <div className='border w-96 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-lg font-bold'>This is post Title</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name</p>
                <p>Date: </p>
            </div>
            <p className='text-sm'>This is Content</p>
        </div>
    );
};

export default PostCard;