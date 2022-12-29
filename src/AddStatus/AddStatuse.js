import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AddStatuse = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const [mongoUser, setMongoUser] = useState([]);
    const imageHostKey = process.env.REACT_APP_imgbb;
   
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/'
    const apiConfig = {
        apiHost: process.env.REACT_APP_api_host
    }


    const statusAdd = data => {
        const media = {
            description: data.description,
            userEmail: user.email,
            postDate: data.date,
            image: data.imggg,
        }
        fetch(`${apiConfig.apiHost}/allStatus`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(media)

        })
            .then(res => res.json())
            .then(data => {
                setError('');
                console.log(data)
                toast.success('MEDIA added successfully');
               // Navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error)
                toast.error('There is an error occurred. Please try again');
            })
    }

    const handleStatusAdd = data => {

        const image = data.image[0];
        console.log("test : "+image)
        if(image != undefined){
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        console.log(imgData.data.url);
                        data.imggg = imgData.data.url
                        statusAdd(data)
                        
    
                    }
                })
                .catch(error => {
                    console.error(error)
                    setError(error.message);
                })
        }else{
            data.imggg = ""
            statusAdd(data)
        }
        
    }
    return (
        <div><form onSubmit={handleSubmit(handleStatusAdd)}>
            <input name="image" type="file"  {...register("image", {
                required: "Image is required"
            })} className="form-control-file p-3 input input-bordered input-accent w-96 h-16 mt-3 text-lg" id="exampleFormControlFile1" />
            {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
            <br /><br />
            <textarea  {...register("description", {
                required: "Description is Required"
            })} name="description" className="textarea textarea-accent " style={{ width: 800, height: 350 }} placeholder="What's on your mind ...."></textarea>
            <br></br>
            <button className="btn btn-outline btn-accent">Submit</button>
        </form>
        </div>
    );
};

export default AddStatuse;