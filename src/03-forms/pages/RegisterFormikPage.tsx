import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ ( values ) => {
                    console.log( values );
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                            .required('Required')
                            .min( 2, 'The name must have more than 2 characters' )
                            .max( 15, 'The name must have less than 15 characters' ),
                    email: Yup.string()
                            .email( 'Provide a valid email' )
                            .required('Required'),
                    password1: Yup.string()
                                .required('Required')
                                .min( 6, 'The password must have more than 6 characters'),
                    password2: Yup.string()
                                .required('Required')
                                .min( 6, 'The password must have more than 6 characters')
                                .oneOf([Yup.ref('password1')], 'Passwords must match')
                    })
                }
            >
                { ({ handleReset }) => (

                    <Form>

                        <MyTextInput
                            label="Full Name"
                            name="name"
                            placeholder="John Doe"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput
                            label="Confirm password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />

                        <button type="submit">Create</button>

                        <button type="button" onClick={ handleReset }>Reset</button>
                    </Form>
                )}

            </Formik>


        </div>
    )
}