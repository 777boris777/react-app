import React from 'react';
import { Avatar } from '@material-ui/core'
import './post.css'
// import LearnMore from '../../UI/learnMore/learnMore';
import { Link } from 'react-router-dom';
const Post = (props) => {
    return (
        <div className="post">
            <div className="avatar">
                <Link to={'/guest/' + props.userId} style={{ textDecoration: 'none' }}>
                    <Avatar className='Avatar' src={props.img}>{props.name.charAt(0)}</Avatar>
                </Link>
            </div>
            <div className='postContent'>
                <div className="posthead">
                    {/* <div className="info"> */}
                    <p className="infop">{props.name.split("@", 1)}</p>
                    <p className="infop">{props.date.split("T",1)}</p>
                    {/* </div> */}
                </div>
                <div className="posttext">
                    <p className="postTitle">{props.title}</p>
                    <p className="postP">{props.content}</p>
                    {/*<LearnMore title/>
                    <div className="postfooter">
                    </div> */}
                </div>
            </div>

        </div>
    );

}
export default Post;