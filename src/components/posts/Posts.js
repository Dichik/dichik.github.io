import React from 'react';
import './Posts.css';

const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post.",
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the content of the second post.",
    },
    {
        id: 3,
        title: "Third Post",
        content: "This is the content of the second post.",
    },
];

function Posts() {
    return (
        <div className='posts-container'>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;
