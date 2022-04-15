import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import VALIDATOR from 'email-validator';

const LoginForm = () => {

    const LoginFormSchema = yup.object().shape({
        email: yup.string().email().required('An email is required'),
        password: yup.string().required().min(8, 'Your password must have at least 8 character'),
    })

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='Phone Number, Username or Email'
                                placeholderTextColor="#444"
                                autoCapitalize='none'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                onBlur={handleBlur('email')}
                            />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor="#444"
                                autoCapitalize='none'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                autoFocus={true}
                                onChangeText={handleChange('password')}
                                value={values.password}
                                onBlur={handleBlur('password')}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 25 }}>
                            <Text style={{ color: '#6bb0f5' }}>Forgot Password?</Text>
                        </View>
                        <Pressable
                            titlesize={20}
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                        <View style={styles.signupContainer}>
                            <Text>Dont have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#6bb0f5' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#0096f6",
        alignItems: 'center',
        borderRadius: 4,
        minHeight: 42,
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '600',
        color: "#fff",
        fontSize: 20,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 50,
        justifyContent: 'center',
    },
})

export default LoginForm;