import React from 'react';
import './profilePosts.css'
import UpdatePost from './updatePost/updatePost';

class ProfilePosts extends React.Component {

  state = {
    open: false,
    data: null
  }


  deletePost = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const data = await fetch(`https://immense-bastion-77462.herokuapp.com/posts/del/${id}`, {
        method: "DELETE",
        headers: {
          'auth-token': token
        }
      })
      console.log(data);
      
      window.location.reload(false);
    }
    catch (error) {
      console.log(error.message)
    }
  }

  render() {
    if (this.props.data.length > 0) {
      const ProfilePosts = this.props.data.map(esi => (
        <div className='ProfilePostsTitle'>
          <button onClick={() => this.setState({ open: true, data: esi })} style={{ width: '8%', height: 10, background: 'green', textAlign: 'center', borderRadius: 10, boxSizing: 'border-box', position: 'relative', left: '80%', outline: 'none' }}><p style={{ marginTop: -7, marginLeft: -7 }}>Edit</p></button>
          <button onClick={() => this.deletePost(esi._id)} style={{ width: '8%', height: 10, background: 'darkred', textAlign: 'center', borderRadius: 10, boxSizing: 'border-box', position: 'relative', left: '82%', outline: 'none' }}><p style={{ marginTop: -7 }}>X</p></button>
          <h5 className='ProfilePostsText' style={{ marginTop: -25 }}>{esi.date}</h5>
          <h3 className='ProfilePostsText' style={{ textAlign: 'center', marginTop: -20 }}>{esi.title}</h3>
          <p className='ProfilePostsText' style={{ textAlign: 'center', marginTop: 0 }}>{esi.content}</p>
        </div>
      ))
      return (
        this.state.open === false ?
          <div className='ProfilePosts'>
            {ProfilePosts}
          </div>
          :
          <div>
            <button onClick={() => this.setState({open: false})} style={{ width: 60, height: 10, background: 'red', textAlign: 'center', borderRadius: 10, boxSizing: 'border-box', position: 'absolute', left: '68%', outline: 'none' }}><p style={{ marginTop: -7 }}>X</p></button>
            <UpdatePost
              title={this.state.data.title}
              content={this.state.data.content}
              id={this.state.data._id}
            />
          </div>
      );
    }
    else {
      return (
        <div className='ProfilePosts'>
          <h3 className='error'>
            You dont have any post
          </h3>
        </div>
      )
    }
  }
}
export default ProfilePosts;