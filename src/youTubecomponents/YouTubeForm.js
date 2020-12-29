import React, {useState} from 'react'
import {ErrorMessage, FastField, Field, FieldArray, Form, Formik} from "formik";
import TextError from "./TextError";

const initialValues = {
    name: 'Indunil',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
};

const savedValues = {
    name: 'Udula',
    email: 'udula@gmail.com',
    channel: 'The Channel',
    comments: 'The Comments',
    address: 'The Address',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {

    console.log('form Data ', values);
    console.log('submitProps', onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is Required"
    }

    // if (!values.email) {
    //     errors.email = "Esmail is Required"
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email format'
    // }

    // if (!values.channel) {
    //     errors.channel = "Channel is Required"
    // }

    // if(!values.comments){
    //     errors.comments = "Comment is required"
    // }
    return errors;
};

const validComments = value => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
};

function YouTubeForm() {
    const [formValues, setFormValues] = useState(null);

    return (
        <div className="App">

            <Formik
                initialValues={formValues || initialValues}
                validate={validate}
                onSubmit={onSubmit}
                enableReinitialize
                // validateOnMount
                // validateOnChange={false}
                // validateOnBlur={false}
            >
                {
                    formik => {

                        console.log(formik);
                        return (
                            <Form>
                                <div className='form-control'>
                                    <label htmlFor='name'>Name</label>
                                    <Field
                                        type='text'
                                        id='name'
                                        name='name'
                                        // disabled={true}
                                        placeholder={'You Tube'}
                                    />
                                    <ErrorMessage name='name' component={TextError}/>
                                </div>

                                <div className='form-control'>
                                    <label htmlFor='email'>E-mail</label>
                                    <Field
                                        type='email'
                                        id='email'
                                        name='email'
                                    />
                                    <ErrorMessage name='email'>
                                        {
                                            (errorMessage) => <div className={'error'}>{errorMessage}</div>
                                        }
                                    </ErrorMessage>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='channel'>Channel</label>
                                    <Field
                                        type='text'
                                        id='channel'
                                        name='channel'
                                    />
                                    <ErrorMessage name='channel' component={TextError}/>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='comments'>Comments</label>
                                    <Field
                                        as={'textarea'}
                                        id='comments'
                                        name='comments'
                                        validate={validComments}
                                    />
                                    <ErrorMessage name='comments' component={TextError}/>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='address'>Address</label>
                                    <FastField
                                        type={'text'}
                                        name='address'
                                    >
                                        {
                                            (props) => {
                                                // console.log("Address Field Render", props);
                                                const {field, form, meta} = props;
                                                return (
                                                    <div>
                                                        <input id='address' type={'text'} {...field} />
                                                        {
                                                            meta.touched && meta.error ? <div>{meta.error}</div> : null
                                                        }

                                                    </div>
                                                )
                                            }
                                        }
                                    </FastField>
                                </div>

                                <div className='form-control'>
                                    <label htmlFor='facebook'>Facebook Profile</label>
                                    <Field
                                        type={'text'}
                                        id='facebook'
                                        name='social.facebook'
                                    />
                                    <ErrorMessage name='social.facebook'/>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='twitter'>Twitter Profile</label>
                                    <Field
                                        type={'text'}
                                        id='twitter'
                                        name='social.twitter'
                                    />
                                    <ErrorMessage name='social.twitter'/>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='primaryPh'>Primary Phone Number</label>
                                    <Field
                                        type='text'
                                        id='primaryPh'
                                        name='phoneNumbers[0]'
                                    />
                                    <ErrorMessage name='primaryPh'/>

                                </div>

                                <div className='form-control'>
                                    <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                                    <Field
                                        type='text'
                                        id='secondaryPh'
                                        name='phoneNumbers[1]'
                                    />
                                    <ErrorMessage name='secondaryPh'/>
                                </div>

                                <div className='form-control'>
                                    <label>List Of Phone Numbers</label>

                                    <FieldArray name={'phNumbers'}>
                                        {
                                            (fieldArrayProps) => {
                                                // console.log("field Array Props ", fieldArrayProps);
                                                const {push, remove, form} = fieldArrayProps;
                                                const {values} = form;
                                                const {phNumbers} = values;

                                                // console.log("Errors", form.errors)
                                                return (
                                                    <div>
                                                        {
                                                            phNumbers.map((phNumbers, index) => (
                                                                <div key={index}>
                                                                    <Field name={`phNumbers[${index}]`}/>
                                                                    {
                                                                        index > 0 &&
                                                                        <button type={'button'}
                                                                                onClick={() => remove(index)}>-</button>
                                                                    }
                                                                    <button type={'button'} onClick={() => push('')}>+
                                                                    </button>
                                                                </div>

                                                            ))

                                                        }
                                                    </div>
                                                )
                                            }
                                        }
                                    </FieldArray>
                                </div>

                                {/* <button type='button' onClick={() => formik.setFieldTouched('comments')}>Touched
                                    comments
                                </button>
                                <button type='button' onClick={() => formik.setTouched({
                                    name: true,
                                    email: true,
                                    channel: true,
                                    comments: true
                                })}>Touched All
                                </button>
                                <button type='button' onClick={() => formik.validateField('comments')}>Validate
                                    comments
                                </button>*/}


                                {/*<button type='button' onClick={() => formik.validateForm()}>Validate All</button>*/}
                                {/*<button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button>*/}

                                <button type={'button'} onClick={() => setFormValues(savedValues)}>Load Data</button>
                                <button type={'reset'} >Reset Data</button>
                                <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>


                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}

export default YouTubeForm
