import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './signup.css'
import { Redirect } from 'react-router-dom';
import Error from '../error'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 30')
        .required('required'),
    password: Yup.string()
        .min(8, 'Must be more than 8 letters')
        .required('required'),
    name: Yup.string()
        .required('required')
        .label('Name'),
    lastName: Yup.string()
        .required('required')
        .label('LastName'),
    confirmPassword: Yup.string()
        .required('required')
        .label('Confirm password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    // .test('passwords-match', 'Passwords must match ya fool', (value) => {
    //     return this.parent.password === value;
    // }),
})
//     iconFile: Yup.mixed()
//         .test('fileSize', "File Size is too large", value => value.size <= fileSize)
//         .test('fileType', "Unsupported File Format", value => format.includes(value.type))

// const fileSize='120mb';
// const format = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

class SignUp extends React.Component {
    state = {
        redirect: false
    }
    signUp = async (values) => {
        try {
            const data = await fetch('https://immense-bastion-77462.herokuapp.com/auth/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/profile' />
        } else {
            return (
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '', name: '', lastName: '', profileImg: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true)
                        this.signUp(values)
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
                        handleSubmit }) => (
                            <form className="form" onSubmit={handleSubmit}>
                                <label htmlFor="text"><b>Name</b></label>
                                <br />
                                <input
                                    id="text"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={touched.name && errors.name ? 'ERRORKA' : null} />
                                <Error touched={touched.name} message={errors.name} />

                                <label htmlFor="text"><b>Last Name</b></label>
                                <br />
                                <input
                                    id="text"
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    className={touched.lastName && errors.lastName ? 'ERRORKA' : null} />
                                <Error touched={touched.lastName} message={errors.lastName} />

                                <label htmlFor="email"><b>Email</b></label>
                                <br />
                                <input
                                    id="text"
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? 'ERRORKA' : null} />
                                <Error touched={touched.email} message={errors.email} />
                                
                                <label htmlFor="password"><b>Password</b></label>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.password && errors.password ? 'ERRORKA' : null} />
                                <Error touched={touched.password} message={errors.password} />

                                <label htmlFor="Confirm Password"><b>Confirm Password</b></label>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className={touched.confirmPassword && errors.confirmPassword ? 'ERRORKA' : null} />
                                <Error touched={touched.confirmPassword} message={errors.confirmPassword} />

                                <label htmlFor="profileImg"><b>Image</b></label>
                                <br />
                                <input
                                    type="text"
                                    // placeholder=""
                                    name="profileImg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.profileImg}
                                    className={touched.profileImg && errors.profileImg ? 'ERRORKA' : null} />
                                <br />
                                <button type="submit">Sign Up</button>
                            </form>
                        )}
                </Formik>
            );
        }
    }
}

export default SignUp;