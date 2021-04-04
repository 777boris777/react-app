import React from 'react';
import { Avatar } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddProfilePost from './addProfilePost/addProfilePost';
import SimpleModal from '../../UI/model/model';
import SubjectIcon from '@material-ui/icons/Subject';
import { Link, Redirect } from 'react-router-dom';
import './menuProfile.css'
const MenuProfile = (props) => {
    const [open, setOpen] = React.useState(false)
    const [redirect, setRedirect] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const body = <AddProfilePost />
    if (redirect) {
        return <Redirect to='/' />
    }
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
                <div className='add'>
                    <AddCircleOutlineIcon className='iconClass' color='black' onClick={handleOpen} />
                    <p className='LinkTo'>Add Post</p>
                </div>
                <div className='postsLink'>
                    <Link to='/posts'>
                        <SubjectIcon className='iconClass' fontSize='large' />
                    </Link>
                    <p className='LinkTo'>Posts</p>
                </div>
                <button onClick={() => {
                    localStorage.removeItem('token')
                    console.log("token");
                    setRedirect(true)
                }} className='buttonLogout'>Log Out</button>
                <SimpleModal
                    handleClose={handleClose}
                    open={open}
                    body={body} />
            </div>
        </div>
    );
}

export default MenuProfile