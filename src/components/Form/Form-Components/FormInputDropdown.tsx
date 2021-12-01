import {FC,useState} from "react";
import { FormControl, InputLabel, MenuItem, Select,SelectChangeEvent } from "@mui/material";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  menuItems: {};
  setValue?: any;
}


export const FormInputDropdown:FC<FormInputProps> = ({label,menuItems,control,name}) => {
    const [feature, setFeature] = useState('');
    
    const handleChange = (event: SelectChangeEvent) => {
      setFeature(event.target.value as string);
    };


  return (
    <FormControl size={"small"} sx={{width:"100%"}}>
      <InputLabel>{label}</InputLabel>
        <Select onChange={handleChange} value={feature} >
      {Object.keys(menuItems).map((key) => (
        <MenuItem key={key} value={menuItems[key]} >{key}</MenuItem>
      ))}
      </Select>
    </FormControl>
  );
};