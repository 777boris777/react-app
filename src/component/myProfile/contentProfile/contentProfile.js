import React from 'react';
import ProfilePosts from '../profilePost/profilePosts';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './contentProfile.css'
const ContentProfile = (props) => {
    return (
        <div className='contentProfile'>
            <div className='myContent'>
                <Link to='/'>
                    <HomeIcon className='homeIcon' />
                </Link>
                <h2 className='headerContent'>My Posts</h2>
            </div>

            <div className='content'>
                <ProfilePosts
                    data={props.data} />
            </div>
        </div>
    );
}

export default ContentProfile;


