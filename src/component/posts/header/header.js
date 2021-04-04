import React from 'react';
// import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <HomeIcon className='homeIcon'/>
            </Link>
            <h2 className="h2">Posts Page</h2>
        </div>
    )
}
export default Header