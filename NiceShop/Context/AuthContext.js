import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {

  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = AsyncStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const [user, setUser] = useState(() => {
    const storedTokens = AsyncStorage.getItem("authTokens");
    return storedTokens ? jwt_decode(storedTokens) : null;
  });

  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  const loginCustomer = async (username, password) => {
    const response = await fetch("http://192.168.88.253:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      console.log(response.status);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      AsyncStorage.setItem("authTokens", JSON.stringify(data.access));
      //navigate("/dashboard");
    } else {
      console.log(response.status);
      console.log("Login Failed");
    }
  };


  const registerCustomer = async (email, username, password, confirm_password) => {
    const response = await fetch("http://192.168.88.253:8000/api/customer-user/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password, confirm_password }),
    });
    if (response.status === 201) {
      //navigate("/login");
      console.log(response.status);
      console.log("Registration Successful");
    } else {
      console.log(response.status);
      console.log("Registration Failed");
    }
  };

  const logoutCustomer = () => {
    setAuthTokens(null);
    setUser(null);
    AsyncStorage.removeItem("authTokens");
    ///navigate("/login");
  };

  useEffect(() => {
    const storedToken = AsyncStorage.getItem("authTokens");

    if (storedToken) {
      const decodeToken = jwt_decode(storedToken);
      const expirationDate = decodeToken.exp;
      const currentTimestamp = Date.now() / 1000;

      if (expirationDate < currentTimestamp) {
        AsyncStorage.removeItem("authTokens");
        setAuthTokens(null);
        setUser(null);
      } else {
        setAuthTokens(JSON.parse(storedToken));
        setUser(jwt_decode(storedToken));
      }
    }
    setLoading(false);
  }, []);

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerCustomer,
    loginCustomer,
    logoutCustomer,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
