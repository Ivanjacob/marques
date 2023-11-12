import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const AuthContext = createContext();
export default AuthContext;

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const AuthProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const [user, setUser] = useState(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? jwt_decode(storedTokens) : null;
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
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
      localStorage.setItem("authTokens", JSON.stringify(data.access));
      navigate("/dashboard");
      swal.fire({
        title: "Login Successful, Welcome.",
        icon: "success",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log(response.status);
      console.log("Login Failed");
      swal.fire({
        title: "Invalide username or password.",
        icon: "warning",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  // Okay here we go now

  // Function to fetch user profile

  // Its ending here

  const loginInventory = async (username, password) => {
    const response = await fetch("http://192.168.88.253:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      const decodedToken = jwt_decode(data.access);

      if (decodedToken.verified) {
        // The user is verified, allow login
        console.log(response.status);
        setAuthTokens(data);
        setUser(decodedToken);
        localStorage.setItem("authTokens", JSON.stringify(data.access));
        navigate("/inventory");
        swal.fire({
          title: "Login Inventory Successful, Welcome.",
          icon: "success",
          toast: true,
          timer: 6000,
          position: "top",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        // The user is not verified, deny login
        console.log(response.status);
        console.log("Login Inventory Failed - User not verified.");
        swal.fire({
          title: "You're not verified. Please contact the administrator.",
          icon: "warning",
          toast: true,
          timer: 6000,
          position: "top",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } else {
      console.log(response.status);
      console.log("Login Inventory Failed");
      swal.fire({
        title: "Invalid username or password.",
        icon: "warning",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const registerUser = async (email, username, password, password2) => {
    const response = await fetch("http://192.168.88.253:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password, password2 }),
    });
    if (response.status === 201) {
      navigate("/login");
      swal.fire({
        title: "Registration Successful, Login Now.",
        icon: "success",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log(response.status);
      console.log("Registration Failed");
      swal.fire({
        title: "User Credentials doesn't match.",
        icon: "warning",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const registerInventory = async (
    email,
    username,
    password,
    password2,
    employee_id
  ) => {
    const response = await fetch(
      "http://192.168.88.253:8000/api/register/inventorymanager/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,
          password2,
          employee_id,
        }),
      }
    );
    if (response.status === 201) {
      navigate("/login-inventory");
      swal.fire({
        title: "Registration Successful, Login Now.",
        icon: "success",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log(response.status);
      console.log("Registration Failed");
      swal.fire({
        title: "User Credentials doesn't match.",
        icon: "warning",
        toast: true,
        timer: 6000,
        position: "top",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
    swal.fire({
      title: "Logout Successful.",
      icon: "success",
      toast: true,
      timer: 6000,
      position: "top",
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  const logoutInventory = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login-inventory");
    swal.fire({
      title: "Logout Successful.",
      icon: "success",
      toast: true,
      timer: 6000,
      position: "top",
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authTokens");

    if (storedToken) {
      const decodeToken = jwt_decode(storedToken);
      const expirationDate = decodeToken.exp;
      const currentTimestamp = Date.now() / 1000;

      if (expirationDate < currentTimestamp) {
        localStorage.removeItem("authTokens");
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
    registerUser,
    registerInventory,
    loginUser,
    logoutUser,
    loginInventory,
    logoutInventory,
    screenSize,
    setScreenSize,
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
