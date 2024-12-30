import React, { useEffect, useState } from 'react'
import {Button, Typography } from '@mui/material'

const Name = () => {
    var [name, setname] = useState("")
    const first = () => {
        setname("REACT")
    }
    const second = () => {
        setname("ANGULAR")
    }
    const third = () => {
        setname("VUE")
    }
    useEffect(() => {
        first()
    },[])
    

  return (
    <div>
        <br></br><br></br>
        <Typography  variant='h5'>WELCOME {name}</Typography>
        <Button variant='contained' color='primary' onClick={first}>REACT</Button>&nbsp;
        <Button variant='contained' color='primary' onClick={second}>ANGULAR</Button>&nbsp;
        <Button variant='contained' color='primary' onClick={third}>VUE</Button>&nbsp;
      
      
      
    </div>
  )
}

export default Name
