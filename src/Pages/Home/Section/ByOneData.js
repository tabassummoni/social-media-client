import React, { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaThumbsUp } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import AllDataShow from './AllDataShow';

const ByOneData = () => {
    const { user } = useContext(AuthContext);
    const [status,setStatus] = useState([]);
    const apiConfig = {
        apiHost: process.env.REACT_APP_api_host
    }


    useEffect(() => {
        if(user){
            fetch(`${apiConfig.apiHost}/mediaDashboard/${user.email}`)
        .then(res => res.json())
        .then(data => setStatus(data))
    }
        
    }, []);
    return (
        <div className='ml-36 grid-cols-1 mt-2'>
          {
            
                status.map(data => <AllDataShow
                    key={data._id }
                    data={data}
                    ></AllDataShow>)
                
          }
           
        </div>
    );
};

export default ByOneData;