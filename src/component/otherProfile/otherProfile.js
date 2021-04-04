import React from 'react';
import MenuOtherProfile from './menuOtherProfile/menuOtherProfile';
import ContentOtherProfile from './contentOtherProfile/contentOtherProfile';
import './otherProfile.css'
import ReactLoading from 'react-loading';


class Profile extends React.Component {
    state = {
        data: []
    }

    fetchData = async () => {
        try {
            const data = await fetch(`https://immense-bastion-77462.herokuapp.com/posts/profile/${this.props.match.params.id}`)
            const fetchedData = await data.json()
            this.setState({ data: fetchedData })
            console.log(this.state.data[0].userName)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {
        if (this.state.data.length > 0) {
            return (
                <div className='profile'>
                    <ContentOtherProfile
                        data={this.state.data}
                        toggle={this.state.open}
                        open={this.handleOpen}
                        close={this.handleClose}
                    />
                    <MenuOtherProfile
                        name={this.state.data[0].userName}
                        avatar={this.state.data[0].userImg} />
                </div>
            );
        }
        else {
            return (
                <div className='profile'>
                    <div style={{ marginLeft: '50%', marginTop: '20%' }}>
                        <ReactLoading type='spin' />
                    </div>
                </div>
            )
        }
    }
}

export default Profile;