import React from 'react';
import './otherProfilePosts.css'
 
const OtherProfilePosts = (props) => {
  if (props.data.length > 0) {
    const ProfilePosts = props.data.map(esi => (
      <div className='ProfilePostsTitle'>
        <h5 className='ProfilePostsText'>{esi.date}</h5>
        <h3 className='ProfilePostsText' style={{ textAlign: 'center'}}>{esi.title}</h3>
        <p className='ProfilePostsText' style={{ textAlign: 'center'}}>{esi.content}</p>
      </div>
    ))
    return (
      <div className='ProfilePosts'>
        {ProfilePosts}
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

export default OtherProfilePosts;