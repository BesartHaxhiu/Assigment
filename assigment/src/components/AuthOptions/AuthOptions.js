import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext from "../../Context/userContext";
import './AuthOptions.css';

const ActiveLinks = {
    borderBottom: '1px solid white',
    fontWeight: "500",
  };

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')

        history.push('/');
        window.location.reload(false);
    };


    return (
        <nav className="auth-options">
            {userData.user ? (
                <>

                <NavLink to="/home" activeStyle={ActiveLinks}>
                <span className="auth-span">
                Home
                </span>
                </NavLink>
               
                <NavLink 
                to="/product-view" 
                activeStyle={ActiveLinks}
                active-class="active"
                exact
                >
                <span className="auth-span">
                Products
                </span>
                </NavLink> 

                <span onClick={logout} className="auth-span">
                Log Out
                </span>
                </>
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