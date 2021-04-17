import React from 'react';
import './updatePost.css'


class UpdatePost extends React.Component {

    state = {
        title: '',
        content: ''
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            content: this.props.content
        })
    }

    Update = async (values, id) => {
        if (this.state.title !== '' && this.state.content !== '') {
            try {
                const token = localStorage.getItem('token');
                const data = await fetch(`https://immense-bastion-77462.herokuapp.com/posts/update/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token
                    },
                    body: JSON.stringify(values)
                })
                const fetchedData = await data.json()
                if (fetchedData.message) {
                    this.setState({ error: fetchedData.message })
                }
                else {
                    console.log(fetchedData);
                    window.location.reload(false);
                }
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
    render() {
        return (
            <div className='modalWrap'>
                <h2 style={{ margin: '10px' }} >Edit</h2>
                <input
                    id="standard"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(v) => this.setState({title: v.target.value})}
                    className='editText' />
                <input
                    id="standard-basic"
                    value={this.state.content}
                    onChange={(v) => this.setState({content: v.target.value})}
                    placeholder="post"
                    className='editText' />
                <button type="submit" onClick={() => this.Update(this.state, this.props.id)}>Update Post</button>
            </div>
        );
    }
}

export default UpdatePost;


/*import React from 'react';
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

  
}

export default AddProfilePost; */