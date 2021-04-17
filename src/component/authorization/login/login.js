import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './login.css'
import Error from '../error'
import { Redirect } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 30')
        .required('required'),
    password: Yup.string()
        .label('Password')
        .min(8, 'Must be more than 8 letters')
        .required('required')
})

class Login extends React.Component {
    state = {
        redirect: false
    }
    login = async (values) => {
        try {
            const data = await fetch('https://immense-bastion-77462.herokuapp.com/auth/signin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            const fetchedData = await data.json()
            console.log(fetchedData);
            localStorage.setItem('token', fetchedData.auth_token)

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/profile' />
        } else {
            return (
                <Formik initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true)
                        this.login(values)
                        resetForm()
                        this.setState({ redirect: true })
                        setSubmitting(false)
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit }) => {
                        return (
                            <form className='form' onSubmit={handleSubmit}>
                                <label htmlFor='email'><b>Email</b></label>
                                <br />
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='Enter email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? "ERRORKA" : null} />
                                <Error touched={touched.email} message={errors.email} />
                                
                                <label htmlFor='password'><b>Password</b></label>
                                <br />
                                <input
                                    id='password'
                                    type='password'
                                    name='password'
                                    placeholder='Enter Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.password && errors.password ? "ERRORKA" : null} />
                                <Error touched={touched.password} message={errors.password} />
                                
                                <br />
                                <button type='submit'>Login</button>
                            </form>
                        )
                    }}
                </Formik>
            );
        }
    }
}

export default Login;