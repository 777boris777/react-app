import React from 'react';
import MenuProfile from './menuProfile/menuProfile';
import ContentProfile from './contentProfile/contentProfile';
import './profile.css'


class Profile extends React.Component {
    state = {
        targetUser: {},
        posts: []
    }

    fetchData = async () => {
        const token = localStorage.getItem('token')
        const data = await fetch('https://immense-bastion-77462.herokuapp.com/auth/myProfile', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        const fetchedData = await data.json()
        if (fetchedData.massenge) console.log(fetchedData.massenge);
        else {
            this.setState({
               targetUser: fetchedData
            })
        }
    }

    fetchPosts = async () => {
        const token = localStorage.getItem('token')
        const data = await fetch('https://immense-bastion-77462.herokuapp.com/posts/myPosts', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        const fetchedData = await data.json()
        if (fetchedData.massenge) console.log(fetchedData.massenge);
        else {
            this.setState({
               posts: fetchedData
            })
        }
    }

    componentDidMount() {
        this.fetchData()
        this.fetchPosts()
    }

    render() {
        return (
            <div className='profile'>
                <ContentProfile
                    data={this.state.posts}
                    toggle={this.state.open}
                    open={this.handleOpen}
                    close={this.handleClose}
                />
                <MenuProfile
                    name={this.state.targetUser.name}
                    avatar={this.state.targetUser.profileImg} />
            </div>
        );
    }
}

export default Profile;