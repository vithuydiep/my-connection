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
        isNumber,
        onChange,
        placeholder,
        isRequire,
        disabled,
        isOptional,
        toolTipString,
        ...rest
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
                        const { field, form, meta } = fieldProps;
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
            {/* <ErrorMessage
                        render={msg => <div className={formErrMsg}>{msg}</div>}
                        name={name}
                    /> */}
        </div>
    );
}

export default FormInput;
