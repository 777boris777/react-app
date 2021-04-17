import React from 'react';
import Post from './post/post';
// import './post/post.css';
import Header from './header/header';
import './posts.css'
import ReactLoading from 'react-loading';

const Posts = (props) => {
    const posts = props.posts.map(esi => {
        return (
            <Post
                id={esi._id}
                userId={esi.userId._id}
                key={esi._id}
                name={esi.userId.name}
                date={esi.date}
                title={esi.title}
                img={esi.userImg}
                content={esi.content}
            />
        )
    })
    if (posts.length > 0) {
        return (
            <div>
                <Header />
                <div className='posts'>
                    {posts}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='posts'>
                <div style={{ marginLeft: '50%', marginTop: '20%' }}>
                    <ReactLoading type='spin' />
                </div>
            </div>
        )
    }

}
export default Posts;