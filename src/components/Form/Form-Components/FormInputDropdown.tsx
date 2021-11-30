import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";




export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  menuItems: {};
  setValue?: any;
}


export const FormInputDropdown: React.FC<FormInputProps> = ({name,control,label,menuItems}) => {

  return (
    <FormControl size={"small"} sx={{width:"100%"}}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
          {Object.keys(menuItems).map((key) => (
            <MenuItem key={key} value={menuItems[key]}>{key}</MenuItem>
          ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};