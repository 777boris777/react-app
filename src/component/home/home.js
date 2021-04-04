import React from 'react';
import './home.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Flip from '../authorization/flip';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    state = {
        ponel: false,
        token: null
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        this.setState({ token: token })
    }
    render() {
        return (
            <div className='home'>
                <h2 className='dezaynn'>Welcome</h2>
                {this.state.token ?
                    <div className='profileLink'>
                        <Link to='/profile' style={{ textDecoration: 'none',color: 'black'}}>
                            profile
                        </Link>
                    </div> : <div className={this.state.ponel ? 'koxicHelnox' : 'koxMtnox'}>
                        <Flip />
                        <div onClick={() => this.setState({ ponel: !this.state.ponel })} className='log'><p>Login/Registrate</p></div>
                    </div>}
                <div className='bgImage'>
                    <Link to='/posts' className='homicPoster'>
                        <KeyboardArrowRightIcon style={{width: '150px', height: '150px',}} /> 
                        <p style={{margin: '0', marginTop: '-40px'}}>posts</p>
                    </Link>
                </div>
            </div>
        );
    }
}
/*style={{ width: '80%', height: '100%' }} */
export default Home;