import {FC} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { mushroomFeature } from '../../mushroomFeatures';
import Paper from '@mui/material/Paper';




export const FeatureTable: FC = () => {


  const data = () =>{
    const rows =[]
    mushroomFeature.map((item)=>{
      return rows.push({name: item.feature, description:item.description})
    })
    return rows
  }

  let tableData = data()
  return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="head" sx={{fontWeight:"bold", fontSize:"large"}}>Name</TableCell>
            <TableCell align="left" variant="head" sx={{fontWeight:"bold", fontSize:"large"}}>Description</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


