import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../Context/userContext";
import './AuthOptions.css';

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <span onClick={logout} className="auth-span">
                Log Out
                </span>
            ) : (
                <>
                <span onClick={register} className="auth-span">
                    Register
                </span>
                <span onClick={login} className="auth-span">
                    Log in
                </span>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;