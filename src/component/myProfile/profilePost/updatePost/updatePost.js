import React from 'react';


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
            <div>
                <h2 style={{ margin: '10px' }} >Add something</h2>
                <input
                    id="standard"
                    placeholder="Title"
                    className='editText'
                    type='text'
                    name='title'
                    value={this.state.title}
                    onChange={(v) => this.setState({ title: v.target.value })} />
                <input
                    id="standard-basic"
                    placeholder="post"
                    className='editText'
                    type='text'
                    name='content'
                    value={this.state.content}
                    onChange={(v) => this.setState({ content: v.target.value })} />
                <button type='submit' onClick={() => this.Update(this.state, this.props.id)}>Update Post</button>
            </div>
        );
    }
}

export default UpdatePost;