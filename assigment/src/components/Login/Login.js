import React, { useState, useContext} from 'react';
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/userContext";

const Login = () => {

	const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/api/auth/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
			history.push("/home");
            console.log('success')
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
    
    return (
        <div className="container h-100 mt-5">
		<div className="d-flex justify-content-center h-100">
		<div className="user_card">
		<div className="d-flex justify-content-center">
		<div className="brand_logo_container my-4">
			<img src='https://img.pngio.com/apex-legends-icon-high-resolution-png-image-purepng-free-apex-legends-logo-png-3132_3160.png' 
			className="brand_logo" 
			alt="Logo" 
			/>
		</div>
		</div>
		<div className="d-flex justify-content-center form_container">
		<form onSubmit={submit}> 

		<div className="input-group mb-3">
		<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-user"></i></span>
		</div>
		    <input type="email" name="email" className="form-control input_user" id="email" onChange={e => setEmail(e.target.value)} placeholder="email" />
	    </div>

		<div className="input-group mb-2">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-key"></i></span>
			</div>
			<input type="password" name="password" className="form-control input_pass" id="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
		</div>

			<div className="d-flex justify-content-center mt-3 login_container">
			<button type="button" type="submit" value="Login" className="btn btn-outline-dark">Login</button>
			</div>
			</form>
		    </div>
		    <div className="mt-4">
				<div className="d-flex justify-content-center links">
					Don't have an account? 
                    <Link to="/" className="ml-2 text-primary">Register</Link>
				</div>
			</div>
			</div>
		</div>
	</div>      
    );
}
 
export default Login;