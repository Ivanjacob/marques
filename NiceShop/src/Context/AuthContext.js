import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({}); 
    const [isLoading, setIsLoading] = useState(false);

    const [authTokens, setAuthTokens] = useState(() => {
        const storedTokens = AsyncStorage.getItem('authTokens');
            try {
                return storedTokens ? JSON.parse(storedTokens) : null;
            } catch (error) {
                console.error('Error parsing storedTokens:', error);
                return null;
            }
        });
     
    
    const registerCustomer = (username, email, password, confirm_password) => {
        setIsLoading(true);
        
        axios
            .post(`${BASE_URL}register/customer/`, {
                username,
                email,
                password,
                confirm_password,
            })
            .then((res) => {
                const tokens = res.data;
                setAuthTokens(tokens);
                AsyncStorage.setItem('authTokens', JSON.stringify(tokens));

                const decodeUser = jwt_decode(tokens.access);
                setUser(decodeUser);

                setIsLoading(false);
                console.log('Registration success');
            })
            .catch((error) => {
                console.log(`register error ${error}`);
                setIsLoading(false);
            });
    };
    
    const loginCustomer = (username, password) => {
        setIsLoading(true); 

        axios
            .post(`${BASE_URL}token/`, {
                username,
                password,
            })
            .then((res) => {
                const tokens = res.data;
                setAuthTokens(tokens);
                AsyncStorage.setItem('authTokens', JSON.stringify(tokens));

                const decodeUser = jwt_decode(tokens.access);
                setUser(decodeUser);

                setIsLoading(false);
                console.log('Login success');
            })
            .catch((error) => {
                console.log(`Login error ${error}`);
                setIsLoading(false);
            });
    };

    return (
        <AuthContext.Provider 
            value={{
                isLoading,
                authTokens,
                setAuthTokens,
                user,
                loginCustomer,
                registerCustomer,
            }}>
                {children}
        </AuthContext.Provider>
    );
};
