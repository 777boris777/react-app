import React from 'react';
import { Avatar } from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';
import { Link } from 'react-router-dom';
import './menuOtherProfile.css'
const MenuProfile = (props) => {
    return (
        <div className='menuProfile'>
            <div className='AvatarWrap'>
                <Avatar
                    className='bgAvatar'
                    src={props.avatar}
                />
                <p className='userName'>{props.name}</p>
            </div>
            <br />
            <div className='menuBar'>
                <div className='postsLink'>
                    <Link to='/posts'>
                        <SubjectIcon className='iconClass' fontSize='large' />
                    </Link>
                    <p className='LinkTo'>Posts</p>
                </div>
            </div>
        </div>
    );
}

export default MenuProfile;