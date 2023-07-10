import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'; 
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import Slide from '@mui/material/Slide';

const ModalBox = styled(Box)({
  width: 400,
  background: '#ffffff',
  boxShadow: 24,
  borderRadius: 10,
  padding: 10,
  outline: 'none',
});

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState({ username: '', password: '' });
  const [open, setOpen] = useState(false);
  const [signupUsernameError, setSignupUsernameError] = useState(false);
  const [signupPasswordError, setSignupPasswordError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login with', username, password);
  };

  const handleSignupChange = (name, value) => {
    setSignup({ ...signup, [name]: value });
    if (name === 'username' && value.length < 5) {
      setSignupUsernameError(true);
    } else if (name === 'username') {
      setSignupUsernameError(false);
    }
    if (name === 'password' && value.length < 8) {
      setSignupPasswordError(true);
    } else if (name === 'password') {
      setSignupPasswordError(false);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (!signupUsernameError && !signupPasswordError) {
      console.log('Signup with', signup.username, signup.password);
      setOpen(false);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Man tracking Sensor
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3}}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2}}
            onClick={handleOpen}
          >
            Signup
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Slide direction="down" in={open}>
          <ModalBox>
            <Typography variant="h6" component="h2">
              Signup
            </Typography>
            <form onSubmit={handleSignup}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="signupUsername"
                label="Username"
                name="username"
                autoFocus
                error={signupUsernameError}
                helperText={signupUsernameError ? '사용자 이름은 5글자 이상이어야 합니다.' : ''}
                value={signup.username}
                onChange={(e) =>
                  handleSignupChange('username', e.target.value)
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="signupPassword"
                error={signupPasswordError}
                helperText={signupPasswordError ? '사용자 비밀번호는 8글자 이상이어야 합니다.' : ''}
                value={signup.password}
                onChange={(e) =>
                  handleSignupChange('password', e.target.value)
                }
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                Sign Up
              </Button>
            </form>
          </ModalBox>
        </Slide>
      </Modal>

    </Container>
  );
}

export default App;
