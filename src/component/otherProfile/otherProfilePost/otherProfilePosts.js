import React from 'react';
import './otherProfilePosts.css'

const OtherProfilePosts = (props) => {
  if (props.data.length > 0) {
    const ProfilePosts = props.data.map(esi => (
      <div className='ProfilePostsPost'>
        <p className='ProfilePostsTime'>{esi.date.split("T", 1)}</p>
        <div className='text'>

          <p className='ProfilePostsTitle'>{esi.title}</p>
          <p className='ProfilePostsText'>{esi.content}</p>
        </div>
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