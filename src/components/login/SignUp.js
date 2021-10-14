import React, {useContext} from 'react';
import {Box, Button, Container, createTheme, CssBaseline, Input, Typography,ThemeProvider} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {Context} from "../../context/Context";
import {auth} from "../../firebase/firebase";
const SignUp = ({toggleSignBox}) => {
    const history = useHistory();
    const {loginDetails} = useContext(Context);
    const {username,email,password,setEmail,setUsername,setPassword} = loginDetails;
    const theme = createTheme();

    const handleSignUp = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .then(()=>history.push("/"))
            .catch((error) =>{
                alert(error.message);
                console.error(error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        borderRadius: "5px",
                        padding: "40px",
                        backgroundColor: "white",
                        margin: "50% auto",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSignUp}>
                        <Input
                            name="username"
                            placeholder="Username"
                            type="text"
                            required
                            fullWidth
                            id="username"
                            value={username}
                            autoFocus
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <Input
                            required
                            fullWidth
                            type="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            name="email"
                        />
                        <Input
                            required
                            fullWidth
                            name="password"
                            placeholder="Password"
                            value={password}
                            type="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </form>
                    <Button
                        onClick={handleSignUp}
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Sign Up
                    </Button>
                    <Link
                        className="sign-link"
                        to="/login"
                        onClick={toggleSignBox} >
                        Already have an account? Sign in
                    </Link>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;