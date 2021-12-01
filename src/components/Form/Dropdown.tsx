import {FC,useState} from 'react'
import { FormControl, InputLabel, MenuItem, Select,SelectChangeEvent } from "@mui/material";


interface IDropdownProps {
  name?: string
}

export const Dropdown:FC<IDropdownProps>= ({name})=> {


return (
  <p>{name}</p>
);
}

