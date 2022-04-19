import * as Icon from 'react-bootstrap-icons';

import React, {useContext, useRef} from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ResetPassword = () => {

const { sendPasswordReset} = useContext(UserContext);

const reference = useRef({});

const passwordResetHandle = (event)=>{

    event.preventDefault();

    if (reference.current.email.value.trim() !== "" ) {
        try {
            sendPasswordReset(reference.current.email.value);
            
        }
        catch (error) {
            alert(error);
        }
    }
    else {
        alert("Por favor completar el campo email con información valida!")
    }

};

  return (
    <div className="my-login-page">
    <section>
		<div className="container row justify-content-center">
			<div className="col-md-6">
              <Icon.Lock size={18}color="#fff" className="rounded-circle"/>
							<h4 className="card-title">Reset password</h4>
							<form  onSubmit={passwordResetHandle} className="my-login-validation">
								<div className="form-group">
									<label>Email</label>
									<input ref={el => reference.current.email = el}  type="email" className="form-control" name="email"  required />
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary btn-block">
                                    Send password reset email
									</button>
								</div>
								<div className="mt-4 text-center">
								No tiene una cuenta?  <Link to="/signup" color="#0a58ca" >Registrarse</Link>
								</div>
							</form>
			</div>
		</div>
	</section></div>
  );
};

export default ResetPassword;