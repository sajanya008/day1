import React, { useState } from 'react'

import { Table, TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const Api = () => {
    var[user, setuser] = useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((Response) => {
        
        console.log=(Response.data)
        setuser(Response.data)
            
        })
        
    
  return (
    <div>
        <br></br>
        <br></br>
        <TableContainer>
        <Table border="2">
      <TableHead>
            <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>CITY</TableCell>
                
                
            </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val) => {
                return(
               <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.address.city}</TableCell>
            
                </TableRow>
                )
            }
        )}
              
            </TableBody>
            </Table>
            </TableContainer>
    </div>
  )
}

export default Api
