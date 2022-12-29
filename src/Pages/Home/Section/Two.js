import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ByOneData from './ByOneData';

const Two = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');
    return (
        <div className='justify-start  ml-24'>
            <div className=''>
                {/* <input type="text" placeholder="Type here" className="input input-bordered input-error w-96 " /> */}
                
                    <Link to ='/statuse' ><button name="text" type="text"   {...register("Type", {
                        
                    })} placeholder="Upload You's Statuse" style={{width:600}} className="input input-bordered input-error ml-36  mt-3 bg-white text-lg" >Upload  Your's state.</button>
                    {errors.text && <p className='text-red-600'>{errors.text?.message}</p>}</Link>
                    <br />
               
            </div>

<ByOneData>
    
</ByOneData>

        </div>
    );
};

export default Two;