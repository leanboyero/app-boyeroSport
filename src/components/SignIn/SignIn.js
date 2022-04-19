import  './SignIn.css';

import * as Icon from 'react-bootstrap-icons';

import React, { useContext, useRef } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const SignIn = () => {

    const { loginUser } = useContext(UserContext);

    const reference = useRef({});

	const signInHandle = async (event) => {
        event.preventDefault();

        if (reference.current.email.value.trim() !== "" && reference.current.password.value.trim() !== "") {
            try {
                await loginUser(reference.current.email.value, reference.current.password.value)
				
            }
            catch (error) {
                alert(error);
            }
        }
        else {
            alert("Por favor completar los campos con informacion valida!")
        }
    };

  return (
    <div className="my-login-page">
    <section>
		<div className="container row justify-content-center">
			<div className="col-md-6">
              <Icon.Lock size={18}color="#fff" className="rounded-circle"/>
							<h4 className="card-title">Iniciar sesión</h4>
							<form onSubmit={signInHandle} className="my-login-validation">
								<div className="form-group">
									<label>Email</label>
									<input ref={el => reference.current.email = el} type="email" className="form-control" name="email"  required />
								</div>
								<div className="form-group">
									<label className="custom-control-label">Password{' '}
										 <Link to="/resetpassword" className="float-right">
											No recuerda su password?
										 </Link>
									</label>
									<input  ref={el => reference.current.password = el} type="password" className="form-control"  required data-eye/>
								</div>
								<div className="form-group m-0">
									<button type="submit" className="btn btn-primary btn-block">
										Login
									</button>
								</div>
								<div className="mt-4 text-center">
								No tiene una cuenta?  <Link to="/signup" color="#0a58ca" >Registrarse</Link>
								</div>
							</form>
			</div>
		</div>
	</section></div>
  )
}

export default SignIn;