import React from 'react';
import { Formik, Form, ErrorMessage, Field, validateYupSchema } from 'formik';
import axios from 'axios';

const contactUrl = `https://mariam-portfolio-backend.herokuapp.com/api/contact`

const initialValue = {
    name: '',
    email: '',
    message: ''
}

export default function Contact () {
    const onSubmitButton = ( formValues, action) => {
        const toLogin = {
            name: formValues.name,
            email: formValues.email,
            message: formValues.message
        }

        axios.post(contactUrl, {
            name: toLogin.name,
            email: toLogin.email,
            message: toLogin.message
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
        action.resetForm()
    }

    return (
        <div>
            <ContactForm />
        </div>
    );
}

const validateValue = (formValue) => {
    const error = {};

    if (!formValue.name) {
        error.name = 'name is required!';
    }

    if (!formValue.email) {
        error.email = 'email is required!'
    }

    if (!formValue.message) {
        error.message = 'message is required!'
    }
}

const validation = yup.object().shape({
    name: yup.string().required('input correct name!'),
    email: yup.email().required('input correct email!'),
    message: yup.string().required('message should be in letters!')
})

function ContactForm () {
    return (
        <div>
            <Formik 
                render={props => {
                    initialValues={initialValue}
                    validate={validateValue}
                    validationSchema={validation}
                    onsubmit={onSubmitButton}
                    return (
                        <Form>
                            <Field name="name" type="text" placeholder="Name" />
                            <ErrorMessage name="name" component="div" />
                            <br />
                            <Field name="email" type="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" />
                            <br />
                            <Field name="message" type="text" placeholder="Message" />
                            <ErrorMessage name="message" component="div" />
                            <br />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}
            />
        </div>
    );
}