


import axios from 'axios'


const baseURL = "http://127.0.0.1:8000/api/"

const userAxios = axios.create({});

export const createCustomer = (newCustomer) => {
    const formData = new FormData();
    formData.append("username", newCustomer.username)
    formData.append("email", newCustomer.email)
    formData.append("password", newCustomer.password)
    formData.append("confirmPassword", newCustomer.confirm_password)

    return userAxios.post(`${baseURL}customer-user/register/`, formData, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
};


export default userAxios;

