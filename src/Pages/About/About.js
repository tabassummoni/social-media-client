import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    const [mongoUser, setMongoUser] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const apiConfig = {
        apiHost: process.env.REACT_APP_api_host
    }
    useEffect(() => {
        if (user && !mongoUser._id) {

            fetch(`${apiConfig.apiHost}/userDetails/${user.email}`)
                .then(res => res.json())
                .then(userData => setMongoUser(userData[0]))
        }
      
    },[])
    console.log(mongoUser._id)
    return (
        <div>
             <div className='p-10 g-6 justify-center text-center mt-6 ' >
            <p className='text-3xl justify-items-center text-center text-orange-500 font-bold mb-6'>About Me</p>
            <label>Name : </label>
            <input name='buyerName' type="text" value={mongoUser.name ? mongoUser.name : 'null'} disabled className="input input-bordered input-error w-72 mb-7 " />
            <br/>
            <label>Email : </label>
            <input name='buyerEmail' type="text" value={mongoUser.email ? mongoUser.email : 'null'} disabled placeholder="Type here" className="input input-bordered input-error w-72  mb-7" />
            <br/>
            <label>Address : </label>
            <input name='address' type="text" value={mongoUser.address ? mongoUser.address : 'null'} disabled className="input input-bordered input-error w-72 mb-7" />
            <br/>
            <label>University : </label>
            <input name='university' type="text" value={mongoUser.university ? mongoUser.university : 'null'} disabled className="input input-bordered input-error w-72 mb-7" />


        </div>
        </div>
    );
};

export default About;