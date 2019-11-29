import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { StyledAll, StyledDiv, StyleField, StyleForm, StyledButton } from './styles';

const contactUrl = 'https://mariam-portfolio-backend.herokuapp.com/api/contact'

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
        <StyledAll id={'contact'}>
            <StyledDiv>
                <h2>CONTACT</h2>
                <div></div>
            </StyledDiv>
            <p>Have a question or minding a project? <span>Let's talk!</span></p>
            <ContactForm  onSubmitButton={onSubmitButton}/>
        </StyledAll>
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
    email: yup.string().required('input correct email!'),
    message: yup.string().required('message should be in letters!')
})

function ContactForm ({onSubmitButton}) {
    return (
        <div>
            <Formik 
                initialValues={initialValue}
                validate={validateValue}
                validationSchema={validation}
                onsubmit={onSubmitButton}
                render={props => {
                    return (
                        <StyleForm>
                            <StyleField name="name" type="text" placeholder="Name" />
                            <ErrorMessage name="name" component="div" />
                            <br />
                            <StyleField name="email" type="email" row={3} placeholder="Email" />
                            <ErrorMessage name="email" component="div" />
                            <br />
                            <StyleField name="message" type="text" component="textarea" rows={8} placeholder="Message" />
                            <ErrorMessage name="message" component="div" />
                            <br />
                            <StyledButton type="submit">SUBMIT</StyledButton>
                        </StyleForm>
                    )
                }}
            />
        </div>
    );
}