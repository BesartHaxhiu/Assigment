import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";
import './Home.css';

const Home = () => {

	const history = useHistory();

	const[title, setTitle] = useState();
	const[price, setPrice] = useState();
	const[publish_date, setPublish_date] = useState();
	const[stock, setStock] = useState();
	const[success, setSuccess] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		let titleValidation = document.forms["product-form"]["title"].value;
		let priceValidation = document.forms["product-form"]["price"].value;
		let priceValidationLength = document.getElementById("price").value;
		let dateValidation = document.forms["product-form"]["date"].value;
		let stockValidation = document.getElementById("price").value;
		let stockValidationLength = document.getElementById("stock").value;

		// Title Validation
		if (titleValidation == "") {
			document.getElementById("Error-Title").innerHTML = 'Name is Required';
			return false 
		}
		// Price Validation
		if(priceValidation == ""){
			document.getElementById("Error-Price").innerHTML = 'A price is required';
			return false
		}
		if(isNaN(priceValidationLength) || priceValidationLength < 1){
			document.getElementById('Error-Price').innerHTML = 'Price must be min 1€'
			return false
		}
		// Date Validation
		if(dateValidation == ""){
			document.getElementById("Error-Date").innerHTML = 'Date is required'
			return false
		}
		// Price Validation
		if(stockValidation == ""){
			document.getElementById("Error-Stock").innerHTML = 'A stock number is required';
			return false
		}
		if(isNaN(stockValidationLength) || stockValidationLength < 1){
			document.getElementById("Error-Stock").innerHTML = 'Stock can\'t be lower than 1';
			return false
		}


		try{
			const newProduct = {title,price,publish_date,stock};
			axios.post('http://localhost:5000/api/products', newProduct)
			.then((response) => {
				console.log('Product was submitted: ' + response)
				setSuccess(true)

				setTimeout(() => {
					history.push(`/product-view`)
				}, 1000);
			})
			.catch((err) => {
				console.log(err)
			})
		}
		catch(err) {
            console.log(err)
		}
		document.getElementById("product-form").reset();
	}

    return (
        <div>
        <div className="container h-100 mt-5">
		    <div className="d-flex justify-content-center h-100">
		    <div className="user_card">
		    <div className="d-flex justify-content-center">
		    <div className="brand_logo_container my-4">
			<img src='https://cdn.clipart.email/eb4d3a89dbdd0002a84f677510ed84af_letter-p-logo-design-free-png-logo-design-ideas_640-640.jpeg' 
			className="brand_logo" 
			alt="Logo" 
			/>
		    </div>
		    </div>
		    <div className="d-flex justify-content-center form_container">
		    
            <form onSubmit={submit} name="product-form" id="product-form">
			{(success)?
			<div className="alert alert-warning" role="alert">
				You have succesfuly submitted a product!
			</div>:null
			}

		    <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-pencil"></i></span>
		    </div>
		        <input type="text" name="title" className="form-control input_user" id="title" onChange={e => setTitle(e.target.value)}  placeholder="title" />
			</div>
		    <span className="error-product" id="Error-Title"></span>

            <div className="input-group mb-3">
		    <div className="input-group-append">
			    <span className="input-group-text"><i className="fa fa-dollar"></i></span>
		    </div>
		        <input type="number" name="price" className="form-control input_user" id="price" onChange={e => setPrice(e.target.value)}  placeholder="price" />
	        </div>
 			<span className="error-product" id="Error-Price"></span>

            <div className="input-group mb-3">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-calendar"></i></span>
			</div>
			<input type="date" name="date" className="form-control input_pass" id="date" onChange={e => setPublish_date(e.target.value)}/>
		    </div>
			<span className="error-product" id="Error-Date"></span>

			<div className="input-group mb-2">
			<div className="input-group-append">
			<span className="input-group-text"><i className="fa fa-clipboard"></i></span>
			</div>
			<input type="number" name="password_confirmation" className="form-control input_pass" id="stock" onChange={e => setStock(e.target.value)}  placeholder="stock" />
		    </div>
			<span className="error-product" id="Error-Stock"></span>

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
