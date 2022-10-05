import React, {} from 'react'
/*import Card from '@mui/material/Card'*/
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Google from '../images/Google.png'
import Apple from '../images/Apple.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Login() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    return (
      <div className='App'>
    
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <Grid container direction="column" spacing={5} className="Grid_main">
    <Grid  item spacing={2}>
      <div id='Username'>
        <TextField
          label="Username"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '38ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start0"><AccountCircle/></InputAdornment>,
          }}
        />
      </div>
    </Grid>
    <Grid  item spacing={2}>
      <div id='Password'>
        <FormControl sx={{ m: 1, width: '38ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
    </Grid>
    </Grid>
    </Box>
   
                {/* <Grid container direction="column" spacing={5}>
                    <Grid xs={12} sm={6} item spacing={2}>
                        <TextField id="username" label="Username" placeholder='Enter your username' />
                    </Grid>
                    <Grid xs={12} sm={6} item spacing={2}>
                        <TextField id="password" label="Password" placeholder='Enter your password' />
                    </Grid>
                </Grid> */}
           
            <Button variant="contained" id='button1'>Login</Button>
        <div className='company_logo'>
            <img id='google' src={Google} alt=""/>
            <img id='apple' src={Apple} alt=""/>
        </div>
        <div id='forgot_password'>
            <a href='/'><h4>Forgot Password?</h4></a>
        </div>
        <div id='treeved_acc'>
            <h6>Don't have a TreeVed account?</h6>
            <a href='/'><h4>Sign Up</h4></a>
        </div>

      </div>

    )
  }
