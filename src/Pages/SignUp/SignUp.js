import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const apiConfig = {
        apiHost: process.env.REACT_APP_api_host
    }
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = (data) => {
        //firebase
        console.log(data);
        setSignUPError('');
        createUser(data.email,
            data.password,
            data.type
        )
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));

                //save data mongodb
                const mongoUser = {

                    name: data.name,
                    email: data.email,
                    password: data.password,
                    university: data.university,
                    address: data.address,
                    
                }
                fetch(`${apiConfig.apiHost}/userData`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mongoUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    return (
        <div>
            <div>
                <div className="hero mb-20">
                    <div className="card  mt-16">
                        <div className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold  text-center">Sign Up</h1>
                                <form onSubmit={handleSubmit(handleSignUp)}>
                                    
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Name</span></label>
                                        <input type="text" {...register("name", {
                                            required: "Name is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Address</span></label>
                                        <input type="text" {...register("address", {
                                            required: "address is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">University</span></label>
                                        <input type="text" {...register("university", {
                                            required: "University is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.university && <p className='text-red-500'>{errors.university.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Email</span></label>
                                        <input type="text" {...register("email", {
                                            required: "Email is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Password</span></label>
                                        <input type="password" {...register("password", {
                                            required: "Password is Required"
                                        })} className="input input-bordered w-full max-w-xs" />
                                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                    </div>
                                    
                                    <p>Already have an account <Link to="/login">LogIn Please ..</Link></p>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
};

export default SignUp;