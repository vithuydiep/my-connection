import * as React from 'react';
import { FormControlProps } from './model';
import useInputFormStyle from './FormInputStyle';
import { Field, FieldProps } from 'formik';
import { scrollIntoView } from '../../Utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


function FormInput(props: FormControlProps) {
    const {
        label,
        name,
        type,
        description,
        onChange,
        placeholder,
        isRequire,
        disabled,
        isOptional,
        toolTipString,
    } = props;
    const {formInputWrp } = useInputFormStyle();
    return (
        <div>
            <div className={formInputWrp}>
                <label htmlFor={name}>
                    {label} {isRequire && <span>*</span>}
                    {isOptional && <i>- optional</i>}
                    {toolTipString && <FontAwesomeIcon icon={faCircleInfo} data-tooltip-id="info" data-tooltip-content={toolTipString} size='sm' />}
                </label>
                <Field name={name}>
                    {(fieldProps: FieldProps) => {
                        const { field } = fieldProps;
                        return (
                            <input
                                type={type ? type : 'text'}
                                placeholder={placeholder || ''}
                                id={name}
                                {...field}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(e);
                                    if (onChange) onChange(e);
                                }}
                                disabled={disabled}
                                onFocus={(e) => scrollIntoView(e)}
                            />
                        );
                    }}
                </Field>
                <p>{description}</p>

            </div>
        </div>
    );
}

export default FormInput;
