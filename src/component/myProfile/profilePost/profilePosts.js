import React from 'react';
import './profilePosts.css'
import UpdatePost from './updatePost/updatePost';
import SimpleModal from '../../UI/model/model';

class ProfilePosts extends React.Component {
  state = {
    open: false,
    data: null,
    edit: {}
  }
  handleClose = () => {
    this.setState({ open: false })
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
        <div className='ProfilePostsPost'>
          <button style={{ background: '#0b990b' }}
            onClick={() => this.setState({ open: true, data: esi })}
            className='button' >
            <p>Edit</p>
          </button>
          <button style={{ background: '#db2121' }}
            onClick={() => this.deletePost(esi._id)}
            className='button'>
            <p>X</p>
          </button>
          <p className='ProfilePostsTime' >{esi.date.split("T",1)}</p>
          <div className='text' >
            <p className='ProfilePostsTitle' >{esi.title}</p>
            <p className='ProfilePostsText' >{esi.content}</p>
          </div>
          {/* <table>
            <tr>
              <td><p className='ProfilePostsTitle' >{esi.title}</p></td>
              <td><p className='ProfilePostsText' >{esi.content}</p></td>
            </tr>
          </table> */}
        </div>))
      return (
        <div className='ProfilePosts'>
          {ProfilePosts}
          {this.state.data ?
            <SimpleModal
              handleClose={this.handleClose}
              open={this.state.open}
              body={<UpdatePost
                title={this.state.data.title}
                content={this.state.data.content}
                id={this.state.data._id}
              />} /> : null}
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


