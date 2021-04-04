import React from 'react';
import './addProfilePost.css'
class AddProfilePost extends React.Component {
    state = {
        error: null,
        title: '',
        content: ''
    }

    add = async() => {
        try {
            const token = localStorage.getItem('token')
            const data = await fetch('https://immense-bastion-77462.herokuapp.com/posts/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token
                },
                body: JSON.stringify({ title: this.state.title, text: this.state.content })
            })
            const fetchedData = await data.json()
            if (fetchedData.message) {
                this.setState({error: fetchedData.message})
            }
            else{
                console.log(fetchedData);
                this.setState({
                    title: '',
                    content: ''
                })
                window.location.reload(false);
            }
        } catch (error) {
            this.setState({error: 'Try again'})
        }
    }

    render() {
        return (
            <div className='modalWrap'>
                <h2 style={{ margin: '10px' }} >Add something</h2>
                <input
                    id="standard"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(v) => this.setState({title: v.target.value})}
                    className='textField' />
                <input
                    id="standard-basic"
                    value={this.state.content}
                    onChange={(v) => this.setState({content: v.target.value})}
                    placeholder="post"
                    className='textField' />
                <button type="submit" onClick={() => this.add()}>Upload Post</button>
            </div>
        );
    }
}

export default AddProfilePost;