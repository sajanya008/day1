import React from 'react'
import { TableBody, TableCell, TableContainer, TableHead, TableRow , Table } from '@mui/material'

const TableGet = () => {
  return (
    <div>
        <br></br>
      <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Age</TableCell>
                
            </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>john</TableCell>
                <TableCell>BBA</TableCell>
                <TableCell>22</TableCell>
                </TableRow>
            </TableBody>
           </Table>

      </TableContainer>
    </div>
  )
}

export default TableGet
