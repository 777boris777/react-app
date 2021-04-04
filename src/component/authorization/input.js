import React from 'react';
import Error from './error'
const Input = (name, handleChange, handleBlur, values, touched, errors, arjeq) => {
    arjeq = name == "email" ? email : password;
    return (
        <div>

            <label htmlFor={name}><b>{name}</b></label>
            <input
                id={name}
                type={name}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.arjeq}
                className={touched.arjeq && errors.arjeq ? "ERRORKA" : null} />
            <Error touched={touched.arjeq} message={errors.arjeq} />
        </div>
    );
}

export default Input;