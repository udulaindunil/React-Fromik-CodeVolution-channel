import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

function DatePicker(props) {
    const {label, name, ...rest} = props;

    return (
        <div className={'form-control'}>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        console.log("Filed ",field);
                        console.log("form ",form);

                        const {setFieldValue} = form;
                        const {value} = field;

                        return <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val=>setFieldValue(name,val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />

        </div>
    );
}

export default DatePicker;