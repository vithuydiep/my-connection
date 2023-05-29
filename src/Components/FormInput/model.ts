import { SelectChangeEvent } from '@mui/material';
import { FieldConfig } from 'formik';
import { ChangeEvent, FocusEvent } from 'react';

export interface FormControlProps extends FieldConfig {
  type?: string;
  isNumber?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  label: string;
  value?: string | number;
  id?: string;
  mask?: string;
  onKeyUp?: () => void;
  options?: OptionsType;
  onSelect?: (value: string) => void;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  onChangeSelect?:(event: SelectChangeEvent<any>) => void;
  onAccept?: (value: string) => void;
  onBlur?: (e: FocusEvent<any>) => void;
  autoFocus?: boolean;
  isRequire?: boolean;
  error?: string;
  description?: string;
  isOptional?: boolean;
  toolTipString?: string;
}

export interface FormSelectProps extends FormControlProps {
  options: OptionsType;
}

export type OptionsType = { value: string; key: string }[];
