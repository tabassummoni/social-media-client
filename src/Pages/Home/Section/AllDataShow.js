import React from 'react';
import { FaHeart, FaRegComment, FaThumbsUp } from 'react-icons/fa';

const AllDataShow = ({data}) => {
    const {description,image, createdAt, updatedAt, likeCount}=data ;
    return (
        <div>
             <div className="card  bg-base-100 shadow-xl" style={{width:600}}>
                <div className='flex mt-3'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <p className='ml-3 mt-3 text-xl font-bold text-white'> {data.userData.name}</p>
                </div>
               <p className='ml-3 mt-3 text-xs'> {new Date(updatedAt).toLocaleString('en-US') || new Date(createdAt).toLocaleString('en-US')}</p>
                { image && <figure>{<img src={image} className= 'w-full'  alt="Shoes" />}</figure> }
               
                <div className="card-body">
                   
                    <p className='text-white'>{description}</p>
                    <div className="card-actions justify-start">
                        <div className="flex">
                            <span className='text-lg font-bold'>{likeCount}</span>
                            { data.loveDetails ? <span className='ml-2 mt-1.5 text-red-500'><FaHeart></FaHeart> </span>
                            : <span className='ml-2 mt-1.5 text-white'><FaHeart></FaHeart> </span>
                            } 
                            
                        </div>

                        <div className="flex">
                            <span className='text-lg font-bold'>{likeCount}</span>
                            <span className='ml-2 mt-1.5 '><FaRegComment></FaRegComment> </span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDataShow;