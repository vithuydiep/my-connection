import clsx from 'clsx';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { ReactNode } from 'react';
import { randomFromString } from '../../Utils/utils';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import useInputFormStyle from '../FormInput/FormInputStyle';
import { FormControlProps } from '../FormInput/model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function FormSelect(props: FormControlProps) {
  const {
    label,
    name,
    options,
    onChangeSelect,
    disabled,
    isOptional,
    toolTipString,
  } = props;
  const { formInputWrp, formErrMsg, selectDisabledWrap } = useInputFormStyle();

  return (
    <div>
      <div className={clsx(formInputWrp, disabled && selectDisabledWrap)}>
        <label htmlFor={name}>
          {label} {isOptional && <i>- optional</i>}
          {toolTipString && <FontAwesomeIcon icon={faCircleInfo} data-tooltip-id="info" data-tooltip-content={toolTipString} size='sm' />}
        </label>
        <Field name={name}>
          {(fieldProps: FieldProps) => {
            const { field } = fieldProps;
            return (
              <Select
                id={name}
                {...field}
                onChange={(
                  event: SelectChangeEvent<HTMLSelectElement>,
                  child: ReactNode
                ) => {
                  field.onChange(event);
                  if (onChangeSelect) onChangeSelect(event);
                }}
                displayEmpty
                disabled={disabled}
              >
                {options?.map((option) => (
                  <MenuItem
                    key={randomFromString(option.value, 5)}
                    value={option.value}
                  >
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            );
          }}
        </Field>
      </div>
      <ErrorMessage
        render={(msg) => <div className={formErrMsg}>{msg}</div>}
        name={name}
      />
    </div>
  );
}

export default FormSelect;
