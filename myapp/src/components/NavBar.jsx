import React from 'react'
import { AppBar,Typography, Button,Toolbar} from '@mui/material'
import{ Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h5">Myapp</Typography><br></br>
          <Link to="/Login">
          <Button variant="contained" color="warning">LOgin</Button>
          </Link>&nbsp;
          <Link to='/Signup'>
          <Button variant="contained" color="inherit">Signup</Button>
          </Link>&nbsp;
          <Link to='/t'>
          <Button variant="contained" color="inherit">Table</Button>
          </Link>&nbsp;
          <Link to='/stateBasic'>
            <Button variant="contained" color="warning">STATE</Button>
          </Link>&nbsp;
          <Link to='/counter'>
            <Button variant='contained'  color="inherit">COUNTER</Button>
    
          </Link>&nbsp;
          <Link to='/name'>
            <Button variant='contained' color='inherit'>NAME</Button>
          </Link>&nbsp;
          <Link to='/api'>
      
            <Button variant='contained' color='inherit'>API</Button>
          </Link>&nbsp;
          <Link to='/product'>
            <Button variant='contained' color='inherit'>PRODUCT</Button>
          </Link>
        
        </Toolbar>

      </AppBar><br></br>
    </div>
  )
}

export default NavBar
