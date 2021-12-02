import React from 'react';
import {
  fabClasses,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  menuItems: {};
  setValue?: any;
  error?: any;
  errorLabel?: any;
}

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  menuItems,
  error,
  errorLabel,
}) => {
  const errorToggle = error && errorLabel === label ? true : false;
  console.log('errorToggle', errorToggle);
  return (
    <FormControl size={'small'} sx={{ width: '100%' }}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <>
            <InputLabel error={errorToggle}>{label}</InputLabel>
            <Select onChange={onChange} value={value} error={errorToggle}>
              {Object.keys(menuItems).map((key) => (
                <MenuItem key={key} value={menuItems[key]}>
                  {key}
                </MenuItem>
              ))}
            </Select>
            {errorToggle && (
              <FormHelperText error>{label} empty.</FormHelperText>
            )}
          </>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
