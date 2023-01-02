import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { loginSchema, signupSchema } from './validate';
import { Stack, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/authSlice';

const initialValuesSignup = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const initialValuesLogin = {
    email: "",
    password: ""
}

function UserForm({ pageType }) {
    const isLogin = pageType === "login"
    const isSignup = pageType === "signup"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async (values, onSubmitProps)=> {
        const savedUserResponse = await fetch( "https://cineflix-backend.onrender.com/api/v1/users/signup", {
                mode: 'cors',
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }
        );

        const savedUser = await savedUserResponse.json();
        console.log(savedUser)
        onSubmitProps.resetForm();

        if (savedUser.token) {
            dispatch(
                setLogin({
                    user: savedUser.user,
                    token: savedUser.token
                })
            );           
            navigate("/cine-flix");
        }
    };

    const login = async (values, onSubmitProps)=> {
        const loggedInResponse = await fetch( "https://cineflix-backend.onrender.com/api/v1/users/login", {
                mode: 'cors',
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }
        );
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token
                })
            );
            navigate("/cine-flix");
        };
    };

    const handleFormSubmit = async(values, onSubmitProps)=> {
        if (isLogin) await login(values, onSubmitProps);
        if (isSignup) await signup(values, onSubmitProps)
    };

    return (
        <Formik
            initialValues={isLogin ? initialValuesLogin : initialValuesSignup}
            validationSchema={isLogin ? loginSchema: signupSchema}
            onSubmit={handleFormSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit
            })=> (
                <Form onSubmit={handleSubmit}>
                <Stack
                    gap="30px"
                    p={2}
                    color="#000"
                >
                {isSignup && (
                    <TextField
                        color="secondary"
                        label="Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                        type="text"
                        error={Boolean(touched.name) && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        sx={{gridColumn: "span 4"}}
                    />
                )}
                    
                    <TextField
                            color="secondary"
                            label="E-mail"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            type="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{gridColumn: "span 4"}}
                    />
                    <TextField
                            color="secondary"
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            type="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            sx={{gridColumn: "span 4"}}
                    />
                    {isSignup && (
                        <TextField
                            color="secondary"
                            label="ConfirmPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirmPassword}
                            name="confirmPassword"
                            type="password"
                            error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                            sx={{gridColumn: "span 4"}}
                    />
                    )}
                    <div>
                    <Button
                        
                        variant="contained"
                        type="submit"
                    >
                        {isLogin ? "Log In" : "Sign Up"}
                    </Button>
                    </div>
                    <Typography
                            onClick={()=> {
                                isLogin ? navigate("/signup") : navigate("/login")
                            }}
                            sx={{
                                textDecoration: "underline",
                                "&:hover": {
                                    cursor: "pointer",
                                }
                            }}
                        >
                            {isLogin ?
                            "Don't have an account? Sign Up Here." :
                            "Already have an account? Login Here."}
                    </Typography>
                    
                </Stack>
                </Form>
            )
            }
            
        </Formik>
    )
}

export default UserForm;

