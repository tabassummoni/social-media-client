import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const apiConfig = {
        apiHost: process.env.REACT_APP_api_host
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${apiConfig.apiHost}/users`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
   

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (data) => {
        console.log(data);
        let getUserType;
        setLoginError('');
        await signIn(data.email, data.password)
            .then(async (result) => {
                const user = result.user;
                await fetch(`${apiConfig.apiHost}/userDetails/${user.email}`)
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.length > 0) {
                           
                            navigate(from, { replace: true });
                            window.location.reload();
                        } else {
                            toast.error(result[0].message)
                           
                        }

                    })


            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });

    }
    return (
        <div>

        <div className='grid grid-cols-2  '>
            <form className='' onSubmit={handleSubmit(handleLogin)}>
                <div className='justify-center text-center'>
                    <h2 className='mt-32 ml-10 text-4xl font-bold'>Login to your Account</h2>
                    <p className='font-semibold ml-10 '>Login Using social network</p>
                   
                    <input type="text"  {...register("email", {
                        required: "Email Address is required"
                    })} placeholder="Email Address" className="input input-bordered input-info w-96 mt-10 " />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    <br />
                    <input type="password"  {...register("password", {
                        required: "Password Address is required"
                    })} placeholder="Password" className="input input-bordered input-info w-96 mt-5" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <br />

                    <button className=" btn bg-teal-400 w-52 mt-5 mb-5">Login</button>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </div>
            </form>
            


        </div>
        
    </div>
        
    );
};

export default Login;
