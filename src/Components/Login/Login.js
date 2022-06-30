import React from 'react'
import { useForm } from 'react-hook-form'
function Login() {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onFormSubmit = (data) => {
		console.log(data)
	}
	return (

		<div className='container'>
			<div className='m-5 shadow row p-4' style={{ borderRadius: "20px" }}>

				<div className="col-12 col-md-12 col-lg-12 col-sm-12">
					<h3>Login</h3>
					<p className='text-white'>Log in to access your contacts</p>
					<br />
					<div>
						<form onSubmit={handleSubmit(onFormSubmit)}>
							<div className='mb-4'>
								<label htmlFor='email' className='fs-6 text-uppercase' style={{ fontWeight: "500" }}>Email</label>
								<input type="email" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your Email' name="email" id="email" {...register("email", { required: "true" })} />
								{errors.email?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Email!</span>}
							</div>
							<div className='mb-4'>
								<label htmlFor='password' className='fs-6 text-uppercase' style={{ fontWeight: "500" }}>Password</label>
								<input type="password" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your Password' name="password" id="password" {...register("password", { required: "true" })} />
								{errors.password?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Password!</span>}
							</div>
							{/* {validation === false && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Invalid Email or Password or Phone No</span>} */}
							<button className='mt-5 text-uppercase btn btn-warning fw-bold w-100 btn' style={{ color: "white", letterSpacing: "2px" }} type="submit">Verify</button>
						</form>
					</div>
				</div>
			</div>
			<div>
				<p className='text-center text-muted'>By continuing you agree to our Terms of service
					<br />and Privacy & Legal Policy.</p>
			</div>
		</div>

	)
}

export default Login