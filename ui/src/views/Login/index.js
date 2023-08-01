import * as React from 'react';
  import Card from '@mui/material/Card';
  import CardActions from '@mui/material/CardActions';
  import CardContent from '@mui/material/CardContent';
  import SignUpForm from '../../components/SignUpForm'
  import LoginForm from '../../components/LoginForm'
  import CardMedia from '@mui/material/CardMedia';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Login = () => {
    const [shouldShowSignUp, setShouldShowSignUp] = useState(false)
    


    function handleInputChange() {

    }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
         {
            shouldShowSignUp ? <SignUpForm /> : <LoginForm />
         }
          
        </CardContent>
        <CardActions>
          
          
        </CardActions>
      </Card>
    );
}

export default Login