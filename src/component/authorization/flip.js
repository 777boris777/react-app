import React, { useState } from 'react';
import Login from './login/login';
import SignUp from './signup/signup';
import './flip.css'


const Flip = () => {
    const [anim, setAnimation] = useState(false)
    return (
        <div className='flip'>
            <button onClick={() => setAnimation(!anim)} >{anim ? "Login->":"<-Signup"}</button>
            <div className={anim ? ['flip-card-inner', 'anim'].join(' ') : 'flip-card-inner'}>
                <div className='login'>
                    <Login />
                </div>
                <div className='signup'>
                    <SignUp />
                </div>
            </div>
        </div>

    );
}

export default Flip;