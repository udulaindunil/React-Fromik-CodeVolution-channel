import React from 'react';
import {Form, Formik} from 'formik';
import FormikControl from "./FormikControl";


function FormikContainer() {

    const dropdownOptions = [
        {key: 'select options', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'}

    ];

    const radioOptions = [
        {key: 'Option 1', value: 'roption 1'},
        {key: 'Option 2', value: 'roption 2'},
        {key: 'Option 3', value: 'roption 3'}
    ];

    const selectOptions = [
        {key: 'Option 1', value: 'coption 1'},
        {key: 'Option 2', value: 'coption 2'},
        {key: 'Option 3', value: 'coption 3'}
    ];

    const initialValues = {
        email: 'udula@gmail.com',
        description: '',
        selectOption: '',
        radioOption: '',
        selectOptions: [],
        birthDate: null,


    };
    const validate = (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = "Email is Required"
        }

        if (!values.description) {
            errors.description = "Description is Required"
        }

        if (!values.selectOption) {
            errors.selectOption = "Select Option is Required"
        }
        if (!values.radioOption) {
            errors.radioOption = "Radio Option is Required"
        }

        if (values.selectOptions.length < 1) {
            errors.selectOptions = "Check box Option is Required"
        }
        if (!values.birthDate) {
            errors.birthDate = "Date is Required"
        }

        return errors;
    };

    const onSubmit = (values) => {
        console.log(values);
        console.log('Saved data', JSON.parse(JSON.stringify(values)));
    };


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            {
                formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />

                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description'
                        />

                        <FormikControl
                            control='select'
                            label='Select'
                            name='selectOption'
                            options={dropdownOptions}
                        />

                        <FormikControl
                            control='radio'
                            label='Radio'
                            name='radioOption'
                            options={radioOptions}
                        />

                        <FormikControl
                            control='checkbox'
                            label='Select Options'
                            name='selectOptions'
                            options={selectOptions}
                        />

                        <FormikControl
                            control='date'
                            label='Birth Date'
                            name='birthDate'
                        />

                        <button type={'submit'}>
                            Submit
                        </button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default FormikContainer;