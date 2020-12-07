import React from 'react'
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
    <div>
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
		    
            <form>
            
		    <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-user"></i></span>
		    </div>
		        <input type="text" name="" className="form-control input_user" value="" placeholder="username" />
	        </div>
		    
            <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
		    </div>
		        <input type="text" name="" className="form-control input_user" value="" placeholder="email" />
	        </div>

            <div className="input-group mb-2">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-key"></i></span>
			</div>
			<input type="password" name="" className="form-control input_pass" value="" placeholder="password" />
		    </div>

			<div className="d-flex justify-content-center mt-3 login_container">
			<button type="button" name="button" className="btn btn-outline-dark">Sign up</button>
			</div>
		</form>
	    </div>
		    <div className="mt-4">
				<div className="d-flex justify-content-center links">
					Already have an account ?  
                    <Link to="/" className="ml-2 text-primary">Login</Link>
				</div>
			</div>
			</div>
		</div>
	</div>      
        </div>
    )
}

export default SignUp
