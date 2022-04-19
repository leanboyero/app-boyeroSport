import  '../SignIn/SignIn.css';

import  * as Icon from 'react-bootstrap-icons';

import {Link, useNavigate} from 'react-router-dom'
import React,{ useContext, useRef } from 'react';

import { UserContext } from '../../context/UserContext';

const SignUp = () => {

    const {createUser, addUser} = useContext(UserContext);
    const reference = useRef({});
	const navigate = useNavigate();

    const registerUserHandle  = async(event) => {
        event.preventDefault();

		const formName = reference.current.name.value;
		const formLastname = reference.current.lastname.value;
        const formPhone = reference.current.phone.value;
        const formEmail = reference.current.email.value;
        const formPassword = reference.current.password.value;

	    if (formName.trim() !== "" && formPhone.trim() !== "" &&
		formEmail.trim() !== "" && formPassword.trim() !== ""
     	) {
		 try {
			const uid = await createUser(formEmail, formPassword)
			await addUser('users', formName,formLastname, formEmail, formPhone, uid)
			navigate('/signIn');
		}
		catch (error) {
			alert(error.message)
		}
	   }
	    else {
		alert("Por favor completar los campos con informacion valida!")
	   }
	}


  return (
    <div className="my-login-page">
    <section>
		<div className="container row justify-content-center">
			<div className="col-md-6">
			<Icon.Lock size={18}color="#fff" className="rounded-circle"/>
							<h4 className="card-title">Registrarse</h4>
							<form  onSubmit={registerUserHandle} className="my-login-validation">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>Nombre</label>
									<input className="form-control" ref={el => reference.current.name = el}  required />
								</div>
                                <div className="form-group col-md-6">
									<label>Apellido</label>
									<input className="form-control" ref={el => reference.current.lastname = el} required />
								</div>
							</div>
							   <div className="form-group">
									<label>Telefono</label>
									<input className="form-control" ref={el => reference.current.phone = el}   required />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input id="email" type="email" className="form-control" ref={el => reference.current.email = el}  required />
								</div>
								<div className="form-group">
									<label className="custom-control-label">Password</label>
									<input type="password" className="form-control" ref={el => reference.current.password = el} required data-eye/>
								</div>
								<div className="form-group">
		
								</div>
								<div className="form-group m-0">
									<input type="submit" className="btn btn-primary btn-block" value="Guardar" />
								</div>
								<div className="mt-4 text-center">
								Ya tiene una cuenta?  <Link to="/signin" color="#0a58ca" >Iniciar sesión</Link>
								</div>
							</form>
			       </div>
		    </div>
	</section>
    </div>
  )
};

export default SignUp;