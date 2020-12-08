import React from 'react'

const Home = () => {
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
		    
            <form onSubmit=''>
            
		    <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-pencil"></i></span>
		    </div>
		        <input type="text" name="title" className="form-control input_user" id="title"  placeholder="title" />
	        </div>
		    
            <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-dollar"></i></span>
		    </div>
		        <input type="number" name="price" className="form-control input_user" id="price"  placeholder="price" />
	        </div>

            <div className="input-group mb-3">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-calendar"></i></span>
			</div>
			<input type="date" name="date" className="form-control input_pass" id="date" />
		    </div>

			<div className="input-group mb-2">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-clipboard"></i></span>
			</div>
			<input type="number" name="password_confirmation" className="form-control input_pass" id="stock"  placeholder="stock" />
		    </div>

			<div className="d-flex justify-content-center mt-3 login_container">
			<button type="submit" value="submit" name="button" className="btn btn-outline-dark">Submit</button>
			</div>
		</form>
	    </div>
		</div>
		</div>
	    </div>      
    </div>
    )
}

export default Home
