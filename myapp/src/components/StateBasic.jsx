import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

const StateBasic = () => {
    var[name,setname]=useState("hello")
    var[nval,sval]=useState()

    const setval=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }

        const SubHandler=()=>{
            sval(name)
        }
    
  return (
    <div>
        <br></br><br></br>
        <Typography variant='h3'>Welcome {nval}</Typography>
        <TextField variant='outlined' onChange={setval}/>  <br></br>
        <br></br>
        <Button variant='contained' color="success" onClick={SubHandler}>SUBMIT</Button> 
    </div>
  )
}

export default StateBasic
