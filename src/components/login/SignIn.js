import React, {useContext} from 'react';
import {Context} from "../../context/Context";
import { useHistory } from 'react-router-dom'

import {
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Typography,
    ThemeProvider, Input
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase";

const SignIn = ({toggleSignBox}) => {
    const history = useHistory();
    const {loginDetails} = useContext(Context);
    const {username,email,setEmail,password,setPassword} = loginDetails;

    const theme = createTheme();

    const handleSignIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .then(() => history.push("/"))
            .catch((error)=>{
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
                        padding: "20px",
                        backgroundColor: "white",
                        margin: "55% auto",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form onSubmit={handleSignIn}>
                        <Input
                            required
                            fullWidth
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            name="email"
                            autoComplete="email"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <Input
                            required
                            fullWidth
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            id="password"
                            autoComplete="new-password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </form>
                    <Button
                        onClick={handleSignIn}
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Sign In
                    </Button>
                    <Link
                        className="sign-link"
                        to="/login"
                        onClick={toggleSignBox} >
                        Don't have an account? Sign Up
                    </Link>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;