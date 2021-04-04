import React from 'react';
import OtherProfilePosts from '../otherProfilePost/otherProfilePosts';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './contentOtherProfile.css'
const ContentOtherProfile = (props) => {
    return (
        <div className='contentProfile'>
            <div className='myContent'>
                <Link to='/'>
                    <HomeIcon className='homeIcon' />
                </Link>
                <h2 className='headerContent'>Posts</h2>
            </div>
            <div className='content'>
                <OtherProfilePosts
                    data={props.data} />
            </div>
        </div>
    );
}

export default ContentOtherProfile;
